const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 2L2 8v8c0 8.84 6.16 17.12 14 19 7.84-1.88 14-10.16 14-19V8l-14-6z"/>
          <path d="M12 16l3 3 7-7"/>
        </svg>
      ),
      title: "Certified Professionals",
      description: "Our team consists of licensed and certified aestheticians with years of experience in advanced beauty treatments."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="8" width="24" height="16" rx="2"/>
          <path d="M8 8V6a4 4 0 014-4h8a4 4 0 014 4v2"/>
          <circle cx="16" cy="16" r="3"/>
        </svg>
      ),
      title: "Premium Equipment",
      description: "State-of-the-art technology and FDA-approved equipment ensure safe and effective treatments."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2z"/>
          <path d="M16 8v8l4 4"/>
        </svg>
      ),
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your unique skin type and beauty goals."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16 8.268 2 16 2s14 6.268 14 14z"/>
          <path d="M16 22a6 6 0 100-12 6 6 0 000 12z"/>
          <circle cx="16" cy="10" r="2"/>
        </svg>
      ),
      title: "Natural Results",
      description: "Enhance your natural beauty with subtle, long-lasting results that boost confidence."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="6" y="6" width="20" height="20" rx="2"/>
          <path d="M12 2v6M20 2v6M12 24v6M20 24v6M2 12h6M2 20h6M24 12h6M24 20h6"/>
        </svg>
      ),
      title: "Comprehensive Services",
      description: "From facial treatments to body contouring, we offer a complete range of aesthetic services."
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M16 2l4 8h8l-6.5 4.5L26 22l-10-7.5L6 22l4.5-7.5L4 10h8l4-8z"/>
        </svg>
      ),
      title: "5-Star Experience",
      description: "Luxurious environment and exceptional service that makes every visit special."
    }
  ]

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="container">
        <div className="section-header fade-in">
          <p className="section-label">Why Choose M'pearl</p>
          <h2 className="section-title">
            Excellence in <em>Beauty & Wellness</em>
          </h2>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card scale-in" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-section fade-in">
          <div className="cta-content">
            <h3>Ready to Transform Your Beauty Journey?</h3>
            <p>Schedule your personalized consultation today and discover the M'pearl difference.</p>
            <a href="#booking" className="btn-primary">Book Your Consultation</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
