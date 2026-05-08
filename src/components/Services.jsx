const Services = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    {
      id: 1,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <circle cx="14" cy="14" r="12"/>
          <path d="M14 6 C18 9, 20 12, 14 14 C8 16, 10 19, 14 22"/>
        </svg>
      ),
      name: "Facial Treatments",
      description: "Customized facials targeting your unique skin concerns — hydration, brightening, anti-aging, and more."
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M4 14 C4 8, 8 4, 14 4 C20 4, 24 8, 24 14"/>
          <path d="M4 14 C4 20, 8 24, 14 24 C20 24, 24 20, 24 14"/>
          <circle cx="14" cy="14" r="3"/>
        </svg>
      ),
      name: "Microneedling",
      description: "Stimulate natural collagen production to reduce fine lines, scars, and uneven texture for smoother skin."
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M6 22 L14 6 L22 22"/>
          <path d="M9 16 L19 16"/>
        </svg>
      ),
      name: "Chemical Peels",
      description: "Reveal fresh, luminous skin with our medical-grade peels that exfoliate and resurface at a deeper level."
    },
    {
      id: 4,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <rect x="6" y="8" width="16" height="12" rx="2"/>
          <path d="M10 8 L10 6 M18 8 L18 6"/>
          <path d="M10 14 L18 14"/>
        </svg>
      ),
      name: "Body Contouring",
      description: "Non-invasive body sculpting treatments that target stubborn fat and tighten skin for a refined silhouette."
    },
    {
      id: 5,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M8 20 C8 14, 14 8, 20 8"/>
          <path d="M8 20 C14 20, 20 14, 20 8"/>
          <circle cx="8" cy="20" r="2"/>
        </svg>
      ),
      name: "Lash & Brow",
      description: "Frame your face beautifully with expert lash extensions, lifts, brow shaping, and tinting services."
    },
    {
      id: 6,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M14 4 L14 24 M4 14 L24 14"/>
          <circle cx="14" cy="14" r="6"/>
        </svg>
      ),
      name: "Laser Treatments",
      description: "Advanced laser technology for hair removal, skin resurfacing, and pigmentation correction with lasting results."
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-head fade-in">
          <div>
            <p className="section-label">✦ What We Offer</p>
            <h2 className="section-title">Our <em>Signature</em><br/>Treatments</h2>
          </div>
          <a href="#booking" className="btn-ghost" onClick={(e) => { e.preventDefault(); scrollToSection('booking') }}>
            View All Services →
          </a>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card fade-in">
              <div className="service-icon">
                {service.icon}
              </div>
              <p className="service-num">{String(service.id).padStart(2, '0')}</p>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#booking" className="service-link" onClick={(e) => { e.preventDefault(); scrollToSection('booking') }}>
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
