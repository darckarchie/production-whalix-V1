# 📚 Documentation Complète - Projet Whalix

## 🎯 Vue d'ensemble du projet

**Whalix** est une plateforme SaaS d'automatisation WhatsApp spécialement conçue pour les entrepreneurs de Côte d'Ivoire. Elle permet de transformer un compte WhatsApp Business en assistant commercial automatisé grâce à l'intelligence artificielle.

### 🏗️ Architecture générale

```
Whalix Platform
├── Frontend (React + TypeScript + Vite)
├── Backend WhatsApp (Node.js + Baileys)
├── Base de données (Supabase)
├── Services externes (Green API)
└── Infrastructure (Railway/Vercel)
```

---

## 📁 Structure des fichiers et responsabilités

### 🎨 **Frontend - Interface utilisateur**

#### **Pages principales** (`src/pages/`)
- **`Index.tsx`** - Page d'accueil marketing avec Hero, Features, Pricing, FAQ
- **`Register.tsx`** - Inscription avec sélection du secteur d'activité
- **`Login.tsx`** - Connexion utilisateur
- **`Dashboard.tsx`** - Tableau de bord principal avec métriques et aperçu
- **`Conversations.tsx`** - Gestion des conversations WhatsApp
- **`Analytics.tsx`** - Statistiques détaillées et graphiques
- **`KnowledgeBase.tsx`** - Gestion de la base de connaissances (produits/services)
- **`WhatsAppSetup.tsx`** - Configuration et connexion WhatsApp
- **`Settings.tsx`** - Paramètres utilisateur et business
- **`Onboarding.tsx`** - Processus d'onboarding guidé
- **`NotFound.tsx`** - Page 404

#### **Composants UI** (`src/components/ui/`)
Tous les composants de base utilisant Radix UI + Tailwind CSS :
- **`button.tsx`** - Boutons avec variantes Whalix (hero, accent, success)
- **`card.tsx`** - Cards pour l'affichage de contenu
- **`form.tsx`** - Composants de formulaires avec validation
- **`dialog.tsx`** - Modales et popups
- **`badge.tsx`** - Badges de statut et notifications
- **`input.tsx`** - Champs de saisie
- **`select.tsx`** - Sélecteurs dropdown
- **`switch.tsx`** - Interrupteurs on/off
- **`tabs.tsx`** - Navigation par onglets
- **`table.tsx`** - Tableaux de données
- **`chart.tsx`** - Graphiques avec Recharts
- **`toast.tsx`** - Notifications temporaires
- **`sidebar.tsx`** - Navigation latérale
- **Et bien d'autres...**

#### **Composants métier** (`src/components/`)

##### **Marketing & Landing**
- **`Header.tsx`** - En-tête avec navigation et CTA
- **`Hero.tsx`** - Section héro avec proposition de valeur
- **`Features.tsx`** - Présentation des fonctionnalités
- **`ProblemSolution.tsx`** - Problèmes clients et solutions Whalix
- **`Testimonials.tsx`** - Témoignages clients ivoiriens
- **`Pricing.tsx`** - Grille tarifaire avec plans Starter/Pro
- **`FAQ.tsx`** - Questions fréquentes par catégorie
- **`Footer.tsx`** - Pied de page avec liens et contact

##### **Dashboard & Analytics**
- **`dashboard/DashboardLayout.tsx`** - Layout principal avec navigation mobile/desktop
- **`dashboard/QuickMetrics.tsx`** - Métriques rapides adaptées au secteur
- **`dashboard/ConversationsList.tsx`** - Liste des conversations récentes
- **`dashboard/WhatsAppConnectionCard.tsx`** - Gestion connexion WhatsApp
- **`dashboard/AIResponsePreview.tsx`** - Test et aperçu des réponses IA
- **`dashboard/MetricsProvider.tsx`** - Provider pour les métriques temps réel
- **`dashboard/AdvancedMetrics.tsx`** - Métriques avancées avec graphiques

##### **Base de connaissances**
- **`knowledge-base/AddItemModal.tsx`** - Modal d'ajout/modification d'items
- **`knowledge-base/KnowledgeBasePreview.tsx`** - Aperçu de la base de connaissances

