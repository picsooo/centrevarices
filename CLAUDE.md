# CLAUDE.md — Site web Centre des Varices (Dr Ziane epse Aniat)

## Avant de commencer — OBLIGATOIRE
1. Charge et applique le skill **ui-ux-pro-max** avant toute décision de design ou d'écriture de composant (`/ui-ux-pro-max` ou lecture de son SKILL.md). Si le skill propose un système de design (palette, typo, style), génère-le pour ce brief et suis-le.
2. Lis ce fichier en entier. Ne pose des questions que si une info bloquante manque.
3. Travaille par étapes : setup → design system → sections → RDV → SEO → déploiement. Montre-moi le résultat après chaque étape.

## Le client
Cabinet médical **neuf** qui vient d'ouvrir à Dely Ibrahim (Alger). Le site doit rassurer, être moderne, aéré, premium mais chaleureux. Public : patients (souvent 40+), francophones et arabophones, majoritairement sur mobile.

- Nom : **Centre des Varices** — **مركز الدوالي**
- Médecin : **Dr Ziane epse Aniat**, médecin spécialiste en médecine interne
- Adresse : Rue Mohamed Bettouche Ali N° 28, Clair Val, Dely Ibrahim, Alger (à côté du CNMS)
- Tél fixe : 028 32 68 81 — Mobile / WhatsApp : 0560 76 43 16 (`+213560764316`)
- Horaires (à confirmer, valeurs par défaut) : Samedi → Jeudi 8h30–16h30, fermé le vendredi

### Examens réalisés sur place
Echodoppler vasculaire (artères et veines) — Cartographie veineuse — ECG — MAPA

### Pathologies prises en charge (FR / AR, afficher les deux)
| FR | AR |
|---|---|
| Maladies vasculaires | أمراض الأوعية الدموية |
| Diagnostic et traitement des varices | تشخيص و علاج الدوالي |
| Prise en charge de l'ulcère de jambe veineux | علاج جرح القدم الوريدي |
| Maladies auto-immunes et maladies systémiques | الأمراض المناعية و الإلتهابية |
| Diabète — Hypertension artérielle — Maladies de la glande thyroïde | مرض السكري – الضغط الدموي – إضطراب الغدة الدرقية |

## Identité visuelle
Reprendre l'identité de la carte de visite :
- Vert foncé `#1E5A4C` (principal, CTA), vert feuille `#2F8A72`, menthe `#DDEFE7`, fond `#F4F9F6`, texte `#182622`
- Logo : motif lotus/mandala géométrique vert (fichier dans `/public/logo.svg` — si absent, créer un placeholder SVG lotus simple, à remplacer)
- Typo : display serif douce (Fraunces) + sans humaniste (Manrope). Arabe : Tajawal ou IBM Plex Sans Arabic. Charger via `next/font`.
- Interdit : dégradés flashy, cartes identiques partout, animations sur chaque section, icônes génériques partout. Une seule idée forte : le hero.

