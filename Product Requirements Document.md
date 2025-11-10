Product Requirements Document
Every Morning Cartel - Premium Coffee Shop Website
Version: 1.0
Date: November 10, 2024
Client: Every Morning Cartel
Location: Borivali & Kandivali, Mumbai
Budget Tier: ₹60,000 - ₹1,00,000

1. EXECUTIVE SUMMARY
1.1 Project Overview
Build a premium, award-worthy website for Every Morning Cartel, an experimental coffee bar with two locations in Mumbai. The site must reflect their brand positioning as a specialty coffee destination for young professionals and coffee enthusiasts.
1.2 Brand Positioning

Tagline: "Experimental Coffee Bar | Multi Roasters"
Target Audience: 25-40 year old professionals, coffee enthusiasts, Instagram-savvy millennials
Brand Personality: Urban, experimental, approachable luxury, Instagram-worthy
Current Following: 3,556 Instagram followers (organic growth opportunity)

1.3 Key Business Objectives

Drive foot traffic to both locations (Borivali & Kandivali)
Establish online ordering capability
Grow Instagram following and engagement
Position as Mumbai's premier specialty coffee destination
Enable future expansion to additional locations


2. DESIGN INSPIRATION & REFERENCES
2.1 Awwwards-Winning Elements to Implement
From Blue Bottle Coffee:

Minimalist white space usage
Premium typography hierarchy
Frictionless e-commerce flow

From Verve Coffee:

Muted, sophisticated color palette
West Coast modern aesthetic
Strong storytelling integration

From Culture Espresso:

Natural, lifestyle photography style
Beige/cream backgrounds for warmth
People-centric imagery (baristas, customers)

From Panther Coffee:

Streamlined navigation
Mobile-first approach
Bold CTAs without being aggressive

2.2 Specific UI/UX Patterns to Adopt

Sticky Navigation with Blur Effect

Transparent on page load
Blur backdrop on scroll (glassmorphism)
Example: backdrop-filter: blur(12px)


Full-Screen Hero with Parallax

100vh height
Subtle parallax scroll effect
Overlay gradient for text readability


Grid-Based Menu Layout

Card-based design with hover states
Price displayed prominently
Short, evocative descriptions


Instagram Feed Integration

Live feed from @everymorningcartel
2x4 or 3x3 grid layout
Clickable to Instagram posts


Interactive Location Maps

Embedded Google Maps
Custom pin styling
Directions integration




3. TECHNICAL SPECIFICATIONS
3.1 Tech Stack
Framework: Next.js 16 (App Router)
Language: TypeScript
Styling: Tailwind CSS 4
Animations: Framer Motion
CMS: Sanity CMS (for menu updates)
Deployment: Vercel
Analytics: Vercel Analytics + Google Analytics 4
3.2 Required Integrations

Instagram Basic Display API (for feed)
Google Maps Embed API
WhatsApp Business API (for orders)
Razorpay (payment gateway for online orders)
Google Analytics 4
Meta Pixel (Facebook/Instagram ads)

3.3 Performance Requirements

Lighthouse Score: 90+ (all metrics)
First Contentful Paint: < 1.5s
Time to Interactive: < 3.5s
Cumulative Layout Shift: < 0.1
Mobile PageSpeed: 85+