##### **Authentification**
- **`auth/AuthProvider.tsx`** - Provider d'authentification Supabase
- **`auth/PhoneInput.tsx`** - Composant de saisie numéro ivoirien

##### **Onboarding**
- **`OnboardingFlow.tsx`** - Processus d'onboarding en 3 étapes

---

## 🔧 **Backend & Services** (`src/lib/`)

### **Store & État global** (`src/lib/store.ts`)
Gestion d'état avec Zustand :
```typescript
interface User {
  id: string
  firstName: string
  lastName: string
  phone: string
  businessName: string
  businessSector: BusinessSector
  isAuthenticated: boolean
  onboardingComplete?: boolean
  whatsappSettings?: { autoReply: boolean }
  assistantSettings?: { style, language, useTu }
}
```

### **Services** (`src/lib/services/`)

#### **`supabase-service.ts`** - Service principal base de données
**Responsabilités :**
- Gestion des tenants (entreprises)
- Gestion des utilisateurs
- Sessions WhatsApp
- Conversations et messages
- Événements et métriques
- Authentification

**Fonctions clés :**
```typescript
- createTenant() - Créer une entreprise
- createUser() - Créer un utilisateur
- createOrUpdateWhatsAppSession() - Gérer sessions WA
- saveMessage() - Sauvegarder messages
- logEvent() - Logger les événements
- getTenantMetrics() - Récupérer métriques
```

#### **`green-api-service.ts`** - Intégration Green API
**Responsabilités :**
- Génération QR codes WhatsApp
- Vérification statut connexion
- Envoi de messages
- Réception de messages
- Gestion des webhooks

#### **`whatsapp-service.ts`** - Service WhatsApp unifié
**Responsabilités :**
- Abstraction des différentes APIs WhatsApp
- Gestion des sessions
- Simulation mode démo
- Traitement des messages entrants

#### **`baileys-integration.ts`** - Intégration Baileys (local)
**Responsabilités :**
- Connexion WebSocket avec serveur Baileys
- Gestion des sessions locales
- Traitement temps réel des messages

### **Hooks personnalisés** (`src/lib/hooks/`)

#### **`use-demo-data.ts`** - Données de démonstration
- Génère des données d'exemple par secteur
- Gère la première visite utilisateur
- Injecte des items de base de connaissances

#### **`use-live-feed.ts`** - Feed temps réel des messages
- Écoute les nouveaux messages WhatsApp
- Simule des conversations en mode démo
- Gère le statut des réponses (IA/humain)

#### **`use-green-api.ts`** - Hook Green API
- Gestion de l'état de connexion Green API
- Traitement des messages entrants
- Génération des réponses IA

#### **`use-baileys-connection.ts`** - Hook Baileys
- Connexion au serveur Baileys local
- Gestion des sessions WebSocket
- Debug et logs détaillés

#### **`use-whatsapp-session.ts`** - Hook session WhatsApp unifié
- Abstraction des différents services WhatsApp
- Gestion d'état unifiée
- Polling de statut

#### **`use-message-handler.ts`** - Traitement des messages
- Analyse d'intention (HIGH/MEDIUM/LOW)
- Sauvegarde en base de données
- Logging des événements

### **Types et utilitaires** (`src/lib/types/` & `src/lib/utils/`)

#### **`types/index.ts`** - Types TypeScript
```typescript
- SectorId - Secteurs d'activité
- Business - Informations entreprise
- KBItem - Items base de connaissances
- LiveReply - Messages temps réel
- DashboardMetrics - Métriques dashboard
- WhatsAppMessage - Messages WhatsApp
- AIResponse - Réponses IA
```

#### **`utils/sector-config.ts`** - Configuration par secteur
```typescript
sectorConfig = {
  restaurant: { label, icon, primaryMetric, actions, quickReplies },
  commerce: { ... },
  services: { ... },
  hospitality: { ... }
}
```

---

## 🗄️ **Base de données - Supabase**

### **Tables principales**

#### **`tenants`** - Entreprises
```sql
- id (uuid, PK)
- name (text) - Nom de l'entreprise
- business_sector (enum) - restaurant|commerce|services|hospitality
- phone (text) - Numéro WhatsApp principal
- country_code (text) - Code pays (+225)
- currency (text) - Devise (FCFA)
- settings (jsonb) - Paramètres business
- created_at, updated_at
```

