# LeadGenies Website

Eine moderne, mehrsprachige B2B-Website für professionelle Kaltakquise-Services mit KI-gestützter Lead-Generierung.

## Table of Contents

- [Projekt-Übersicht](#projekt-übersicht)
- [Tech-Stack](#tech-stack)
- [Projektstruktur](#projektstruktur)
- [Komponenten-Architektur](#komponenten-architektur)
- [Internationalisierung](#internationalisierung)
- [Seiten & Routing](#seiten--routing)
- [Styling & Design](#styling--design)
- [SEO & Analytics](#seo--analytics)
- [Entwicklung](#entwicklung)
- [Deployment](#deployment)
- [Wichtige Features](#wichtige-features)

---

## Projekt-Übersicht

LeadGenies ist eine B2B-Dienstleistung für professionelle Kaltakquise in Deutschland. Die Website dient als Hauptakquise-Kanal und bietet:

- **Zielgruppe:** B2B-Unternehmen (SaaS, IT, Beratung, Immobilien)
- **Services:** Cold-Calling Service mit deutschen Profi-Callern
- **USP:** Kombination aus menschlicher Expertise + KI-Daten-Analyse
- **Conversion-Ziele:** Lead-Generierung über Kontaktformular, Telefon, WhatsApp

---

## Tech-Stack

### Core Framework
- **Astro 5.5.2** - Static Site Generator für Performance-optimierte Websites
- **React 18.3.1** - Interaktive Komponenten (client-side hydration)
- **TypeScript 5.8.3** - Type-Safety

### Styling & UI
- **Tailwind CSS 4.0.0** - Utility-First CSS Framework
- **@tailwindcss/typography 0.5.15** - Typography Plugin

### Animation & Interaktivität
- **GSAP 3.13.0** - Professional Animation Library
- **Framer Motion 11.13.1** - React Animation Library
- **Motion 12.23.22** - Simplified Animation Library
- **Lenis 1.3.11** - Smooth Scrolling Library
- **Lottie React 2.4.1** - Lottie Animations

### Datenvisualisierung
- **Chart.js 4.5.1** - Chart Library
- **react-chartjs-2 5.3.1** - React Wrapper für Chart.js

### Forms & Analytics
- **@formspree/react 2.5.1** - Serverless Form Handling
- **@vercel/analytics 1.5.0** - Vercel Analytics
- **Google Tag Manager** - GTM-5X4XL28N

### 3D Graphics
- **WebGL 2.0** - Custom WebGL Rendering
- **gl-matrix 3.4.4** - Matrix Math Utilities
- **ogl 1.0.11** - WebGL Library

### Icons & Utilities
- **Lucide React 0.453.0** - Icon Library
- **class-variance-authority 0.7.1** - Component Style Composition
- **clsx 2.1.1** - Conditional classNames
- **tailwind-merge 2.6.0** - Merge Tailwind Classes

---

## Projektstruktur

```
leadgenies-master/
├── src/
│   ├── components/
│   │   ├── leadgenies/              # 17 Hauptkomponenten der Website
│   │   │   ├── HeaderLeadGenies.tsx
│   │   │   ├── HeroLeadGeniesv2.tsx
│   │   │   ├── TrustSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ├── HowItWorksSectionV5.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── ROICalculatorSection.tsx
│   │   │   ├── GuaranteeTempSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── FooterSection.tsx
│   │   │   ├── ReviewCardsSection.tsx
│   │   │   ├── LogoLoop.tsx
│   │   │   ├── CountUp.tsx
│   │   │   ├── InfiniteMenu.tsx
│   │   │   └── CookieBanner.tsx
│   │   ├── LenisScroll.tsx
│   │   └── DeferredAnalytics.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro              # Master Layout Template
│   │
│   ├── pages/                        # Astro File-based Routing
│   │   ├── index.astro               # Deutsche Startseite
│   │   ├── en/
│   │   │   └── index.astro           # Englische Startseite
│   │   ├── impressum.astro           # Impressum (DE)
│   │   ├── datenschutz.astro         # Datenschutz (DE)
│   │   ├── agb.astro                 # AGB (DE)
│   │   ├── en/imprint.astro          # Imprint (EN)
│   │   ├── en/terms.astro            # Terms (EN)
│   │   ├── termin-gebucht-8x7kd.astro # Booking Confirmation
│   │   └── robots.txt.ts             # Robots.txt Generator
│   │
│   ├── i18n/
│   │   └── translations.ts           # Mehrsprachige Übersetzungen
│   │
│   ├── lib/
│   │   ├── constants.ts              # Site Configuration
│   │   ├── utils.ts                  # Utility Functions
│   │   ├── seo.ts                    # SEO Helper Functions
│   │   ├── animations.ts             # Animation Utilities
│   │   └── analytics-utils.ts
│   │
│   └── styles/
│       ├── global.css                # Global Styles
│       ├── colors.css                # Color Definitions
│       └── scroll.css                # Scroll Styles
│
├── public/
│   ├── fonts/
│   │   ├── Fremont-Regular.ttf       # Custom Headline Font
│   │   └── MomoTrustDisplay-Regular.ttf
│   └── *.json                        # Lottie Animations & SEO Schemas
│
├── astro.config.js                   # Astro Configuration
├── tailwind.config.mjs               # Tailwind Configuration
├── tsconfig.json                     # TypeScript Configuration
├── vercel.json                       # Vercel Deployment Config
└── package.json                      # Dependencies
```

---

## Komponenten-Architektur

### Komponenten-Hierarchie (Startseite)

```
index.astro (Root)
├── Layout.astro (Master Template)
│   ├── <head> (SEO, Meta, Scripts)
│   └── <body>
│       ├── HeaderLeadGenies (client:load)
│       ├── HeroLeadGeniesv2 (client:load)
│       ├── TrustSection (client:idle)
│       ├── HowItWorksSectionV5 (client:idle)
│       ├── ROICalculatorSection (client:idle)
│       ├── GuaranteeTempSection (client:idle)
│       ├── FAQSection (client:idle)
│       ├── PricingSection (client:idle)
│       ├── ContactSection (client:idle)
│       ├── FooterSection (client:load)
│       └── CookieBanner (client:load)
```

### Komponenten-Übersicht

#### 1. Layout-Komponenten
- **HeaderLeadGenies** - Responsive Header mit Navigation, Sprachschalter, CTA
  - Scroll-Detection: Header "schrumpft" beim Scrollen
  - Mobile: Hamburger-Menü mit Overlay
  - GSAP-Animationen für Logo-Wechsel

- **FooterSection** - Footer mit Navigation, Social Links, Legal Links
  - Dynamisches Copyright-Jahr
  - Sprachschalter
  - Social Media Icons (LinkedIn, Twitter, YouTube)

#### 2. Hero & Trust
- **HeroLeadGeniesv2** - Hero Section mit Video-Background
  - Grid-Layout (2 Spalten Desktop, gestapelt Mobile)
  - Rotierendes Customer Review System (Instagram Stories Style)
  - Counter-Animation (747 → 847 Calls)
  - Logo-Loop mit Client-Logos
  - 3D-Tilt-Effekt (Mouse-Tracking)

- **TrustSection** - Vertrauens-Sektion mit animierten Statistiken
  - CountUp-Animation für Zahlen
  - Google Reviews Badge (5 Sterne)
  - Trustindex Tooltip
  - ReviewCardsSection Integration

- **ReviewCardsSection** - Infinite Scrolling Review Cards
  - 2 Rows (Desktop): Eine scrollt LTR, eine RTL
  - Mobile: Horizontal Scrolling mit Peek-Effekt
  - Gradient Fade-Out Overlays

#### 3. Content-Sektionen
- **HowItWorksSection** - Video-Section mit Titel
  - IntersectionObserver für lazy loading
  - Language-specific Videos (DE/EN)

- **HowItWorksSectionV5** - 5-Schritt-Prozess mit Animationen
  - Desktop: 5 Cards nebeneinander mit SVG-Linien
  - Mobile: Single Card mit Navigation-Arrows
  - Video-Background
  - SVG Clippath Animationen

- **ProcessSection** - "Wie wir arbeiten" mit Video Modal
  - Video Thumbnail mit Pulsing Play-Button
  - Modal Video Player
  - Body Scroll Lock

#### 4. Interaktive Komponenten
- **ROICalculatorSection** - ROI-Kalkulator mit Chart
  - 3 Input Sliders (Deal Value, Closing Rate, Appointments)
  - Echtzeit-Berechnung
  - Chart.js Line-Graph (12-Monats-Projection)
  - Conditional CTA bei ROI > €5000
  - FOMO Message

- **GuaranteeTempSection** - Garantien mit Carousel
  - 4 Garantie-Items
  - InfiniteMenu 3D WebGL Integration
  - Responsive Overlays

- **InfiniteMenu** - Advanced 3D WebGL Carousel
  - WebGL 2.0 mit Custom Shaders
  - Icosahedron Geometry Pattern
  - Arcball Control (Mouse/Touch)
  - Instance-based Rendering
  - React Icon to SVG Data URL Conversion

#### 5. Conversion-Komponenten
- **PricingSection** - 3 Pricing-Tiers
  - Test-Monat: €3.999
  - Growth-Paket: €3.499/Monat (3 Monate)
  - Scale-Paket: €2.999/Monat (6 Monate)
  - Mittleres Paket highlighted
  - Sequential Fade-In Animationen

- **ContactSection** - Kontaktformular
  - Formspree Integration
  - Validierung (Name, Unternehmen, Email)
  - Kontaktoptionen: WhatsApp, Email, LinkedIn
  - Success/Error Messages

- **FAQSection** - Accordion FAQ mit Kategorien
  - Tabbed Interface (3 Kategorien)
  - Smooth Accordion Transitions
  - Icon-Rotation bei Expansion

#### 6. Utility-Komponenten
- **LogoLoop** - Infinite Scrolling Logo Carousel
  - Reusable Component
  - Smooth Easing
  - Gradient Fade-Out
  - ResizeObserver

- **CountUp** - Animierter Zähler
  - Motion/Framer Motion
  - useInView Hook
  - Configurable Duration

- **CookieBanner** - Cookie Consent
  - LocalStorage Persistenz
  - GTM Integration
  - Dual Language (DE/EN)
  - Accept/Decline Buttons

### Hydration-Strategie

**client:load** (Sofortiges Laden):
- HeaderLeadGenies
- HeroLeadGeniesv2
- FooterSection
- CookieBanner

**client:idle** (Im Hintergrund laden):
- Alle Content-Sektionen (Trust, HowItWorks, ROI, FAQ, Pricing, Contact)

---

## Internationalisierung

### Sprachen
- **Deutsch (de)** - Standard/Default
- **English (en)** - Sekundär

### Struktur (translations.ts)

```typescript
export type Language = 'de' | 'en';

export const translations = {
  de: {
    header: { /* Navigation, CTA */ },
    hero: { /* Title, Subtitle, Reviews */ },
    trust: { /* Stats, Badge */ },
    howItWorks: { /* Title, Subtitle */ },
    roiCalculator: { /* Labels, Messages */ },
    guarantee: { /* Guarantee Items */ },
    faq: { /* FAQ Kategorien */ },
    pricing: { /* 3 Pakete */ },
    reviewCards: { /* 10 Kundenbewertungen */ },
    contact: { /* Form Labels */ },
    footer: { /* Copyright, Legal Links */ },
    language: { /* Sprachschalter */ }
  },
  en: { /* Same structure */ }
};

export function getTranslations(lang: Language) {
  return translations[lang];
}
```

### Verwendung in Komponenten

```typescript
import { getTranslations, type Language } from '@/i18n/translations';

interface Props {
  lang: Language;
}

const Component = ({ lang }: Props) => {
  const t = getTranslations(lang);
  return <h1>{t.hero.title}</h1>;
};
```

### Browser-basierte Spracherkennung

In Layout.astro:
```typescript
const browserLang = navigator.language;
const isEnglish = browserLang.startsWith('en');

if (isEnglish && isOnGermanPage) {
  window.location.href = '/en';
}
```

### Neue Übersetzungen hinzufügen

1. Öffne `src/i18n/translations.ts`
2. Füge neuen Key in beiden Sprachen hinzu:
```typescript
de: {
  newSection: {
    title: 'Deutscher Titel',
    subtitle: 'Deutsche Beschreibung'
  }
},
en: {
  newSection: {
    title: 'English Title',
    subtitle: 'English Description'
  }
}
```
3. Nutze in Komponente: `t.newSection.title`

---

## Seiten & Routing

### File-based Routing (Astro)

```
Route                          File                          Sprache
/                             index.astro                    Deutsch
/en                           en/index.astro                 English
/impressum                    impressum.astro                Deutsch
/datenschutz                  datenschutz.astro              Deutsch
/agb                          agb.astro                      Deutsch
/en/imprint                   en/imprint.astro               English
/en/terms                     en/terms.astro                 English
/termin-gebucht-8x7kd         termin-gebucht-8x7kd.astro    Deutsch
```

### Neue Seite erstellen

1. Erstelle `.astro` Datei in `src/pages/`
2. Für englische Seite: Erstelle in `src/pages/en/`
3. Verwende Layout:

```astro
---
import Layout from '@/layouts/Layout.astro';

const lang = 'de'; // oder 'en'
---

<Layout
  title="Seitentitel"
  description="Meta Description"
  lang={lang}
>
  <div>Content hier</div>
</Layout>
```

### SEO-Konfiguration pro Seite

```astro
<Layout
  title="Seitentitel"
  description="Meta Description"
  type="WebPage"
  lang="de"
  robots="index, follow"
  faqItems={[
    { question: 'Frage?', answer: 'Antwort' }
  ]}
  breadcrumbs={[
    { name: 'Home', url: '/' },
    { name: 'Seite', url: '/seite' }
  ]}
/>
```

---

## Styling & Design

### Tailwind Configuration

**Custom Colors (Lavender Dreams Palette):**
```javascript
colors: {
  primary: '#B19CD9',    // Soft Lavender
  secondary: '#F7E98E',  // Pale Gold
  accent: '#6B5B95',     // Deep Plum
  charcoal: '#333333',
  ivory: '#FFFFF0',
  cream: '#FFF9F5'
}
```

**Custom Fonts:**
```javascript
fontFamily: {
  heading: ['Fremont', 'serif'],
  body: ['Raleway', 'sans-serif'],
  playfair: ['Playfair Display', 'serif'],
  poppins: ['Poppins', 'sans-serif']
}
```

**Custom Animations:**
```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in',
  'fade-up': 'fadeUp 0.8s ease-out',
  'slide-in': 'slideIn 0.5s ease-out',
  'breathe': 'breathe 3s ease-in-out infinite',
  'float': 'float 6s ease-in-out infinite',
  'pulse-soft': 'pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'shine': 'shine 2s linear infinite',
  'shimmer': 'shimmer 2s linear infinite'
}
```

### Global Styles

**Custom Properties (global.css):**
```css
:root {
  --color-primary: #c10000;
  --color-bg: #ffffff;
  --font-heading: 'Fremont', serif;
  --font-body: 'Raleway', sans-serif;
}
```

### Font-Loading

Custom Fonts werden in Layout.astro geladen:
```html
<link rel="preload" href="/fonts/Fremont-Regular.ttf" as="font" type="font/ttf" crossorigin>
```

---

## SEO & Analytics

### Schema.org Structured Data

**LocalBusiness Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LeadGenies GmbH",
  "description": "...",
  "url": "https://leadgenies.de",
  "telephone": "+49-176-45865439",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "DE"
  }
}
```

**FAQ Schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Frage",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Antwort"
      }
    }
  ]
}
```

### hreflang Tags

```html
<link rel="alternate" hreflang="de" href="https://leadgenies.de/" />
<link rel="alternate" hreflang="en" href="https://leadgenies.de/en" />
<link rel="alternate" hreflang="x-default" href="https://leadgenies.de/" />
```

### Google Tag Manager

**GTM Container:** GTM-5X4XL28N

**Consent Mode:**
```javascript
gtag('consent', 'default', {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
```

Cookie-Banner aktualisiert Consent bei Accept/Decline.

### Analytics

- **Vercel Analytics** - Automatisch integriert
- **Google Analytics** - Via GTM
- **Custom Events** - Via dataLayer

---

## Entwicklung

### Installation

```bash
npm install
```

### Entwicklungsserver starten

```bash
npm run dev
```

Öffne [http://localhost:4321](http://localhost:4321)

### Build erstellen

```bash
npm run build
```

Output: `dist/` Ordner

### Preview (Production Build lokal)

```bash
npm run preview
```

### Wichtige Scripts

```json
{
  "dev": "astro dev",
  "build": "astro check && astro build",
  "preview": "astro preview",
  "astro": "astro"
}
```

### TypeScript Check

```bash
npm run build
```

TypeScript-Fehler werden während des Builds angezeigt.

---

## Deployment

### Vercel Configuration (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "trailingSlash": false,
  "rewrites": [
    {
      "source": "/653e6d66e8b1d7.76884251.txt",
      "destination": "https://indexnow.org/indexnow"
    }
  ]
}
```

### Deployment-Prozess

1. Push zu GitHub Repository
2. Vercel erkennt automatisch Push
3. Automatischer Build & Deploy
4. Live auf Production URL

### Environment Variables

Falls benötigt, in Vercel Dashboard unter "Environment Variables" hinzufügen.

### Static Site Generation

Astro generiert vollständig statische HTML-Dateien:
- Keine Server-Runtime notwendig
- CDN-optimiert
- Extrem schnelle Ladezeiten

---

## Wichtige Features

### 1. ROI-Calculator

**Location:** `src/components/leadgenies/ROICalculatorSection.tsx`

**Features:**
- 3 Input-Slider: Deal Value (€500-€50.000), Closing Rate (5-50%), Appointments (5-30)
- Echtzeit-Berechnung:
  - Expected Monthly Revenue
  - Service Cost (€3.999)
  - Net Monthly Gain
- Chart.js Line-Graph mit 12-Monats-Projektion
- FOMO Message bei positivem ROI
- Conditional CTA bei ROI > €5.000

**Technologie:** React, Chart.js, GSAP

---

### 2. InfiniteMenu (3D WebGL Carousel)

**Location:** `src/components/leadgenies/InfiniteMenu.tsx`

**Features:**
- WebGL 2.0 Rendering mit Custom Vertex/Fragment Shaders
- Icosahedron Geometry Distribution Pattern
- Circle/Disc Items mit dynamischer Textur-Atlas
- Arcball Control für Mouse/Touch Interaction
- Instance-based Rendering (Performance)
- React Icon to SVG Data URL Conversion
- Smooth Snap-to-nearest-Item
- Step Indicator

**Technologie:** WebGL 2.0, gl-matrix, Custom Shaders

---

### 3. Review Rotation System

**Location:** `src/components/leadgenies/HeroLeadGeniesv2.tsx`

**Features:**
- Instagram Stories Style Progress Bars
- Auto-Rotation alle 5 Sekunden
- Manual Navigation via Progress Bar Click
- Smooth GSAP Transitions
- Logo, Text, Attribution, Person Image
- Separate Mobile/Desktop Reviews

**Technologie:** React, GSAP

---

### 4. Smooth Scroll mit Lenis

**Location:** `src/components/LenisScroll.tsx`

**Features:**
- Smooth Scrolling für gesamte Website
- Custom Easing
- Performance-optimiert
- Integration mit GSAP ScrollTrigger

**Technologie:** Lenis 1.3.11

---

### 5. Contact Form Integration

**Location:** `src/components/leadgenies/ContactSection.tsx`

**Features:**
- Formspree Integration (serverless)
- Client-side Validation
- Success/Error States
- Felder: Name, Unternehmen, Email, Telefon, Challenge
- Direct Contact Options: WhatsApp, Email, LinkedIn

**Technologie:** @formspree/react

---

## Wartung & Erweiterung

### Neue Komponente hinzufügen

1. Erstelle `.tsx` Datei in `src/components/leadgenies/`
2. Importiere in Page:
```astro
---
import NewComponent from '@/components/leadgenies/NewComponent';
---

<NewComponent lang={lang} client:idle />
```

3. Wähle Hydration-Strategie:
   - `client:load` - Sofort laden (Above-the-fold)
   - `client:idle` - Im Hintergrund laden (Below-the-fold)
   - `client:visible` - Beim Scroll in View
   - `client:media="(max-width: 768px)"` - Conditional

### Neue Übersetzung hinzufügen

1. Öffne `src/i18n/translations.ts`
2. Füge in `de` und `en` hinzu
3. Nutze in Komponente via `getTranslations(lang)`

### Neue Animation hinzufügen

1. Definiere in `tailwind.config.mjs`:
```javascript
animation: {
  'my-animation': 'myKeyframes 1s ease-in-out'
},
keyframes: {
  myKeyframes: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' }
  }
}
```

2. Nutze in Component:
```html
<div class="animate-my-animation">Content</div>
```

### Farben anpassen

Ändere in `tailwind.config.mjs`:
```javascript
colors: {
  primary: '#neuefarbe'
}
```

Nutze via `text-primary`, `bg-primary`, etc.

---

## Kontakt & Support

**Website:** [leadgenies.de](https://leadgenies.de)
**Email:** info@leadgenies.de
**WhatsApp:** +49 176 45865439

---

## Lizenz

Proprietary - LeadGenies GmbH