4. SITE STRUCTURE & PAGES
4.1 Page Hierarchy
Home (/)
├── Story (/story)
├── Menu (/menu)
│   ├── Coffee (/menu#coffee)
│   ├── Matcha (/menu#matcha)
│   ├── Food (/menu#food)
│   └── Merchandise (/menu#merch)
├── Locations (/locations)
│   ├── Borivali (/locations/borivali)
│   └── Kandivali (/locations/kandivali)
├── Gallery (/gallery)
├── Order Online (/order)
└── Contact (/contact)

5. DETAILED PAGE REQUIREMENTS
5.1 HOMEPAGE
Section 1: Hero
LAYOUT:
- Full viewport height (100vh)
- Background: High-quality image of latte art or cafe interior
- Gradient overlay: rgba(0,0,0,0.4) to ensure text readability
- Center-aligned content

CONTENT:
Headline: "Every Morning Ritual"
Subheadline: "Experimental coffee. Multi-roasters. Two locations."
CTAs: [View Menu] [Order Now]

ANIMATIONS:
- Fade in headline (0.6s delay)
- Slide up subheadline (0.8s delay)
- Bounce scroll indicator at bottom

INSPIRATION: Culture Espresso's natural photography + Verve's typography
Section 2: Featured Coffees (Carousel)
LAYOUT:
- Horizontal scrolling cards
- 3 cards visible on desktop, 1 on mobile
- Snap scroll behavior

CARD CONTENT:
- High-res coffee photo
- Coffee name (e.g., "Ethiopian Yirgacheffe")
- Origin + tasting notes
- Price
- [Order Now] button

REAL MENU ITEMS TO INCLUDE:
1. Classic Iced Espresso - ₹120
2. Iced Vanilla Matcha - ₹180
3. Bespoke Pour Over - ₹220
4. Cookie Brownie - ₹150

INSPIRATION: Panther Coffee's product showcase
Section 3: About (Split Layout)
LEFT SIDE:
- Headline: "More Than Coffee"
- Body copy (150-200 words about being experimental, multi-roaster)
- Stats:
  • 2 Locations
  • 50+ Coffee Origins
  • Multi-Roaster Selection
- [Our Story] CTA

RIGHT SIDE:
- Image: Barista preparing coffee OR cafe interior
- Should feel warm, inviting, authentic

INSPIRATION: Blue Bottle's minimalist split sections
Section 4: Instagram Feed
LAYOUT:
- 3x3 grid on desktop, 2x3 on mobile
- Heading: "@everymorningcartel"
- Each image clickable to Instagram post

TECHNICAL:
- Instagram Basic Display API
- Fallback to static images if API fails
- Lazy loading for performance

INSPIRATION: Most award-winning coffee sites include this
Section 5: Location Quick Links
LAYOUT:
- Two large cards side-by-side
- Each card has:
  • Location name
  • Address snippet
  • "Get Directions" button
  • Background image of that location

CARDS:
1. Borivali: Shop 7, Bhattad Tower, S V Road
2. Kandivali: Mahavir Nagar, near RTO Office

INSPIRATION: Zinc Cafe's block sections

5.2 STORY PAGE
Purpose
Establish brand credibility and emotional connection.
Content Sections
Section 1: Hero
Headline: "Every Morning is an Experiment"
Body: 200-300 word founder story
- Why "Cartel"?
- What makes them different (multi-roaster approach)
- Commitment to quality

Image: Founder photo or coffee farm imagery
Section 2: The Multi-Roaster Difference
Explain concept:
- Partner with multiple specialty roasters
- Rotate offerings seasonally
- Source from global origins
- Support small-batch roasting

Layout: Text + grid of roaster logos (if available)
Section 3: Timeline (Optional Enhanced Feature)
Visual timeline:
- 2023: First location (Borivali)
- 2024: Expanded to Kandivali
- Future: More locations coming

INSPIRATION: NOC Coffee's engaging layout
Section 4: Team (If photos available)
Grid of team photos
- Head barista
- Roaster partners
- Short bios (50 words each)

5.3 MENU PAGE
Critical Requirements

NOT a PDF download
Fully web-formatted, searchable
Mobile-optimized
Easily updatable via CMS

Menu Structure
Tab Navigation:
[Coffee] [Matcha] [Food] [Merchandise]
Coffee Tab Layout:
CATEGORIES:
1. Espresso-Based
2. Filter Coffee
3. Cold Brew
4. Specialty

CARD DESIGN:
┌─────────────────────────┐
│ [Image]                 │
│                         │
│ DRINK NAME              │
│ Description (1-2 lines) │
│                         │
│ ₹180        [Order Now] │
└─────────────────────────┘

REAL ITEMS FROM RESEARCH:
- Classic Iced Espresso - ₹120
- Iced Mocha - ₹160
- Bespoke Iced Pour Over - ₹220
- Iced Americano with Cold Foam - ₹140
- Classic Espresso - ₹100
Matcha Tab:
- Iced Vanilla Matcha - ₹180
- Hot Vanilla Matcha Latte - ₹170
- Iced Strawberry Matcha - ₹190
Food Tab:
BAGELS:
- Cream Cheese Scallion Bagel - ₹200
- Cream Cheese Bagel with Avocado - ₹250

DESSERTS:
- Cookie Brownie - ₹150
- Cartel House Brownie - ₹130
Merchandise Tab:
- Cartel T-Shirts
- Coffee Mugs
- Reusable Cups
- Coffee Beans (if sold)
CMS Integration:
Each menu item should be a CMS entry with fields:
- Name (string)
- Description (text)
- Price (number)
- Category (dropdown)
- Image (file upload)
- Available (boolean)
- Featured (boolean)

5.4 LOCATIONS PAGE
Page Layout
Two location cards with detailed information.
Location Card Template:
┌────────────────────────────────────┐
│                                    │
│  [Large Photo of Location]         │
│                                    │
├────────────────────────────────────┤
│                                    │
│  📍 BORIVALI                       │
│  ────────────────                  │
│  Shop 7, Bhattad Tower             │
│  S V Road, Borivali West           │
│  Mumbai - 400092                   │
│                                    │
│  🕒 Hours:                         │
│  Monday - Sunday: 8:00 AM - 11:30 PM│
│                                    │
│  📞 +91 99671 15685                │
│                                    │
│  [Get Directions] [Order Now]      │
│                                    │
│  ────── Embedded Map ──────        │
│  [Google Maps Iframe]              │
│                                    │
└────────────────────────────────────┘
Interactive Features:
- Click "Get Directions" → Opens Google Maps
- Click "Order Now" → Opens WhatsApp chat with location pre-filled
- Map shows both locations with custom pins

5.5 GALLERY PAGE
Layout
Masonry grid layout (like Pinterest).
Grid Specifications:
Desktop: 4 columns
Tablet: 3 columns
Mobile: 2 columns

Image Sources:
1. Instagram posts (@everymorningcartel)
2. Professional photography (if available)
3. Customer submissions

Categories (Filter buttons):
- All
- Coffee
- Food
- Ambiance
- People
Features:
- Lightbox on click (full-screen view)
- Lazy loading
- Infinite scroll (or Load More button)
- Instagram icon on posts from Instagram

5.6 ORDER ONLINE PAGE
Two Implementation Options
OPTION A: WhatsApp Integration (Recommended for MVP)
Simple form:
1. Select Location (dropdown)
2. Browse Menu (embedded menu with checkboxes)
3. Add to cart
4. "Send Order via WhatsApp" button

On submit → Opens WhatsApp with pre-filled message:
"Hi! I'd like to order:
- Iced Mocha x2
- Cookie Brownie x1
Location: Borivali
Pickup time: [user selects]"
OPTION B: Full E-Commerce (Premium)
- Add to cart functionality
- Razorpay integration
- Order tracking
- Account creation
- Order history

This is complex and adds ₹40,000+ to project cost.
Recommend for Phase 2.

5.7 CONTACT PAGE
Layout
LEFT SIDE (40%):
- Contact form:
  • Name
  • Email
  • Phone
  • Subject (dropdown: General, Catering, Partnership)
  • Message
  • [Send Message] button

RIGHT SIDE (60%):
- Business hours
- Both location addresses
- Phone numbers
- Email
- Social media links (Instagram, Facebook)
- "Or reach us on WhatsApp" with clickable number

6. DESIGN SYSTEM
6.1 Color Palette
Primary Palette (Refined from current config):
css--charcoal: #1A1A1A      /* Main backgrounds */
--espresso: #2B1810      /* Dark accents */
--cream: #F5F0EB         /* Light backgrounds */
--copper: #D4A574        /* Primary CTA color */
--sage: #8B9A8B          /* Secondary accent */
Semantic Colors:
css--text-primary: #1A1A1A
--text-secondary: #666666
--text-muted: #999999
--border: #E5E5E5
--success: #4CAF50
--error: #F44336
--warning: #FF9800
Dark Mode Colors:
css--bg-dark: #0F0F0F
--text-dark: #F5F0EB
--accent-dark: #D4A574
6.2 Typography
Font Stack:
css/* Replace Playfair Display - it's overused */
--font-heading: 'Clash Display', 'Inter', sans-serif
--font-body: 'Inter', system-ui, sans-serif
--font-mono: 'JetBrains Mono', monospace /* for prices */
Type Scale:
css--text-xs: 0.75rem      /* 12px */
--text-sm: 0.875rem     /* 14px */
--text-base: 1rem       /* 16px */
--text-lg: 1.125rem     /* 18px */
--text-xl: 1.25rem      /* 20px */
--text-2xl: 1.5rem      /* 24px */
--text-3xl: 1.875rem    /* 30px */
--text-4xl: 2.25rem     /* 36px */
--text-5xl: 3rem        /* 48px */
--text-6xl: 3.75rem     /* 60px */
--text-7xl: 4.5rem      /* 72px - Hero only */
Font Weights:
css--font-light: 300
--font-regular: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-black: 900      /* Headlines only */
6.3 Spacing System
css--space-1: 0.25rem    /* 4px */
--space-2: 0.5rem     /* 8px */
--space-3: 0.75rem    /* 12px */
--space-4: 1rem       /* 16px */
--space-5: 1.25rem    /* 20px */
--space-6: 1.5rem     /* 24px */
--space-8: 2rem       /* 32px */
--space-10: 2.5rem    /* 40px */
--space-12: 3rem      /* 48px */
--space-16: 4rem      /* 64px */
--space-20: 5rem      /* 80px */
--space-24: 6rem      /* 96px */

/* Section spacing */
--section-py: 5rem     /* 80px desktop */
--section-py-mobile: 3rem /* 48px mobile */
6.4 Border Radius
css--radius-sm: 0.25rem   /* 4px */
--radius-md: 0.5rem    /* 8px */
--radius-lg: 0.75rem   /* 12px */
--radius-xl: 1rem      /* 16px */
--radius-2xl: 1.5rem   /* 24px */
--radius-full: 9999px  /* Pills */
6.5 Shadows
css--shadow-sm: 0 1px 2px rgba(0,0,0,0.05)
--shadow-md: 0 4px 6px rgba(0,0,0,0.1)
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
--shadow-xl: 0 20px 25px rgba(0,0,0,0.15)
--shadow-2xl: 0 25px 50px rgba(0,0,0,0.25)

7. COMPONENT LIBRARY
7.1 Navigation
Desktop:
tsx<nav className="fixed top-0 w-full z-50 transition-all">
  <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
    <Logo />
    <Menu items={['Story', 'Menu', 'Locations', 'Gallery', 'Contact']} />
    <Button variant="primary">Order Now</Button>
  </div>
</nav>
Mobile:

Hamburger menu (animated to X)
Full-screen overlay menu
Slide-in from right animation

7.2 Buttons
Variants:
tsx// Primary
<button className="bg-copper text-white px-8 py-3 rounded-lg font-semibold hover:bg-copper-dark transition-all">
  Order Now
</button>

// Secondary
<button className="border-2 border-charcoal text-charcoal px-8 py-3 rounded-lg font-semibold hover:bg-charcoal hover:text-cream transition-all">
  Learn More
</button>

// Ghost
<button className="text-charcoal underline hover:text-copper transition-colors">
  View Menu
</button>
7.3 Cards
Menu Item Card:
tsx<div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer">
  <div className="aspect-square overflow-hidden">
    <img className="group-hover:scale-110 transition-transform duration-500" />
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold mb-2">Iced Mocha</h3>
    <p className="text-gray-600 mb-4">Rich chocolate, bold espresso, cold milk</p>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-mono font-bold">₹160</span>
      <button className="text-copper font-semibold">Add +</button>
    </div>
  </div>
</div>

8. ANIMATION SPECIFICATIONS
8.1 Page Transitions
javascript// Framer Motion variants
const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 }
}
8.2 Scroll Animations
Use Intersection Observer for:

Fade in elements as they enter viewport
Number counters (stats section)
Staggered list animations

Example:
javascriptconst fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
}
8.3 Hover States
All interactive elements need hover states:

Buttons: Scale 1.05 + shadow increase
Cards: Scale 1.02 + shadow increase
Images: Scale 1.1 (with overflow hidden)
Links: Underline slide-in effect


9. SEO REQUIREMENTS
9.1 Metadata (Every Page)
tsxexport const metadata = {
  title: 'Every Morning Cartel | Experimental Coffee Bar Mumbai',
  description: 'Specialty coffee from multiple roasters. Two locations in Borivali & Kandivali, Mumbai. Order online or visit us.',
  keywords: 'coffee shop mumbai, specialty coffee, borivali cafe, kandivali cafe, pour over coffee, matcha latte',
  openGraph: {
    title: 'Every Morning Cartel',
    description: 'Experimental Coffee Bar | Multi Roasters',
    images: ['/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Every Morning Cartel',
    description: 'Experimental Coffee Bar in Mumbai',
    images: ['/og-image.jpg'],
  }
}
9.2 Structured Data (JSON-LD)
json{
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Every Morning Cartel",
  "image": "https://everymorningcartel.com/og-image.jpg",
  "@id": "https://everymorningcartel.com",
  "url": "https://everymorningcartel.com",
  "telephone": "+919967115685",
  "priceRange": "₹₹",
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Shop 7, Bhattad Tower, S V Road",
      "addressLocality": "Borivali West",
      "addressRegion": "Mumbai",
      "postalCode": "400092",
      "addressCountry": "IN"
    }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "23:30"
  },
  "servesCuisine": "Coffee",
  "sameAs": [
    "https://www.instagram.com/everymorningcartel/"
  ]
}
9.3 Sitemap & Robots.txt
xml<!-- sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://everymorningcartel.com/</loc>
    <lastmod>2024-11-10</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://everymorningcartel.com/menu</loc>
    <priority>0.8</priority>
  </url>
  <!-- etc -->