#### **`users`** - Utilisateurs
```sql
- id (uuid, PK) - Lié à auth.users
- tenant_id (uuid, FK) - Référence vers tenants
- first_name, last_name (text)
- phone (text) - Numéro personnel
- role (enum) - owner|admin|agent
- settings (jsonb) - Préférences utilisateur
- created_at, updated_at
```

#### **`whatsapp_sessions`** - Sessions WhatsApp
```sql
- id (uuid, PK)
- tenant_id (uuid, FK)
- user_id (uuid, FK)
- wa_device_id (text) - ID device WhatsApp
- phone_number (text) - Numéro connecté
- status (enum) - idle|connecting|qr_pending|connected|disconnected|error
- session_path (text) - Chemin session Baileys
- qr_code (text) - QR code base64
- last_error (text) - Dernière erreur
- message_count (int) - Compteur messages
- created_at, updated_at, last_seen_at
```

#### **`conversations`** - Conversations clients
```sql
- id (uuid, PK)
- tenant_id (uuid, FK)
- customer_phone (text) - Numéro client
- customer_name (text) - Nom client
- status (enum) - active|closed|archived
- last_message_at (timestamp)
- message_count (int)
- ai_handled (boolean) - Géré par IA
- human_handoff_at (timestamp) - Transfert humain
- tags (text[]) - Tags de classification
- metadata (jsonb) - Données supplémentaires
```

#### **`messages`** - Messages individuels
```sql
- id (uuid, PK)
- tenant_id (uuid, FK)
- conversation_id (uuid, FK)
- wa_msg_id (text) - ID message WhatsApp
- direction (enum) - inbound|outbound
- from_phone, to_phone (text)
- body (text) - Contenu message
- message_type (enum) - text|image|document|audio|video
- ai_generated (boolean)
- ai_confidence (float) - Confiance IA (0-1)
- intent_detected (enum) - HIGH|MEDIUM|LOW
- metadata (jsonb)
- created_at
```

#### **`events`** - Événements système
```sql
- id (uuid, PK)
- tenant_id (uuid, FK)
- user_id (uuid, FK, nullable)
- conversation_id (uuid, FK, nullable)
- type (text) - Type d'événement
- payload (jsonb) - Données événement
- created_at
```

### **Événements trackés**
- `user_login` - Connexion utilisateur
- `user_logout` - Déconnexion
- `qr_generated` - QR code généré
- `qr_scanned` - QR code scanné
- `session_created` - Session WhatsApp créée
- `connection_open` - Connexion WhatsApp ouverte
- `connection_closed` - Connexion fermée
- `message_received` - Message reçu
- `message_sent` - Message envoyé
- `intent_detected` - Intention détectée
- `order_created` - Commande créée
- `payment_confirmed` - Paiement confirmé

---

## 📊 **Système de métriques**

### **Métriques par secteur**

#### **Restaurant & Alimentation**
```typescript
primaryMetric: 'orders_today' - Commandes du jour
secondaryMetric: 'reservations_today' - Réservations
actions: ['view-orders', 'add-item', 'opening-hours']
quickReplies: ['Horaires', 'Livraison', 'Menu du jour']
```

#### **Commerce & E-shop**
```typescript
primaryMetric: 'orders_today' - Commandes
secondaryMetric: 'quotes_today' - Devis
actions: ['view-orders', 'add-product', 'stock']
quickReplies: ['Livraison 24-48h', 'Paiement livraison', 'Retour 7j']
```

#### **Services Professionnels**
```typescript
primaryMetric: 'reservations_today' - RDV du jour
secondaryMetric: 'quotes_today' - Devis
actions: ['view-appointments', 'new-quote', 'calendar']
quickReplies: ['Devis gratuit 24h', 'Intervention rapide', 'Garantie 1 an']
```

#### **Hôtellerie & Tourisme**
```typescript
primaryMetric: 'reservations_today' - Réservations
secondaryMetric: 'occupancy_rate' - Taux occupation
actions: ['view-reservations', 'availability', 'calendar']
quickReplies: ['Chambres disponibles', 'Petit-déjeuner inclus', 'Check-in 14h']
```

