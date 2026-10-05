# Mezue Associates &mdash; Official Corporate Website

> **Firm of Estate Surveyors &amp; Valuers &bull; Founded 1981**  
> **Head Office:** 9 Ogui Road, Enugu, Nigeria

A production-quality corporate website developed specifically for **Mezue Associates**, reflecting over four decades of institutional experience in Nigerian estate surveying, statutory valuation, property management, and real estate consultancy.

---

## 1. Project Overview & Architecture

This website is built with clean semantic HTML5, modern CSS with custom design tokens, and modular vanilla JavaScript. It requires **zero build tools, zero npm packages, and zero external runtime dependencies**, ensuring long-term stability and immediate compatibility across all web servers.

```
mezue-associates/
├── index.html                  # Homepage (Hero, 1981 Foundation, 8 Services, Positioning, Properties Preview, Offices)
├── about.html                  # About Us (Who We Are, 1981 Heritage, Service Summary, National Presence, Professional Approach)
├── services.html               # Comprehensive directory of all 8 surveying & valuation disciplines with consultation triggers
├── properties.html             # Filterable property listing preview portal (Sale/Rent, Residential, Commercial, Land)
├── offices.html                # Our Offices (Enugu HQ, dedicated Onitsha branch profile, 6 regional hubs, international desk)
├── leadership.html             # Verified leadership & governance (Chief L. C. Mezue, Mr. Ike Agwubike, Okoye Ujunwa)
├── contact.html                # Contact Us with validated inquiry form and interactive Enugu head office map
├── css/
│   └── main.css                # Design system tokens (Deep Navy, Warm Gold, Whites), typography, responsive layout
├── js/
│   ├── main.js                 # Sticky compact navbar, mobile drawer, modal controller, form validation
│   └── properties.js           # Real-time category filtering and quick-view modal renderer
├── data/
│   ├── properties.json         # Structured preview listings dataset (easily editable for genuine company listings)
│   ├── team.json               # Leadership & staff profiles with schema for future qualifications and biographies
│   ├── offices.json            # Branch network data across Nigeria
│   └── services.json           # Detailed scopes of the 8 professional disciplines
└── assets/
    ├── brand/                  # SVG brand identity: official crest, vector logo with theodolite motif
    └── images/                 # Architectural elevations, blueprint graphics, property previews, and staff avatars
```

---

## 2. Design System & Palette

- **Deep Navy:** `#0a192f` / `#06101e` &mdash; Conveys stability, authority, and corporate gravity.
- **Warm Gold:** `#c5a059` / `#dfba6e` &mdash; Conveys excellence, prestige, and longevity since 1981.
- **Base Whites & Slates:** `#ffffff`, `#f8fafc`, `#f1f5f9`, `#e2e8f0` &mdash; Clean, generous whitespace.
- **Typography:** Editorial serif headings (*Cinzel / Playfair Display*) paired with clean corporate sans-serif (*Plus Jakarta Sans / Inter*).
- **Responsive Layout:** Optimized and tested across Desktop (`1440px`), Laptop (`1024px`), Tablet (`768px`), and Mobile (`430px`, `390px`, `360px`).

---

## 3. Strict Factual Accuracy & Safeguards

In accordance with strict corporate integrity standards:
- **No Fabricated Statistics:** Free of artificial numerical claims (no unsupported "10,000+ valuations" or "99% satisfaction").
- **Verified Leadership Only:** Features Chief L. C. Mezue (Principal Consultant / CEO), Mr. Ike Agwubike (Managing Consultant), and Okoye Ujunwa (Onitsha Branch Manager) with dignified placeholder avatars and editable CMS fields.
- **Verified Head Office:** 9 Ogui Road, Enugu, Nigeria is prominently designated as the corporate headquarters.
- **Property Listing Preview:** Demonstration listings are clearly badged as preview data to prevent false claims of company ownership or listing mandates.

---

## 4. How to Run Locally

You can preview the website using Python's built-in web server:

```powershell
# From the project directory:
cd C:\Users\HomePC\.gemini\antigravity\scratch\mezue-associates
python -m http.server 8080
```

Then open `http://localhost:8080` in your web browser.  
Because it uses standard web technologies, you can also double-click `index.html` to open it directly.

---

## 5. How to Edit Content & Populate Real Data

- **To update Property Listings:** Edit `data/properties.json`. Add real properties, adjust prices, descriptions, and update images in `assets/images/`.
- **To update Leadership:** Edit `data/team.json`. When official photographs and registration qualifications (e.g. FNIVS, RSV, ESVARBON) are available, update the respective fields.
- **To update Branch Addresses:** Edit `data/offices.json` and the corresponding table in `offices.html`.

---

## 6. Deployment

This static portal can be deployed immediately to:
- **Netlify / Vercel:** Drag and drop the `mezue-associates` folder or link to a Git repository.
- **GitHub Pages:** Push to repository and enable GitHub Pages on the `main` branch.
- **Standard Web Host (cPanel / Apache / Nginx):** Upload the contents directly to `public_html`.
