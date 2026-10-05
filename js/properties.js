/**
 * MEZUE ASSOCIATES — PROPERTIES MODULE
 * Handles filterable preview properties & quick-view modals
 * Brand Identity: Light Green (#22C55E), Pure White & Soft Mint (#F0FDF4)
 */

// Embedded baseline preview properties dataset (guarantees offline/direct file:// protocol compatibility)
const PREVIEW_PROPERTIES = [
  {
    id: "prop-001",
    title: "Land Plots",
    purpose: "For Sale",
    type: "Land",
    location: "Independence Layout, Enugu",
    price: "₦ 1.5m",
    size: "Approx. 600 sq m",
    description: "Well-positioned land plots available for sale in Independence Layout. Suitable for residential or commercial development with clear land title and easy road access.",
    features: [
      "Clear Survey Plan",
      "Deed of Assignment available",
      "Good road access",
      "Quiet residential/commercial neighbourhood",
      "Immediate possession upon completion"
    ],
    image: "assets/images/land/land-01.jpg",
    status: "Demonstration Preview"
  },
  {
    id: "prop-002",
    title: "Land Plots",
    purpose: "For Sale",
    type: "Land",
    location: "Maitama District, Abuja",
    price: "₦ 5m",
    size: "Approx. 900 sq m",
    description: "Strategically located land plots in the heart of Abuja's Maitama District. An excellent opportunity for residential or commercial development in a prime location.",
    features: [
      "Certificate of Occupancy (C of O)",
      "Perimeter beacons and survey plan",
      "Prime arterial road frontage",
      "FCT statutory title clearance",
      "Immediate possession upon completion"
    ],
    image: "assets/images/land/land-02.jpg",
    status: "Demonstration Preview"
  },
  {
    id: "prop-003",
    title: "Land Plots",
    purpose: "For Sale",
    type: "Land",
    location: "New Market Road Corridor, Onitsha",
    price: "₦ 12m",
    size: "Approx. 1,200 sq m",
    description: "Premium land plots along the high-traffic New Market Road Corridor in Onitsha. Ideal for commercial development, warehousing, or mixed-use projects.",
    features: [
      "Verified commercial title",
      "High-visibility main road frontage",
      "Suitable for commercial or mixed-use development",
      "Easy access for heavy vehicles",
      "Survey and title documents available"
    ],
    image: "assets/images/land/land-03.jpg",
    status: "Demonstration Preview"
  },
  {
    id: "prop-004",
    title: "Development Land",
    purpose: "For Sale",
    type: "Land",
    location: "Trans-Amadi Industrial Zone, Port Harcourt",
    price: "₦ 7.5m",
    size: "4.5 Hectares (Fenced)",
    description: "Firm, level development land in the Trans-Amadi Industrial Zone. Ideal for manufacturing, logistics, or industrial facility development with direct road access.",
    features: [
      "4.5 hectares firm dry topography",
      "Fully perimeter fenced with gated security access",
      "Direct heavy truck access to dual carriage expressway",
      "High-voltage industrial grid connection adjacency",
      "Registered Deed of Assignment & Governor's Consent"
    ],
    image: "assets/images/land/land-04.jpg",
    status: "Demonstration Preview"
  },
  {
    id: "prop-005",
    title: "Development Land",
    purpose: "For Sale",
    type: "Land",
    location: "Old GRA, Enugu",
    price: "₦ 28m",
    size: "Approx. 2,000 sq m",
    description: "Prime development land in the exclusive Old GRA, Enugu. An outstanding opportunity for a premium residential or boutique commercial development in a quiet, secure enclave.",
    features: [
      "Governor's Consent title",
      "Quiet and secure neighbourhood",
      "Suitable for upscale residential development",
      "Close to major facilities and arterial roads",
      "Survey plan and title documents available"
    ],
    image: "assets/images/land/land-05.jpg",
    status: "Demonstration Preview"
  },
  {
    id: "prop-006",
    title: "Development Land",
    purpose: "For Sale",
    type: "Land",
    location: "Lekki Phase 1 Corridor, Lagos",
    price: "₦ 45m",
    size: "2,150 sq m",
    description: "Exceptional development land parcel with prime road frontage along the Lekki Phase 1 Corridor. Ideal for luxury apartments, mixed-use commercial, or a corporate headquarters project.",
    features: [
      "2,150 sq m cleared and sandfilled parcel",
      "Direct dual-carriage access with high commercial visibility",
      "Federal / Lagos State Certificate of Occupancy",
      "Topographical survey and soil investigation preliminary data ready",
      "Immediate possession upon completion"
    ],
    image: "assets/images/land/land-01.jpg",
    status: "Demonstration Preview"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('propertiesGrid');
  if (!gridContainer) return;

  let currentFilter = 'all';

  // Render cards
  const renderProperties = (filter) => {
    gridContainer.innerHTML = '';

    const filtered = PREVIEW_PROPERTIES.filter(p => {
      if (filter === 'all') return true;
      if (filter === 'sale') return p.purpose === 'For Sale';
      if (filter === 'rent') return p.purpose === 'For Rent';
      if (filter === 'residential') return p.type === 'Residential';
      if (filter === 'commercial') return p.type === 'Commercial';
      if (filter === 'land') return p.type === 'Land';
      return true;
    });

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--color-bg-mint); border: 1px dashed var(--color-border-mint); border-radius: var(--radius-md);">
          <p style="font-weight: 700; color: var(--color-text-main); margin-bottom: 0.5rem;">No properties match the selected filter preview.</p>
          <p style="font-size: 0.88rem; color: var(--color-text-muted);">Select another filter category or clear filters.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(prop => {
      const card = document.createElement('article');
      card.className = 'property-card';
      card.innerHTML = `
        <div class="property-card__media">
          <img src="${prop.image}" alt="${prop.title}" class="property-card__img" loading="lazy">
          <span class="property-card__purpose">${prop.purpose}</span>
          <span class="property-card__type">${prop.type}</span>
        </div>
        <div class="property-card__body">
          <div class="property-card__location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${prop.location}</span>
          </div>
          <h3 class="property-card__title">${prop.title}</h3>
          <div class="property-card__price">${prop.price}</div>
          <p class="property-card__desc">${prop.description}</p>
          <div class="property-card__footer">
            <span style="font-size: 0.82rem; color: var(--color-text-muted); font-weight: 500;">${prop.size}</span>
            <button class="btn btn--outline-green btn--sm js-view-property" data-id="${prop.id}">
              View Details
            </button>
          </div>
        </div>
      `;
      gridContainer.appendChild(card);
    });

    // Attach listeners for detail view
    attachModalTriggers();
  };

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.property-filters .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      btn.classList.add('filter-btn--active');
      currentFilter = btn.getAttribute('data-filter') || 'all';
      renderProperties(currentFilter);
    });
  });

  // Initial render
  renderProperties(currentFilter);

  // Property Detail Modal Setup
  function attachModalTriggers() {
    document.querySelectorAll('.js-view-property').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const propId = btn.getAttribute('data-id');
        const property = PREVIEW_PROPERTIES.find(p => p.id === propId);
        if (property) {
          openPropertyModal(property);
        }
      });
    });
  }

  function openPropertyModal(property) {
    let propModal = document.getElementById('propertyDetailModal');
    if (!propModal) {
      propModal = document.createElement('div');
      propModal.id = 'propertyDetailModal';
      propModal.className = 'modal-backdrop';
      document.body.appendChild(propModal);
    }

    const featuresHtml = property.features.map(f => `
      <li style="display:flex; align-items:flex-start; gap:8px; margin-bottom:8px; font-size:0.9rem; color:var(--color-text-main);">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" stroke-width="2.5" style="flex-shrink:0; margin-top:3px;">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${f}</span>
      </li>
    `).join('');

    propModal.innerHTML = `
      <div class="modal-dialog" style="max-width: 720px;">
        <div class="modal-header">
          <div>
            <span style="font-size:0.75rem; color:var(--color-primary-dark); text-transform:uppercase; letter-spacing:0.1em; font-weight:700;">${property.status}</span>
            <h3 style="margin-top:2px; color:var(--color-text-main);">${property.title}</h3>
          </div>
          <button class="modal-close js-close-prop-modal" aria-label="Close dialog">&times;</button>
        </div>
        <div class="modal-body">
          <div style="margin-bottom: 1.5rem; border-radius: var(--radius-sm); overflow: hidden; max-height: 280px; background: var(--color-bg-mint); border: 1px solid var(--color-border-mint);">
            <img src="${property.image}" alt="${property.title}" style="width: 100%; height: 100%; object-fit: cover;">
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-bottom:1.25rem; padding-bottom:1rem; border-bottom:1px solid var(--color-border-subtle);">
            <div>
              <span style="font-size:0.8rem; color:var(--color-text-muted); display:block;">Location</span>
              <strong style="color:var(--color-text-main);">${property.location}</strong>
            </div>
            <div>
              <span style="font-size:0.8rem; color:var(--color-text-muted); display:block;">Asking Price / Rent</span>
              <span class="font-serif" style="font-size:1.35rem; font-weight:700; color:var(--color-primary-dark);">${property.price}</span>
            </div>
            <div>
              <span style="font-size:0.8rem; color:var(--color-text-muted); display:block;">Specifications</span>
              <strong style="color:var(--color-text-main);">${property.size}</strong>
            </div>
          </div>
          <div style="margin-bottom: 1.5rem;">
            <h4 style="font-size: 1rem; color: var(--color-text-main); margin-bottom: 0.5rem;">Property Description</h4>
            <p style="font-size: 0.92rem; color: var(--color-text-body); line-height: 1.65;">${property.description}</p>
          </div>
          <div style="margin-bottom: 2rem;">
            <h4 style="font-size: 1rem; color: var(--color-text-main); margin-bottom: 0.75rem;">Key Verification &amp; Structural Features</h4>
            <ul>${featuresHtml}</ul>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; background:var(--color-bg-mint); padding:1.25rem 1.5rem; border-radius:var(--radius-sm); border:1px solid var(--color-border-mint);">
            <div style="font-size:0.88rem; color:var(--color-text-main);">
              <strong>Interested in this property preview?</strong><br>
              Connect with our agency &amp; valuation desk for title verification and advisory.
            </div>
            <button class="btn btn--primary btn--sm js-enquire-prop" data-title="${property.title}">
              Enquire About Property
            </button>
          </div>
        </div>
      </div>
    `;

    propModal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    const closePropModal = () => {
      propModal.classList.remove('is-open');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeydown);
    };

    const handleKeydown = (e) => {
      if (e.key === 'Escape' && propModal.classList.contains('is-open')) {
        closePropModal();
      }
    };
    document.addEventListener('keydown', handleKeydown);

    // Close buttons
    propModal.querySelector('.js-close-prop-modal').addEventListener('click', closePropModal);

    propModal.addEventListener('click', (e) => {
      if (e.target === propModal) {
        closePropModal();
      }
    });

    // Enquire button hooks into consultation modal
    propModal.querySelector('.js-enquire-prop').addEventListener('click', () => {
      closePropModal();
      if (window.openConsultationModal) {
        window.openConsultationModal('Estate Agency');
        const modalMessage = document.querySelector('#consultationModal [name="message"]');
        if (modalMessage) {
          modalMessage.value = `Enquiry regarding property preview: "${property.title}" (${property.location} - ${property.price}). Please provide title verification and current listing status.`;
        }
      }
    });
  }
});