### **Calcul des métriques**

#### **Dashboard principal** (`src/pages/Dashboard.tsx`)
```typescript
const dashboardMetrics = {
  orders_today: salesMetrics.ordersToday,
  reservations_today: 0,
  quotes_today: 0,
  messages_waiting: waitingMessages,
  avg_response_min: 1.2,
  revenue_today: salesMetrics.revenueToday,
  vs_yesterday: {
    orders: calculateTrend(today, yesterday),
    revenue: calculateTrend(revenueToday, revenueYesterday),
    messages: 0
  }
}
```

#### **Métriques avancées** (`src/components/dashboard/AdvancedMetrics.tsx`)
- Évolution des ventes (graphique linéaire)
- Messages par heure (graphique en barres)
- Zones géographiques Abidjan (graphique circulaire)
- Performance IA (taux succès, temps réponse)
- Insights et recommandations automatiques

---

## 🤖 **Système d'Intelligence Artificielle**

### **Analyse d'intention** (`src/lib/hooks/use-message-handler.ts`)

#### **Classification des intentions**
```typescript
HIGH: ['acheter', 'commander', 'prendre', 'veux', 'prix', 'combien', 'réserver', 'disponible']
MEDIUM: ['intéressé', 'peut-être', 'j\'aime', 'pourquoi', 'comment', 'info']
LOW: Tout le reste
```

#### **Génération de réponses** (`src/lib/services/green-api-service.ts`)
```typescript
generateAIResponse(message, kbItems) {
  // 1. Analyse du message
  // 2. Recherche dans la base de connaissances
  // 3. Génération réponse contextuelle
  // 4. Calcul confiance (0-1)
  // 5. Décision de répondre automatiquement
}
```

### **Base de connaissances** (`src/lib/types/index.ts`)
```typescript
interface KBItem {
  id: string
  type: 'product' | 'menu' | 'service' | 'offer'
  name: string
  price: number
  currency: string
  description?: string
  tags: string[]
  availability: boolean
  stock?: number
  popular_queries?: string[] // Questions fréquentes
}
```

---

## 📱 **Intégration WhatsApp**

### **Architecture multi-provider**

#### **1. Green API** (Production recommandée)
- **Service :** `src/lib/services/green-api-service.ts`
- **Hook :** `src/lib/hooks/use-green-api.ts`
- **Avantages :** Stable, API officielle, pas de serveur requis
- **Configuration :** Variables d'environnement `.env`

#### **2. Baileys** (Développement local)
- **Service :** `src/lib/services/baileys-integration.ts`
- **Serveur :** `server/whatsapp-server.js`
- **Hook :** `src/lib/hooks/use-baileys-connection.ts`
- **Avantages :** Gratuit, contrôle total, WebSocket temps réel

#### **3. Service unifié** 
- **Service :** `src/lib/services/whatsapp-service.ts`
- **Hook :** `src/lib/hooks/use-whatsapp-connection.ts`
- **Rôle :** Abstraction pour basculer entre providers

### **Flux de traitement des messages**

```
1. Message reçu sur WhatsApp
   ↓
2. Webhook/WebSocket vers l'application
   ↓
3. Sauvegarde en base (conversations + messages)
   ↓
4. Analyse d'intention (HIGH/MEDIUM/LOW)
   ↓
5. Génération réponse IA basée sur KB
   ↓
6. Envoi automatique si confiance > seuil
   ↓
7. Logging événements + mise à jour métriques
```

---

## 🎨 **Design System Whalix**

### **Couleurs** (`src/index.css`)
```css
/* Brand Colors */
--primary: 173 76% 40% (Teal #14b8a6)
--secondary: 225 84% 25% (Deep Blue #1e3a8a)
--accent: 22 92% 52% (Orange CI #f97316)
--success: 158 64% 52% (Emerald #10b981)
--warning: 43 96% 56% (Amber #f59e0b)

/* Gradients */
--gradient-primary: linear-gradient(135deg, teal, deep-blue)
--gradient-hero: linear-gradient(135deg, teal, deep-blue, orange)
--gradient-card: linear-gradient(145deg, white, light-gray)
```