## Stack (ma stack habituelle)
- **Next.js 15 App Router** + TypeScript + **Tailwind** + **shadcn/ui** + **Framer Motion** (motion sobre, respecter `prefers-reduced-motion`)
- Pas de CMS pour cette V1 : contenu dans `/content/site.ts` (un seul fichier à éditer pour textes, horaires, tarifs, photos)
- Images via `next/image`, formats WebP/AVIF, `sizes` corrects
- Formulaire RDV : Server Action + validation Zod
- Déploiement : `next build` en standalone, PM2 + Nginx sur VPS Hostarts (fournir `ecosystem.config.js` et un exemple de vhost Nginx avec SSL Let's Encrypt)

## Photos — obligatoire, le site doit être visuel
Prévoir un vrai travail photo, pas des icônes.
1. Créer `/public/photos/` avec des **placeholders de qualité** en attendant les vraies photos du cabinet. Utiliser des images libres de droits (Unsplash / Pexels) via URL directe dans `site.ts`, avec les requêtes suivantes :
   - Hero : femme médecin souriante en cabinet moderne lumineux, ou jambes/marche en pleine nature (léger, positif) — pas de photo de varices/plaies
   - Cabinet : salle de consultation moderne, échographe / doppler, salle d'attente claire
   - Équipe : portrait médecin (placeholder neutre)
   - Ambiance : détails végétaux / lumière naturelle, cohérents avec la palette verte
2. Chaque photo est référencée dans `site.ts` avec `src`, `alt` (FR), et un commentaire `// À REMPLACER par photo réelle`
3. Galerie "Le cabinet" : 4 à 6 photos, grille asymétrique (pas une grille uniforme), lightbox simple
4. Aucune image médicale choquante (ulcères, varices avancées).

## Structure de la page (one-page + ancres, header sticky)
1. **Header** : logo + nom FR/AR, ancres (Consultations, Le cabinet, Accès, Rendez-vous), CTA « Prendre rendez-vous », bouton appel sur mobile
2. **Hero** : photo plein cadre ou split, titre fort (ex. « Des jambes légères, un diagnostic précis. »), sous-titre médecine interne + vasculaire, 2 CTA (RDV / Appeler), 3 preuves : examens sur place, à côté du CNMS, réponse dans la journée
3. **Consultations** : 4 examens en bandeau, puis les pathologies FR/AR (liste bilingue, AR en RTL aligné à droite)
4. **Le médecin** : photo + court texte de présentation (parcours à demander à la cliente — mettre un placeholder clairement marqué)
5. **Comment se passe une consultation** : 3 étapes (écoute/examen clinique → examens au cabinet → diagnostic et plan de traitement) + « à apporter : anciens comptes rendus, analyses, traitements en cours »
6. **Le cabinet** : galerie photos + phrase sur le cabinet neuf, calme, accessible
7. **Rendez-vous** (voir spec ci-dessous)
8. **Accès & horaires** : adresse, 2 numéros cliquables, horaires, Google Maps embed, mention « à côté du CNMS »
9. **Footer** : coordonnées, WhatsApp, mentions légales, crédit « Site réalisé par Webminds Digital Solutions » avec lien vers webminds.dz
10. **Bouton WhatsApp flottant** sur toutes les tailles

## Prise de rendez-vous — spec
Formulaire en 2 étapes max, très simple, gros champs (mobile first) :
- Nom et prénom, téléphone (validation numéro DZ 05/06/07), motif (select : varices / echodoppler / ulcère de jambe / diabète-hypertension / thyroïde / maladie auto-immune / suivi / autre), date souhaitée (min = aujourd'hui, vendredi désactivé), créneau (boutons 30 min entre 8h30 et 16h30, pause 12h–13h30), message facultatif
- À l'envoi :
  1. Server Action : valide (Zod), envoie un **email au cabinet via Resend** (`RESEND_API_KEY` en `.env`, adresse cabinet à configurer) avec le récap
  2. Puis ouvre **WhatsApp** (`wa.me/213560764316`) avec le message prérempli (fallback si l'email échoue, et canal préféré des patients)
  3. Écran de confirmation clair : « Demande envoyée, le cabinet vous confirme par WhatsApp ou téléphone »
- Anti-spam : honeypot + rate limit simple (pas de captcha visible)
- Prévoir dans `site.ts` un switch `bookingMode: 'whatsapp' | 'email' | 'both'`
- **Option V2 (ne pas coder maintenant, juste laisser un TODO)** : agenda réel avec créneaux bloqués via Google Calendar ou Cal.com

## Langues
- FR par défaut. Les pathologies sont affichées en bilingue FR/AR.
- Prévoir la structure pour un vrai switch FR/AR (next-intl) en V2, mais ne pas l'implémenter en V1.

## SEO & perfs
- Metadata complète, OpenGraph, favicon depuis le logo
- Schema.org `MedicalClinic` + `Physician` (nom, adresse, téléphone, horaires, geo)
- Mots-clés naturels : varices Alger, echodoppler Dely Ibrahim, médecin interniste Alger, traitement varices Dely Ibrahim
- Lighthouse mobile ≥ 90 partout, accessibilité (contrastes, focus visible, labels), `robots.txt`, `sitemap.xml`

## Livrables attendus
1. Projet Next.js fonctionnel, `npm run dev` sans erreur
2. `content/site.ts` documenté (tout ce que je dois modifier est là)
3. `README.md` : installation, variables `.env`, remplacement des photos, déploiement PM2/Nginx
4. Un screenshot mobile + desktop de chaque section une fois terminé

## Règles de travail
- Réponses courtes, en français. Pas de longues explications, montre le code et le résultat.
- Ne réinvente pas les infos client : ce qui manque (parcours du médecin, tarifs, vraies photos) → placeholder marqué `TODO_CLIENT`.
- Commit à chaque étape avec un message clair.