</urlset>

10. CONTENT REQUIREMENTS
10.1 Copywriting Tone

Voice: Confident, experimental, approachable
NOT: Pretentious, overly technical, corporate
Think: Friend who's really passionate about coffee

Example Good Copy:
"Every cup is an experiment. We partner with roasters across the globe to bring you rotating selections of single-origin specialty coffee. This month: Ethiopian Yirgacheffe with notes of bergamot and jasmine."
Example Bad Copy:
"We serve coffee. Come visit us."
10.2 Photography Requirements
Required Shots:

Hero image (cafe exterior or latte art) - 1920x1080px min
Interior ambiance shots (3-5 images)
Each menu item (professional product photography)
Baristas in action (lifestyle shots)
Both location exteriors
Detail shots (coffee beans, brewing equipment)

Specifications:

Resolution: Minimum 1920x1080px
Format: AVIF or WebP (with JPG fallback)
Optimized: Under 200KB per image
Alt text: Required for ALL images

10.3 Instagram Content Strategy
Since site will showcase Instagram:

Post minimum 3x per week
Focus on: Latte art, behind-the-scenes, customer moments
Use location tags
Engage with comments
Use branded hashtag: #EveryMorningExperiment


11. TECHNICAL IMPLEMENTATION GUIDE
11.1 Folder Structure
clients/every-morning-cartel/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── menu/
│   │   ├── locations/
│   │   └── team/
│   ├── favicon.ico
│   └── og-image.jpg
├── src/
│   ├── app/
│   │   ├── (routes)/
│   │   │   ├── story/page.tsx
│   │   │   ├── menu/page.tsx
│   │   │   ├── locations/page.tsx
│   │   │   ├── gallery/page.tsx
│   │   │   ├── order/page.tsx
│   │   │   └── contact/page.tsx
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedCoffees.tsx
│   │   │   ├── About.tsx
│   │   │   ├── InstagramFeed.tsx
│   │   │   └── LocationCards.tsx
│   │   └── MenuItemCard.tsx
│   ├── lib/
│   │   ├── sanity.ts
│   │   ├── instagram.ts
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── sanity/
│   ├── schema/
│   │   ├── menuItem.ts
│   │   └── location.ts
│   └── sanity.config.ts
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
11.2 Environment Variables
bash# .env.local
NEXT_PUBLIC_SITE_URL=https://everymorningcartel.com
NEXT_PUBLIC_INSTAGRAM_TOKEN=your_token_here
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_RAZORPAY_KEY=your_key_here (if using)
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here
11.3 Key Dependencies
json{
  "dependencies": {
    "next": "^16.0.1",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "framer-motion": "^12.23.24",
    "@sanity/client": "^6.0.0",
    "@sanity/image-url": "^1.0.0",
    "next-sanity": "^7.0.0",
    "lucide-react": "^0.index.d.ts",
    "react-intersection-observer": "^9.0.0",
    "embla-carousel-react": "^8.0.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "typescript": "^5",
    "tailwindcss": "^4",
    "autoprefixer": "^10",
    "postcss": "^8"
  }
}

12. DEPLOYMENT CHECKLIST
Pre-Launch

 All pages load without errors
 Mobile responsive on iOS and Android
 Forms submit correctly
 All images optimized and loading
 Instagram feed connected and working
 Google Maps embedded correctly
 WhatsApp links working on mobile
 404 page designed and functional
 Sitemap generated
 Robots.txt configured
 Meta tags on all pages
 OG images generated
 Analytics installed
 Performance tested (Lighthouse)

Post-Launch

 Domain configured
 SSL certificate active
 Google Search Console verified
 Google My Business claimed
 Submit sitemap to Google
 Set up Vercel Analytics
 Configure redirects (if needed)
 Test all forms in production
 Monitor error logs
 Set up uptime monitoring