### **Composants étendus** (`tailwind.config.ts`)
- Variantes de boutons : `hero`, `accent`, `success`, `warning`
- Animations : `fade-in`, `slide-in`, `glow`
- Ombres : `shadow-glow` pour les effets premium
- Typographie : Police Inter avec poids 300-900

---

## 🔄 **Flux utilisateur complets**

### **1. Inscription & Onboarding**
```
/register → Sélection secteur → /onboarding → /dashboard
```

**Étapes :**
1. **Informations personnelles** - Nom, entreprise, téléphone
2. **Sélection secteur** - Restaurant/Commerce/Services/Hôtellerie
3. **Configuration WhatsApp** - Numéro, auto-reply
4. **Paramètres IA** - Style, langue, tutoiement
5. **Redirection dashboard** avec données pré-remplies

### **2. Connexion WhatsApp**
```
/dashboard → WhatsApp Card → QR Generation → Scan → Connected
```

**Processus technique :**
1. **Clic "Activer IA"** → `useWhatsAppSession.connect()`
2. **Génération QR** → API Green/Baileys → Base64 image
3. **Affichage QR** → Instructions scan
4. **Polling statut** → Vérification toutes les 3s
5. **Connexion confirmée** → Mise à jour DB + UI

### **3. Traitement message entrant**
```
WhatsApp → Webhook → AI Analysis → Response → DB Logging
```

**Détail technique :**
1. **Réception** → `handleIncomingMessage()`
2. **Sauvegarde** → `supabaseService.saveMessage()`
3. **Analyse intention** → `analyzeIntent()` → HIGH/MEDIUM/LOW
4. **Génération IA** → `generateAIResponse()` → Confiance 0-1
5. **Envoi auto** → Si confiance > 0.8
6. **Logging** → Événements + métriques

---

## 📈 **Système de métriques temps réel**

### **Provider de métriques** (`src/components/dashboard/MetricsProvider.tsx`)

#### **Métriques trackées :**
```typescript
interface DashboardMetrics {
  orders_today: number
  reservations_today: number
  quotes_today: number
  messages_waiting: number
  avg_response_min: number
  revenue_today: number
  total_customers_today?: number
  new_customers_today?: number
  repeat_rate?: number
  satisfaction_score?: number
  vs_yesterday?: {
    orders: number
    revenue: number
    messages: number
  }
}
```

#### **Sources de données :**
- **Supabase** - Données persistantes via `getTenantMetrics()`
- **LocalStorage** - Cache et données démo
- **WebSocket** - Mises à jour temps réel (Baileys)
- **Polling** - Vérifications périodiques (Green API)

### **Calculs automatiques**
- **Tendances** - Comparaison jour précédent
- **Taux de conversion** - Messages → Commandes
- **Temps de réponse moyen** - Délai IA + humain
- **Satisfaction client** - Basée sur les réponses

---

## 🚀 **Déploiement & Infrastructure**

### **Frontend** (Vercel/Netlify)
- **Build :** `npm run build`
- **Variables d'env :** Supabase URL/Key, Green API credentials
- **Domaine :** `whalix.ci` ou sous-domaine

### **Backend WhatsApp** (Railway/VPS)
- **Serveur :** `server/whatsapp-server.js`
- **Port :** 3001
- **WebSocket :** Socket.io pour temps réel
- **Sessions :** Stockage local `/sessions`

### **Base de données** (Supabase)
- **Région :** Europe (GDPR compliance)
- **RLS :** Row Level Security activé
- **Backups :** Automatiques quotidiens
- **API :** Auto-générée avec types TypeScript

---

## 🔧 **Configuration & Variables d'environnement**

### **Frontend** (`.env`)
```env
# Supabase
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx

# Green API (Production)
VITE_GREEN_API_INSTANCE=1234567890
VITE_GREEN_API_TOKEN=abcdef123456789
VITE_GREEN_API_BASE_URL=https://api.green-api.com

# Backend WhatsApp (Développement)
VITE_WHATSAPP_BACKEND_URL=http://localhost:3001

# Application
VITE_APP_URL=http://localhost:5173
```

