const Services = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsAppBooking = (serviceName) => {
    const phoneNumber = "2347060991444"
    const message = `Hi, I'm interested in booking: ${serviceName}. Please provide more information.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
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
      name: "Microneedling & PRP",
      description: "Using Platelet-Rich Plasma to stimulate collagen and reduce fine lines for youthful skin."
    },
    {
      id: 2,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M6 22 L14 6 L22 22"/>
          <path d="M9 16 L19 16"/>
        </svg>
      ),
      name: "Chemical Peels",
      description: "A variety of peels for skin resurfacing and clearing imperfections with lasting results."
    },
    {
      id: 3,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <rect x="6" y="8" width="16" height="12" rx="2"/>
          <path d="M10 8 L10 6 M18 8 L18 6"/>
          <path d="M10 14 L18 14"/>
        </svg>
      ),
      name: "Skinwave Facials",
      description: "Advanced hydration and deep cleansing treatments for radiant, healthy skin."
    },
    {
      id: 4,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M4 14 C4 8, 8 4, 14 4 C20 4, 24 8, 24 14"/>
          <path d="M4 14 C4 20, 8 24, 14 24 C20 24, 24 20, 24 14"/>
          <circle cx="14" cy="14" r="3"/>
        </svg>
      ),
      name: "PDRN Treatments",
      description: "Specialized 'K-Beauty' treatments for skin healing and revitalization."
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
      name: "Teeth Whitening",
      description: "Professional brightening services for a dazzling, confident smile."
    },
    {
      id: 6,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M14 4 L14 24 M4 14 L24 14"/>
          <circle cx="14" cy="14" r="6"/>
        </svg>
      ),
      name: "Botox & Fillers",
      description: "Treatments for wrinkles and fine lines including Letybo and dermal fillers."
    },
    {
      id: 7,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <rect x="6" y="8" width="16" height="12" rx="2"/>
          <path d="M10 8 L10 6 M18 8 L18 6"/>
          <path d="M10 14 L18 14"/>
        </svg>
      ),
      name: "Sculptra",
      description: "For gradual collagen replacement and volume restoration."
    },
    {
      id: 8,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M4 14 C4 8, 8 4, 14 4 C20 4, 24 8, 24 14"/>
          <path d="M4 14 C4 20, 8 24, 14 24 C20 24, 24 20, 24 14"/>
          <circle cx="14" cy="14" r="3"/>
        </svg>
      ),
      name: "IV Infusions",
      description: "Vitamin drips and nutrient therapy for energy and recovery."
    },
    {
      id: 9,
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.2">
          <path d="M14 4 L14 24 M4 14 L24 14"/>
          <circle cx="14" cy="14" r="6"/>
        </svg>
      ),
      name: "Laser Hair Removal",
      description: "Permanent hair reduction for various skin types with advanced technology."
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-head fade-in">
          <div>
            <p className="section-label">✦ What We Offer</p>
            <h2 className="section-title">Our <em>Services</em></h2>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card fade-in">
              <p className="service-num">{String(service.id).padStart(2, '0')}</p>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#" className="service-link" onClick={(e) => { e.preventDefault(); handleWhatsAppBooking(service.name) }}>
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
