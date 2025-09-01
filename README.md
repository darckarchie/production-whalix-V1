# 🚀 Whalix - Assistant Commercial WhatsApp IA

> **Transformez votre WhatsApp en machine de vente automatisée en 5 minutes**  
> Spécialement conçu pour les entrepreneurs de Côte d'Ivoire

[![Démo Live](https://img.shields.io/badge/Démo-Live-brightgreen)](https://whalix-v1-duplicated-1nmx.bolt.host)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue)](https://github.com/your-repo/whalix)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## 📋 **Vue d'ensemble**

Whalix est une plateforme SaaS qui permet aux entrepreneurs ivoiriens de transformer leur WhatsApp Business en assistant commercial automatisé grâce à l'intelligence artificielle.

### ✨ **Fonctionnalités principales**
- 🤖 **IA intégrée** - Réponses automatiques 24/7
- 📱 **Intégration WhatsApp** - Connexion en 2 clics
- 📊 **Analytics avancées** - Métriques temps réel
- 🏪 **Templates sectoriels** - Restaurant, Commerce, Services, Hôtellerie
- 💬 **Base de connaissances** - Gestion produits/services
- 📈 **Conversion tracking** - Suivi des ventes automatisées

---

## 🏗️ **Architecture du projet**

```
Whalix Platform
├── 🎨 Frontend (React + TypeScript + Vite)
│   ├── Pages marketing (Landing, Pricing, FAQ)
│   ├── Dashboard (Métriques, Conversations, Analytics)
│   ├── Gestion WhatsApp (Connexion, Configuration)
│   └── Base de connaissances (Produits/Services)
│
├── 🗄️ Base de données (Supabase PostgreSQL)
│   ├── Tenants (Entreprises)
│   ├── Users (Utilisateurs)
│   ├── WhatsApp Sessions
│   ├── Conversations & Messages
│   └── Events & Metrics
│
├── 🔌 API VPS (Votre serveur WhatsApp)
│   ├── Connexions WhatsApp
│   ├── Traitement messages
│   ├── Génération réponses IA
│   └── Webhooks temps réel
│
└── 🎯 Services externes
    ├── Supabase (Auth + DB + Realtime)
    └── Votre API WhatsApp personnalisée
```

---

## 📁 **Structure des fichiers**

### 🎨 **Frontend - Interface utilisateur**

#### **Pages principales** (`src/pages/`)
```
├── Index.tsx              # Landing page marketing
├── Register.tsx           # Inscription + sélection secteur
├── Login.tsx              # Connexion utilisateur
├── Dashboard.tsx          # Tableau de bord principal
├── Conversations.tsx      # Gestion conversations WhatsApp
├── Analytics.tsx          # Statistiques détaillées
├── KnowledgeBase.tsx      # Base de connaissances
├── WhatsAppSetup.tsx      # Configuration WhatsApp
├── Settings.tsx           # Paramètres utilisateur
├── Onboarding.tsx         # Processus d'onboarding
└── NotFound.tsx           # Page 404
```

#### **Composants métier** (`src/components/`)
```
├── marketing/
│   ├── Header.tsx         # Navigation + CTA
│   ├── Hero.tsx           # Section héro
│   ├── Features.tsx       # Fonctionnalités
│   ├── ProblemSolution.tsx # Problèmes/Solutions
│   ├── Testimonials.tsx   # Témoignages clients CI
│   ├── Pricing.tsx        # Grille tarifaire
│   ├── FAQ.tsx            # Questions fréquentes
│   └── Footer.tsx         # Pied de page
│
├── dashboard/
│   ├── DashboardLayout.tsx      # Layout avec navigation
│   ├── QuickMetrics.tsx         # Métriques rapides
│   ├── ConversationsList.tsx    # Liste conversations
│   ├── WhatsAppConnectionCard.tsx # Connexion WA
│   ├── AIResponsePreview.tsx    # Test réponses IA
│   ├── MetricsProvider.tsx      # Provider métriques
│   └── AdvancedMetrics.tsx      # Métriques avancées
│
├── knowledge-base/
│   ├── AddItemModal.tsx         # Ajout/modification items
│   └── KnowledgeBasePreview.tsx # Aperçu base connaissances
│
├── auth/
│   ├── AuthProvider.tsx         # Provider authentification
│   └── PhoneInput.tsx           # Saisie numéro ivoirien
│
└── OnboardingFlow.tsx           # Processus onboarding
```

#### **Composants UI** (`src/components/ui/`)
Tous les composants de base avec Radix UI + Tailwind CSS :
```
├── button.tsx       # Boutons avec variantes Whalix
├── card.tsx         # Cards pour contenu
├── form.tsx         # Formulaires avec validation
├── dialog.tsx       # Modales et popups
├── badge.tsx        # Badges de statut
├── input.tsx        # Champs de saisie
├── select.tsx       # Sélecteurs dropdown
├── switch.tsx       # Interrupteurs on/off
├── tabs.tsx         # Navigation onglets
├── table.tsx        # Tableaux de données
├── chart.tsx        # Graphiques Recharts
├── toast.tsx        # Notifications
├── sidebar.tsx      # Navigation latérale
└── ... (30+ composants)
```

### 🔧 **Backend & Services** (`src/lib/`)

#### **Services** (`src/lib/services/`)
```
├── supabase-service.ts    # Service principal base de données
├── whatsapp-service.ts    # Service WhatsApp unifié
└── supabase.ts            # Configuration Supabase
```

#### **Hooks personnalisés** (`src/lib/hooks/`)
```
├── use-demo-data.ts       # Données de démonstration
├── use-live-feed.ts       # Feed temps réel messages
├── use-whatsapp-session.ts # Session WhatsApp unifiée
├── use-message-handler.ts  # Traitement messages
├── use-mobile.tsx         # Détection mobile
└── use-toast.ts           # Notifications toast
```

#### **Types & Utilitaires** (`src/lib/`)
```
├── types/index.ts         # Types TypeScript
├── utils/sector-config.ts # Configuration secteurs
├── store.ts               # État global Zustand
└── utils.ts               # Utilitaires généraux
```

---

## 📊 **Système de métriques détaillé**

### **Métriques par secteur d'activité**

#### **🍽️ Restaurant & Alimentation**
```typescript
primaryMetric: 'orders_today'        // Commandes du jour
secondaryMetric: 'reservations_today' // Réservations
itemType: 'menu'                     // Type d'items KB
actions: [
  'view-orders',    // Voir commandes
  'add-item',       // Ajouter plat
  'opening-hours'   // Gérer horaires
]
quickReplies: [
  'Nous sommes ouverts de 8h à 22h',
  'Livraison disponible dans un rayon de 5km',
  'Menu du jour disponible à midi'
]
```

#### **🏪 Commerce & E-shop**
```typescript
primaryMetric: 'orders_today'    // Commandes
secondaryMetric: 'quotes_today'  // Devis
itemType: 'product'              // Produits
actions: [
  'view-orders',    // Voir commandes
  'add-product',    // Ajouter produit
  'stock'           // Gérer stocks
]
quickReplies: [
  'Livraison sous 24-48h',
  'Paiement à la livraison disponible',
  'Retour gratuit sous 7 jours'
]
```

#### **🔧 Services Professionnels**
```typescript
primaryMetric: 'reservations_today' // RDV du jour
secondaryMetric: 'quotes_today'     // Devis
itemType: 'service'                 // Prestations
actions: [
  'view-appointments', // Voir RDV
  'new-quote',        // Nouveau devis
  'calendar'          // Calendrier
]
```

#### **🏨 Hôtellerie & Tourisme**
```typescript
primaryMetric: 'reservations_today' // Réservations
secondaryMetric: 'occupancy_rate'   // Taux occupation
itemType: 'offer'                   // Offres hébergement
actions: [
  'view-reservations', // Voir réservations
  'availability',      // Disponibilités
  'calendar'          // Calendrier
]
```

### **Calcul des métriques** (`src/components/dashboard/QuickMetrics.tsx`)

#### **Métriques principales**
```typescript
interface DashboardMetrics {
  orders_today: number           // Commandes aujourd'hui
  reservations_today: number     // Réservations
  quotes_today: number          // Devis
  messages_waiting: number      // Messages en attente
  avg_response_min: number      // Temps réponse moyen
  revenue_today: number         // CA du jour
  total_customers_today?: number // Clients totaux
  new_customers_today?: number   // Nouveaux clients
  repeat_rate?: number          // Taux fidélité
  satisfaction_score?: number   // Score satisfaction
  vs_yesterday?: {              // Comparaison hier
    orders: number
    revenue: number
    messages: number
  }
}
```

#### **Sources de données**
1. **Supabase** - Données persistantes via `getTenantMetrics()`
2. **LocalStorage** - Cache et données démo
3. **API VPS** - Données temps réel WhatsApp
4. **Calculs locaux** - Tendances et pourcentages

---

## 🤖 **Intelligence Artificielle**

### **Analyse d'intention** (`src/lib/hooks/use-message-handler.ts`)

#### **Classification automatique**
```typescript
analyzeIntent(messageBody: string): 'HIGH' | 'MEDIUM' | 'LOW' {
  const text = messageBody.toLowerCase();
  
  const highIntentKeywords = [
    'acheter', 'commander', 'prendre', 'veux', 'prix', 'combien',
    'réserver', 'booking', 'disponible', 'stock', 'livraison'
  ];
  
  const mediumIntentKeywords = [
    'intéressé', 'peut-être', 'j\'aime', 'pourquoi', 'comment',
    'info', 'renseignement', 'détail'
  ];
  
  if (highIntentKeywords.some(keyword => text.includes(keyword))) {
    return 'HIGH';   // 🔥 Intention d'achat forte
  }
  
  if (mediumIntentKeywords.some(keyword => text.includes(keyword))) {
    return 'MEDIUM'; // 🤔 Intérêt modéré
  }
  
  return 'LOW';      // 💬 Message général
}
```

### **Génération de réponses** (`src/lib/services/whatsapp-service.ts`)

#### **Logique de réponse contextuelle**
```typescript
generateAIResponse(text: string, kbItems: KBItem[]) {
  const lowerText = text.toLowerCase();
  
  // 1. SALUTATIONS (Confiance: 95%)
  if (includes(['bonjour', 'salut', 'bsr'])) {
    return {
      message: 'Bonjour ! 👋 Bienvenue chez nous...',
      confidence: 0.95,
      shouldReply: true
    };
  }
  
  // 2. PRIX & MENU (Confiance: 90%)
  if (includes(['prix', 'menu', 'carte'])) {
    // Utiliser la base de connaissances
    let response = '📋 NOTRE MENU :\n\n';
    kbItems.slice(0, 5).forEach((item, idx) => {
      response += `${idx + 1}. ${item.name} - ${item.price} FCFA\n`;
    });
    return {
      message: response,
      confidence: 0.90,
      shouldReply: true
    };
  }
  
  // 3. HORAIRES (Confiance: 95%)
  // 4. LIVRAISON (Confiance: 90%)
  // 5. DISPONIBILITÉ (Confiance: 85%)
  // 6. RÉPONSE PAR DÉFAUT (Confiance: 60%)
}
```

### **Base de connaissances** (`src/lib/types/index.ts`)

#### **Structure des items**
```typescript
interface KBItem {
  id: string
  business_id: string
  type: 'product' | 'menu' | 'service' | 'offer'
  name: string                    // Nom du produit/service
  price: number                   // Prix en FCFA
  currency: string               // Devise (FCFA)
  image_url?: string             // URL image
  sku?: string                   // Référence/Catégorie
  tags: string[]                 // Tags pour recherche
  availability: boolean          // Disponible ou non
  stock?: number                 // Stock ou durée (services)
  description?: string           // Description détaillée
  popular_queries?: string[]     // Questions fréquentes clients
  created_at: Date
  updated_at: Date
}
```

#### **Gestion par secteur** (`src/components/knowledge-base/AddItemModal.tsx`)
- **Restaurant** - Plats, ingrédients, temps préparation
- **Commerce** - Produits, SKU, stock disponible
- **Services** - Prestations, durée, type de service
- **Hôtellerie** - Chambres, capacité, équipements

---

## 📱 **Intégration WhatsApp**

### **Architecture flexible**

Le projet est conçu pour s'adapter à **votre infrastructure existante** :

#### **🔌 Connexion à votre API VPS**
```typescript
// Configuration dans .env
VITE_VPS_API_URL=https://your-vps-domain.com

// Endpoints attendus sur votre VPS :
POST /api/whatsapp/connect     // Générer QR code
GET  /api/whatsapp/status/:id  // Vérifier statut
POST /api/whatsapp/disconnect  // Déconnecter
GET  /api/messages/recent/:id  // Messages récents
POST /api/messages/send        // Envoyer message
```

#### **📡 Communication temps réel**
```typescript
// Hook unifié (src/lib/hooks/use-whatsapp-session.ts)
const { session, connect, disconnect } = useWhatsAppSession();

// Polling automatique pour vérifier le statut
startStatusPolling() // Vérifie toutes les 3s pendant 2 min max

// Gestion des états
'idle' → 'connecting' → 'qr_pending' → 'connected'
```

### **🔄 Flux de traitement des messages**

```
1. Message reçu sur WhatsApp
   ↓
2. Votre API VPS traite le message
   ↓
3. Webhook vers Whalix frontend
   ↓
4. Sauvegarde en Supabase (conversations + messages)
   ↓
5. Analyse d'intention (HIGH/MEDIUM/LOW)
   ↓
6. Génération réponse IA basée sur base de connaissances
   ↓
7. Envoi automatique si confiance > 80%
   ↓
8. Logging événements + mise à jour métriques temps réel
```

---

## 🗄️ **Base de données Supabase**

### **Tables principales**

#### **`tenants`** - Entreprises
```sql
CREATE TABLE tenants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,                    -- Nom entreprise
  business_sector text NOT NULL,         -- restaurant|commerce|services|hospitality
  phone text NOT NULL,                   -- Numéro WhatsApp principal (+225...)
  country_code text DEFAULT '+225',      -- Code pays
  currency text DEFAULT 'FCFA',         -- Devise
  settings jsonb DEFAULT '{}',           -- Paramètres business
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

#### **`users`** - Utilisateurs
```sql
CREATE TABLE users (
  id uuid PRIMARY KEY,                   -- Lié à auth.users
  tenant_id uuid REFERENCES tenants(id),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,                   -- Numéro personnel
  role text DEFAULT 'owner',             -- owner|admin|agent
  settings jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

#### **`whatsapp_sessions`** - Sessions WhatsApp
```sql
CREATE TABLE whatsapp_sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id),
  user_id uuid REFERENCES users(id),
  wa_device_id text,                     -- ID device WhatsApp
  phone_number text,                     -- Numéro connecté
  status text DEFAULT 'idle',            -- État connexion
  session_path text,                     -- Chemin session
  qr_code text,                         -- QR code base64
  last_error text,                      -- Dernière erreur
  message_count integer DEFAULT 0,      -- Compteur messages
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  last_seen_at timestamptz DEFAULT now()
);
```

#### **`conversations`** - Conversations clients
```sql
CREATE TABLE conversations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id),
  customer_phone text NOT NULL,          -- Numéro client
  customer_name text,                    -- Nom client
  status text DEFAULT 'active',          -- active|closed|archived
  last_message_at timestamptz DEFAULT now(),
  message_count integer DEFAULT 0,
  ai_handled boolean DEFAULT false,      -- Géré par IA
  human_handoff_at timestamptz,         -- Transfert humain
  tags text[] DEFAULT '{}',             -- Tags classification
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
```

#### **`messages`** - Messages individuels
```sql
CREATE TABLE messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id),
  conversation_id uuid REFERENCES conversations(id),
  wa_msg_id text,                       -- ID message WhatsApp
  direction text NOT NULL,              -- inbound|outbound
  from_phone text NOT NULL,
  to_phone text NOT NULL,
  body text NOT NULL,                   -- Contenu message
  message_type text DEFAULT 'text',     -- text|image|document|audio|video
  ai_generated boolean DEFAULT false,   -- Généré par IA
  ai_confidence float,                  -- Confiance IA (0-1)
  intent_detected text,                 -- HIGH|MEDIUM|LOW
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);
```

#### **`events`** - Événements système
```sql
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id uuid REFERENCES tenants(id),
  user_id uuid REFERENCES users(id),
  conversation_id uuid REFERENCES conversations(id),
  type text NOT NULL,                   -- Type événement
  payload jsonb DEFAULT '{}',           -- Données événement
  created_at timestamptz DEFAULT now()
);
```

### **Événements trackés**
```typescript
// Authentification
'user_login'         // Connexion utilisateur
'user_logout'        // Déconnexion

// WhatsApp
'qr_generated'       // QR code généré
'qr_scanned'         // QR code scanné
'session_created'    // Session WhatsApp créée
'connection_open'    // Connexion ouverte
'connection_closed'  // Connexion fermée

// Messages
'message_received'   // Message reçu
'message_sent'       // Message envoyé
'intent_detected'    // Intention détectée

// Business
'order_created'      // Commande créée
'payment_confirmed'  // Paiement confirmé
```

---

## 📈 **Dashboard & Analytics**

### **Composant principal** (`src/pages/Dashboard.tsx`)

#### **Métriques calculées**
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
};

// Fonction de calcul des tendances
const calculateTrend = (today: number, yesterday: number) => {
  if (yesterday === 0) return 0;
  return Math.round(((today - yesterday) / yesterday) * 100);
};
```

### **Métriques avancées** (`src/components/dashboard/AdvancedMetrics.tsx`)

#### **Graphiques disponibles**
- **Évolution ventes** - LineChart avec Recharts
- **Messages par heure** - BarChart temps réel
- **Zones géographiques** - PieChart Abidjan
- **Performance IA** - Métriques succès/temps

#### **KPIs trackés**
```typescript
const metrics = {
  // Ventes
  revenue_today: 285000,
  revenue_yesterday: 195000,
  orders_today: 23,
  avg_order_value: 12391,
  conversion_rate: 3.2,
  
  // WhatsApp
  messages_today: 47,
  messages_waiting: 3,
  ai_response_time: 2.1,
  ai_success_rate: 94.5,
  
  // Clients
  new_customers_today: 8,
  total_customers: 284,
  customer_satisfaction: 4.7,
  repeat_rate: 68
};
```

---

## 🔐 **Authentification & Sécurité**

### **Supabase Auth** (`src/components/auth/AuthProvider.tsx`)

#### **Processus d'inscription**
```typescript
async signUp(email, password, userData) {
  // 1. Créer utilisateur Supabase Auth
  const { user } = await supabase.auth.signUp({ email, password });
  
  // 2. Créer tenant (entreprise)
  const tenant = await supabaseService.createTenant({
    name: userData.business_name,
    business_sector: userData.business_sector,
    phone: normalizeCIPhone(userData.phone) // +225XXXXXXXX
  });
  
  // 3. Créer profil utilisateur
  const profile = await supabaseService.createUser({
    tenant_id: tenant.id,
    first_name: userData.first_name,
    last_name: userData.last_name,
    phone: userData.phone,
    role: 'owner'
  });
  
  // 4. Logger l'événement
  await supabaseService.logEvent({
    tenant_id: tenant.id,
    user_id: user.id,
    type: 'user_login',
    payload: { signup: true }
  });
}
```

#### **Validation numéros ivoiriens** (`src/lib/services/supabase-service.ts`)
```typescript
export function normalizeCIPhone(input10: string): string {
  const cleaned = input10.replace(/[^0-9]/g, '');
  
  // Vérifier exactement 10 chiffres commençant par 0
  if (!/^0\d{9}$/.test(cleaned)) {
    throw new Error('Format invalide: 10 chiffres commençant par 0');
  }
  
  // Convertir en E.164 : +225 + (sans le 0 initial)
  return `+225${cleaned.substring(1)}`;
}
```

### **Row Level Security (RLS)**
```sql
-- Politique d'accès par tenant
CREATE POLICY "Users can only access their tenant data"
  ON conversations
  FOR ALL
  TO authenticated
  USING (tenant_id = (
    SELECT tenant_id FROM users WHERE id = auth.uid()
  ));
```

---

## 🎨 **Design System Whalix**

### **Couleurs** (`src/index.css`)
```css
:root {
  /* Brand Colors - Couleurs Côte d'Ivoire */
  --primary: 173 76% 40%;      /* Teal #14b8a6 */
  --secondary: 225 84% 25%;    /* Deep Blue #1e3a8a */
  --accent: 22 92% 52%;        /* Orange CI #f97316 */
  --success: 158 64% 52%;      /* Emerald #10b981 */
  --warning: 43 96% 56%;       /* Amber #f59e0b */
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, hsl(173 76% 40%), hsl(225 84% 25%));
  --gradient-hero: linear-gradient(135deg, hsl(173 76% 40%) 0%, hsl(225 84% 25%) 50%, hsl(22 92% 52%) 100%);
  --gradient-card: linear-gradient(145deg, hsl(0 0% 100%) 0%, hsl(220 13% 98%) 100%);
  
  /* Shadows */
  --shadow-glow: 0 0 40px hsl(173 76% 40% / 0.3);
}
```

### **Composants étendus** (`src/components/ui/button.tsx`)
```typescript
// Variantes Whalix personnalisées
hero: "bg-gradient-primary text-white shadow-lg hover:shadow-glow"
accent: "bg-accent text-accent-foreground hover:bg-accent-hover"
success: "bg-success text-success-foreground hover:bg-success/90"
```

### **Responsive Design**
- **Mobile** (< 768px) - Navigation bottom, cards empilées
- **Tablet** (768px-1024px) - Grille 2 colonnes
- **Desktop** (> 1024px) - Sidebar + grille 3-4 colonnes

---

## 🚀 **Installation & Déploiement**

### **Prérequis**
- Node.js 18+ et npm
- Compte Supabase
- Votre API VPS WhatsApp opérationnelle

### **Installation locale**
```bash
# 1. Cloner le projet
git clone https://github.com/your-repo/whalix.git
cd whalix

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Éditer .env avec vos credentials

# 4. Démarrer en développement
npm run dev
```

### **Configuration Supabase**
```bash
# 1. Créer un nouveau projet Supabase
# 2. Copier URL et ANON_KEY dans .env
# 3. Exécuter les migrations SQL (voir DOCUMENTATION.md)
# 4. Configurer les politiques RLS
```

### **Déploiement production**
```bash
# Frontend (Vercel/Netlify)
npm run build
# Configurer variables d'env production

# Base de données
# Supabase gère automatiquement la production
```

---

## 🔧 **Configuration**

### **Variables d'environnement** (`.env`)
```env
# === SUPABASE (Obligatoire) ===
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIs...

# === VOTRE API VPS (Obligatoire) ===
VITE_VPS_API_URL=https://your-vps-domain.com
# Ou IP directe: http://123.456.789.012:3001

# === APPLICATION ===
VITE_APP_URL=http://localhost:5173
VITE_APP_NAME=Whalix
```

### **Endpoints API VPS attendus**
Votre serveur VPS doit exposer ces endpoints :

```typescript
// Connexion WhatsApp
POST /api/whatsapp/connect
Body: { tenantId, userId, businessName }
Response: { status, qrCode?, phoneNumber?, error? }

// Statut connexion
GET /api/whatsapp/status/:tenantId
Response: { status, phoneNumber?, deviceId?, lastConnected? }

// Déconnexion
POST /api/whatsapp/disconnect/:tenantId
Response: { status }

// Messages récents
GET /api/messages/recent/:tenantId
Response: [{ id, from, text, timestamp, intent? }]

// Envoyer message
POST /api/messages/send
Body: { to, message, tenantId }
Response: { success, messageId? }
```

---

## 📊 **Monitoring & Debug**

### **Logs frontend**
```typescript
// Debug détaillé dans la console
🔍 [DEBUG] - Messages de debug
📊 [METRICS] - Calculs métriques
🔄 [API] - Appels API et réponses
📱 [WHATSAPP] - Événements WhatsApp
```

### **Métriques temps réel**
- **Provider** - `src/components/dashboard/MetricsProvider.tsx`
- **Calculs** - `src/components/dashboard/QuickMetrics.tsx`
- **Affichage** - Badges, graphiques, tendances
- **Persistance** - Supabase + LocalStorage

### **Gestion d'erreurs**
- **Toast notifications** - Feedback utilisateur immédiat
- **Fallbacks** - Mode dégradé si API indisponible
- **Retry logic** - Tentatives automatiques
- **Error boundaries** - Capture erreurs React

---

## 🔄 **Flux utilisateur complets**

### **1. Inscription & Onboarding**
```
/register → Sélection secteur → /onboarding → /dashboard
```

**Processus détaillé :**
1. **Informations** - Nom, entreprise, téléphone (validation CI)
2. **Secteur** - Restaurant/Commerce/Services/Hôtellerie
3. **WhatsApp** - Numéro, auto-reply
4. **IA** - Style, langue, tutoiement
5. **Dashboard** - Redirection avec données pré-remplies

### **2. Connexion WhatsApp**
```
Dashboard → Card WhatsApp → QR Generation → Scan → Connected
```

**Technique :**
1. Clic "Activer IA" → `useWhatsAppSession.connect()`
2. Appel votre API VPS → Génération QR
3. Affichage QR + instructions
4. Polling statut toutes les 3s
5. Connexion confirmée → Mise à jour DB + UI

### **3. Gestion des conversations**
```
Message entrant → Analyse IA → Réponse auto → Sauvegarde
```

**Détail :**
1. Votre VPS reçoit le message WhatsApp
2. Webhook vers frontend Whalix
3. Analyse intention (HIGH/MEDIUM/LOW)
4. Génération réponse basée sur base de connaissances
5. Envoi automatique si confiance > 80%
6. Sauvegarde conversation + message en Supabase

---

## 🛠️ **Maintenance & Évolutions**

### **Tâches récurrentes**
- **Nettoyage sessions** - Supprimer sessions expirées
- **Optimisation DB** - Index et requêtes lentes
- **Mise à jour dépendances** - Sécurité et performance
- **Monitoring métriques** - Alertes et seuils

### **Évolutions prévues**
- **Paiements** - Orange Money, MTN Money, Wave
- **Multi-langues** - Support anglais complet
- **Intégrations** - Shopify, WooCommerce
- **IA avancée** - GPT-4 pour réponses naturelles
- **Mobile app** - Application native

---

## 📞 **Support & Dépannage**

### **Problèmes courants**

#### **WhatsApp ne se connecte pas**
1. Vérifier `VITE_VPS_API_URL` dans `.env`
2. Tester endpoint `/health` de votre VPS
3. Vérifier logs console pour erreurs API
4. Régénérer QR code si expiré (timeout 2 min)

#### **Métriques incorrectes**
1. Vérifier `MetricsProvider` dans `App.tsx`
2. Contrôler données dans Supabase
3. Tester `supabaseService.getTenantMetrics()`
4. Vérifier calculs dans `QuickMetrics.tsx`

#### **IA ne répond pas**
1. Vérifier base de connaissances non vide
2. Tester génération réponse manuellement
3. Contrôler seuils de confiance (80%)
4. Vérifier webhooks configurés sur VPS

### **Commandes utiles**
```bash
# Développement
npm run dev              # Démarrer frontend
npm run build            # Build production
npm run preview          # Preview build local
npm run lint             # Vérifier code

# Debug
console.log              # Logs dans navigateur
Network tab              # Requêtes API
Supabase Dashboard       # Données en temps réel
```

---

## 🎯 **Points d'intégration avec votre infrastructure**

### **1. API VPS WhatsApp**
- **URL** - Configurée via `VITE_VPS_API_URL`
- **Endpoints** - Standardisés pour compatibilité
- **Webhooks** - Notifications temps réel vers frontend
- **Sessions** - Gestion persistante côté VPS

### **2. Base de données Supabase**
- **Métriques** - Calculées et stockées
- **Événements** - Tous les événements business
- **Sessions** - État des connexions WhatsApp
- **Conversations** - Historique complet

### **3. Frontend React**
- **Dashboard** - Métriques temps réel
- **Gestion** - Base de connaissances
- **Configuration** - Paramètres IA et business
- **Analytics** - Rapports et graphiques

---

## 📚 **Technologies utilisées**

### **Frontend**
- **React 18** + TypeScript + Vite
- **Tailwind CSS** + shadcn/ui
- **Framer Motion** (animations)
- **Recharts** (graphiques)
- **React Hook Form** + Zod (formulaires)
- **Zustand** (état global)

### **Backend & Services**
- **Supabase** (Auth + Database + Realtime)
- **Votre API VPS** (WhatsApp + IA)
- **PostgreSQL** (base de données)

### **Déploiement**
- **Frontend** - Vercel, Netlify, Bolt Hosting
- **Database** - Supabase (géré)
- **API** - Votre VPS existant

---

## 🎉 **Conclusion**

Ce projet Whalix est maintenant **optimisé et nettoyé** pour s'intégrer parfaitement avec votre infrastructure VPS existante. 

### **✅ Fichiers supprimés**
- Services Green API obsolètes
- Intégration Baileys locale
- Serveur WhatsApp local
- Hooks non utilisés

### **✅ Code corrigé**
- Imports mis à jour
- Références aux services supprimés
- Configuration VPS intégrée
- Gestion d'erreurs améliorée

### **✅ Prêt pour production**
- Architecture claire et maintenable
- Documentation complète
- Intégration VPS standardisée
- Métriques temps réel fonctionnelles

**Le projet est maintenant prêt à être connecté à votre API VPS !** 🚀