### **Backend** (`.env.local`)
```env
# Base de données
DATABASE_URL=postgresql://xxx

# WhatsApp
WHATSAPP_WEBHOOK_URL=https://your-app.com/webhook/whatsapp

# Sécurité
JWT_SECRET=xxx
ENCRYPTION_KEY=xxx
```

---

## 🧪 **Mode développement & Tests**

### **Démarrage local**
```bash
# Frontend
npm run dev

# Backend WhatsApp (optionnel)
npm run whatsapp:start

# Les deux ensemble
npm run whatsapp:dev
```

### **Mode démo**
- **Activation :** Première visite → `localStorage.setItem('whalix_demo_mode', 'true')`
- **Données :** Items pré-remplis par secteur via `use-demo-data.ts`
- **Messages :** Simulation via `use-live-feed.ts`
- **Métriques :** Valeurs simulées réalistes

### **Debug WhatsApp**
- **Logs :** Console navigateur + serveur
- **Status :** Badges temps réel dans l'UI
- **Sessions :** Inspection via `/sessions` folder
- **WebSocket :** Événements dans DevTools Network

---

## 🔐 **Sécurité & Authentification**

### **Supabase Auth**
- **Méthode :** Email + mot de passe
- **RLS :** Isolation par tenant_id
- **Sessions :** JWT avec refresh automatique
- **Policies :** Accès restreint aux données du tenant

### **Validation des données**
- **Numéros CI :** Format +225XXXXXXXX via `normalizeCIPhone()`
- **Formulaires :** Zod schemas avec validation temps réel
- **API :** Validation côté serveur + client

### **Protection des données**
- **Chiffrement :** Messages sensibles chiffrés
- **Logs :** Pas de données personnelles dans les logs
- **GDPR :** Droit à l'oubli + export données

---

## 📱 **Responsive Design & Mobile**

### **Breakpoints**
- **Mobile :** < 768px - Navigation bottom, cards empilées
- **Tablet :** 768px-1024px - Grille 2 colonnes
- **Desktop :** > 1024px - Sidebar + grille 3-4 colonnes

### **Navigation adaptative**
- **Mobile :** Bottom navigation (5 onglets)
- **Desktop :** Sidebar fixe avec sous-menus
- **FAB :** Bouton flottant pour actions rapides

### **Optimisations mobile**
- **Touch targets :** Minimum 44px
- **Swipe gestures :** Navigation entre pages
- **Offline :** Cache localStorage pour données critiques
- **Performance :** Lazy loading + code splitting

---

## 🔄 **Intégrations externes**

