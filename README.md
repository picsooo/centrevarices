# Centre des Varices — Site web

Site vitrine du **Centre des Varices** (Dr Ziane epse Aniat) à Dely Ibrahim, Alger.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion
- Resend (emails RDV)
- Déploiement : PM2 + Nginx sur VPS

## Installation

```bash
npm install
cp .env.example .env.local
# Renseigner RESEND_API_KEY et CABINET_EMAIL dans .env.local
npm run dev
```

## Contenu à modifier

Tout le contenu éditable est dans **`src/content/site.ts`** :
- Coordonnées, horaires, adresse
- Textes (bio médecin, pathologies, examens)
- Photos (URLs Unsplash par défaut, à remplacer)
- Mode de réservation (`bookingMode`)

### Remplacement des photos

1. Placer les vraies photos dans `public/photos/`
2. Mettre à jour les chemins dans `src/content/site.ts` (section `photos`)
3. Chaque photo placeholder est marquée `// À REMPLACER par photo réelle`

### Textes marqués TODO_CLIENT

Chercher `TODO_CLIENT` dans `src/content/site.ts` pour trouver les textes à compléter :
- Bio du médecin (`doctorBio` / `doctorBioAr`)
- Email de contact
- URL Google Maps exacte

## Variables d'environnement

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Clé API Resend pour l'envoi d'emails |
| `CABINET_EMAIL` | Adresse email du cabinet (destinataire RDV) |

## Déploiement (VPS Hostarts)

### Build

```bash
npm run build
```

### PM2

```bash
# Copier .next/standalone sur le serveur
pm2 start ecosystem.config.js
pm2 save
```

### Nginx

Copier `nginx.example.conf` dans `/etc/nginx/sites-available/centredesvarices.dz` et adapter.

```bash
# SSL Let's Encrypt
sudo certbot --nginx -d centredesvarices.dz -d www.centredesvarices.dz
```

## V2 (TODO)

- [ ] Switch FR/AR complet (next-intl)
- [ ] Agenda réel avec créneaux bloqués (Google Calendar / Cal.com)
