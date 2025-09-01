import { useState, useEffect, useCallback } from 'react';
import { LiveReply } from '../types';

export function useLiveFeed(businessId: string) {
  const [messages, setMessages] = useState<LiveReply[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Charger les messages depuis localStorage au démarrage
  useEffect(() => {
    const stored = localStorage.getItem('whalix_live_messages');
    if (stored) {
      try {
        const localMessages = JSON.parse(stored);
        setMessages(localMessages);
      } catch (error) {
        console.error('Erreur parsing messages locaux:', error);
      }
    }
  }, []);

  // Écouter les nouveaux messages du serveur Baileys
  useEffect(() => {
    // Écouter les messages via votre API VPS (WebSocket ou polling)
    const connectToVPSFeed = async () => {
      try {
        const VPS_API_URL = import.meta.env.VITE_VPS_API_URL || 'https://your-vps-api.com';
        
        // Polling pour récupérer les nouveaux messages
        const interval = setInterval(async () => {
          try {
            const response = await fetch(`${VPS_API_URL}/api/messages/recent/${businessId}`);
            if (response.ok) {
              const newMessages = await response.json();
              
              if (newMessages.length > 0) {
                setMessages(prev => {
                  const existingIds = prev.map(m => m.id);
                  const filtered = newMessages.filter((m: any) => !existingIds.includes(m.id));
                  const updated = [...filtered, ...prev].slice(0, 20);
                  localStorage.setItem('whalix_live_messages', JSON.stringify(updated));
                  return updated;
                });
              }
            }
          } catch (error) {
            console.error('Erreur récupération messages VPS:', error);
          }
        }, 5000); // Polling toutes les 5 secondes
        
        return () => clearInterval(interval);
      } catch (error) {
        console.error('Erreur connexion VPS feed:', error);
        return () => {};
      }
    };
    
    const cleanup = connectToVPSFeed();
    return () => {
      cleanup.then(fn => fn());
    };
  }, [businessId]);

  const fetchMessages = useCallback(async () => {
    try {
      // Vérifier la connexion via votre API VPS
      const VPS_API_URL = import.meta.env.VITE_VPS_API_URL || 'https://your-vps-api.com';
      const response = await fetch(`${VPS_API_URL}/api/whatsapp/status/${businessId}`);
      
      if (response.ok) {
        const data = await response.json();
        if (data.status === 'connected') {
          setIsConnected(true);
          setError(null);
        } else {
          setIsConnected(false);
        }
      } else {
        setIsConnected(false);
      }
    } catch (err) {
      console.error('Erreur vérification API VPS:', err);
      setIsConnected(false);
      setError('API VPS non disponible');
    }
  }, [businessId]);

  // Simuler de nouveaux messages en mode démo
  const simulateNewMessage = useCallback(() => {
    if (businessId !== 'demo') return;
    
    const random = Math.random();
    if (random > 0.90) { // 10% de chance d'avoir un nouveau message
      const customers = ['Kouassi', 'Aminata', 'Yao', 'Fatou', 'Ibrahim'];
      const messages = [
        'Bonjour, c\'est ouvert ?',
        'Prix du menu du jour ?',
        'Vous livrez à Cocody ?',
        'Disponible demain ?',
        'Je peux commander ?'
      ];
      
      const newMessage: LiveReply = {
        id: `msg_${Date.now()}`,
        at: new Date().toISOString(),
        customer: customers[Math.floor(Math.random() * customers.length)],
        customer_phone: `+22507000000${Math.floor(Math.random() * 100)}`,
        last_message: messages[Math.floor(Math.random() * messages.length)],
        status: 'waiting',
        confidence: 0
      };
      
      setMessages(prev => {
        const updated = [newMessage, ...prev].slice(0, 20); // Garder max 20 messages
        localStorage.setItem('whalix_live_messages', JSON.stringify(updated));
        return updated;
      });
      
      // Simuler réponse IA après 3 secondes
      setTimeout(() => {
        setMessages(prev => {
          const updated = prev.map(msg => 
            msg.id === newMessage.id 
              ? { ...msg, status: 'ai_replied' as const, reply_preview: 'Merci ! Je reviens vers vous rapidement.', confidence: 0.85 }
              : msg
          );
          localStorage.setItem('whalix_live_messages', JSON.stringify(updated));
          return updated;
        });
      }, 3000);
    }
  }, [businessId]);

  useEffect(() => {
    // Fetch initial
    fetchMessages();
    
    // Polling pour les mises à jour
    const interval = setInterval(() => {
      fetchMessages();
      simulateNewMessage();
    }, 15000); // Toutes les 15 secondes
    
    return () => {
      clearInterval(interval);
    };
  }, [businessId, fetchMessages, simulateNewMessage]);

  const markAsReplied = useCallback((messageId: string, reply: string) => {
    setMessages(prev => {
      const updated = prev.map(msg => 
        msg.id === messageId 
          ? { ...msg, status: 'ai_replied' as const, reply_preview: reply, confidence: 0.95 }
          : msg
      );
      localStorage.setItem('whalix_live_messages', JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { messages, isConnected, error, refetch: fetchMessages, markAsReplied };
}