### **Green API**
- **Documentation :** [green-api.com/docs](https://green-api.com/docs)
- **Endpoints :** QR, Status, Send, Receive, Webhook
- **Rate limits :** Plan gratuit limité
- **Webhook :** Réception messages temps réel

### **Supabase**
- **Auth :** Gestion utilisateurs
- **Database :** PostgreSQL avec RLS
- **Realtime :** Subscriptions pour live updates
- **Storage :** Images et fichiers (futur)

### **Baileys (Optionnel)**
- **Repo :** [@whiskeysockets/baileys](https://github.com/WhiskeySockets/Baileys)
- **WebSocket :** Communication temps réel
- **Sessions :** Multi-device auth state
- **Limitations :** Serveur requis, plus complexe

---

## 🚨 **Gestion d'erreurs & Monitoring**

### **Erreurs frontend**
- **Toast notifications :** `useToast()` pour feedback utilisateur
- **Error boundaries :** Capture erreurs React
- **Retry logic :** Tentatives automatiques API
- **Fallbacks :** Mode dégradé si services indisponibles

### **Erreurs backend**
- **Try/catch :** Toutes les opérations async
- **Logging :** Console + base de données
- **Health checks :** Endpoints `/health`
- **Reconnexion :** Automatique WebSocket

### **Monitoring**
- **Métriques :** Temps réponse, taux erreur
- **Alertes :** Messages en attente > seuil
- **Logs :** Événements critiques en DB
- **Analytics :** Usage patterns et performance

---

## 📋 **Checklist de déploiement**

### **Pré-production**
- [ ] Variables d'environnement configurées
- [ ] Base de données migrée
- [ ] Tests de connexion WhatsApp
- [ ] Vérification des webhooks
- [ ] Tests de charge sur les métriques

### **Production**
- [ ] Domaine configuré avec HTTPS
- [ ] Certificats SSL valides
- [ ] Monitoring activé
- [ ] Backups automatiques
- [ ] Plan de rollback préparé

### **Post-déploiement**
- [ ] Tests utilisateur complets
- [ ] Vérification des métriques temps réel
- [ ] Monitoring des erreurs
- [ ] Formation équipe support
- [ ] Documentation utilisateur finale

---

## 🛠️ **Maintenance & Évolutions**

### **Tâches récurrentes**
- **Nettoyage sessions :** Supprimer sessions expirées
- **Optimisation DB :** Index et requêtes lentes
- **Mise à jour dépendances :** Sécurité et performance
- **Monitoring métriques :** Alertes et seuils

### **Évolutions prévues**
- **Multi-langues :** Support anglais complet
- **Intégrations :** Shopify, WooCommerce, Square
- **IA avancée :** GPT-4 pour réponses plus naturelles
- **Analytics :** Rapports PDF automatiques
- **Mobile app :** Application native iOS/Android

---

## 📞 **Support & Maintenance**

### **Logs importants**
```bash
# Frontend (Console navigateur)
🔍 [DEBUG] - Messages de debug détaillés
📊 [METRICS] - Calculs de métriques
🔄 [API] - Appels API et réponses

# Backend WhatsApp
📱 [BAILEYS] - Événements Baileys
🌐 [API] - Requêtes HTTP
💾 [DB] - Opérations base de données
```

### **Commandes utiles**
```bash
# Développement
npm run dev                 # Frontend seul
npm run whatsapp:start     # Backend WhatsApp seul
npm run whatsapp:dev       # Frontend + Backend
npm run whatsapp:logs      # Voir logs WhatsApp

# Production
npm run build              # Build frontend
npm run preview            # Preview build local
```

### **Dépannage courant**

#### **WhatsApp ne se connecte pas**
1. Vérifier variables d'environnement Green API
2. Tester endpoint `/health` du serveur
3. Vérifier logs console pour erreurs
4. Régénérer QR code si expiré

#### **Métriques incorrectes**
1. Vérifier `MetricsProvider` dans `App.tsx`
2. Contrôler `localStorage` pour données démo
3. Tester `supabaseService.getTenantMetrics()`
4. Vérifier calculs dans `QuickMetrics.tsx`

#### **IA ne répond pas**
1. Vérifier base de connaissances non vide
2. Tester `generateAIResponse()` manuellement
3. Contrôler seuils de confiance
4. Vérifier webhooks configurés

---

## 📚 **Ressources & Documentation**

### **Technologies utilisées**
- **React 18** + TypeScript + Vite
- **Tailwind CSS** + shadcn/ui
- **Supabase** (Auth + Database + Realtime)
- **Zustand** (State management)
- **React Hook Form** + Zod (Formulaires)
- **Framer Motion** (Animations)
- **Recharts** (Graphiques)
- **Socket.io** (WebSocket)

### **APIs externes**
- **Green API** - WhatsApp Business API
- **Baileys** - WhatsApp Web API alternative
- **Supabase** - Backend as a Service

### **Déploiement**
- **Frontend :** Vercel, Netlify, ou Bolt Hosting
- **Backend :** Railway, Heroku, ou VPS
- **Database :** Supabase (PostgreSQL)

---

## 🎯 **Prochaines étapes**

### **Fonctionnalités prioritaires**
1. **Paiements intégrés** - Orange Money, MTN Money, Wave
2. **Catalogue produits** - Import CSV, images, catégories
3. **Rapports avancés** - Export PDF, analytics poussées
4. **Multi-utilisateurs** - Équipes et permissions
5. **API publique** - Intégrations tierces

### **Optimisations techniques**
1. **Performance** - Code splitting, lazy loading
2. **SEO** - Meta tags, sitemap, robots.txt
3. **PWA** - Service worker, offline mode
4. **Tests** - Unit tests, E2E avec Playwright
5. **CI/CD** - GitHub Actions, déploiement automatique

---

**🎉 Cette documentation couvre l'ensemble de l'écosystème Whalix. Pour toute question technique, consultez les commentaires dans le code ou contactez l'équipe de développement.**