const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-tag">✦ Luxury Beauty &amp; Wellness</p>
        <h1 className="hero-title">
          Where Beauty<br/>
          Meets <em>Science</em>
        </h1>
        <p className="hero-desc">
          M'pearl Health & Beauty is your sanctuary for advanced aesthetic treatments, 
          delivered with clinical precision and a personal touch. 
          Reveal your most radiant self.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('booking') }}>
            Book a Consultation
          </a>
          <a href="#services" className="btn-ghost" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>
            Explore Services →
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-wrap">
          {/* Floral botanical SVG decoration */}
          <svg className="floral-bg" viewBox="0 0 500 700" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g stroke="#1a3320" strokeWidth="1.5">
              {/* Large flower top right */}
              <circle cx="420" cy="80" r="40"/>
              <circle cx="420" cy="80" r="20"/>
              <ellipse cx="420" cy="30" rx="14" ry="22" transform="rotate(0 420 80)"/>
              <ellipse cx="420" cy="30" rx="14" ry="22" transform="rotate(45 420 80)"/>
              <ellipse cx="420" cy="30" rx="14" ry="22" transform="rotate(90 420 80)"/>
              <ellipse cx="420" cy="30" rx="14" ry="22" transform="rotate(135 420 80)"/>
              {/* Stem */}
              <path d="M420 120 C420 200, 400 260, 380 340"/>
              <path d="M400 200 C380 180, 350 185, 340 200"/>
              <path d="M390 260 C410 240, 440 245, 445 265"/>
              {/* Small flower mid left */}
              <circle cx="80" cy="300" r="25"/>
              <circle cx="80" cy="300" r="12"/>
              <ellipse cx="80" cy="268" rx="9" ry="15" transform="rotate(0 80 300)"/>
              <ellipse cx="80" cy="268" rx="9" ry="15" transform="rotate(60 80 300)"/>
              <ellipse cx="80" cy="268" rx="9" ry="15" transform="rotate(120 80 300)"/>
              {/* Leaf sprigs */}
              <path d="M80 325 C80 400, 100 450, 110 500"/>
              <path d="M93 380 C113 360, 140 368, 143 388"/>
              {/* Bottom flower */}
              <circle cx="300" cy="600" r="30"/>
              <circle cx="300" cy="600" r="14"/>
              <ellipse cx="300" cy="562" rx="10" ry="18" transform="rotate(0 300 600)"/>
              <ellipse cx="300" cy="562" rx="10" ry="18" transform="rotate(72 300 600)"/>
              <ellipse cx="300" cy="562" rx="10" ry="18" transform="rotate(144 300 600)"/>
              <ellipse cx="300" cy="562" rx="10" ry="18" transform="rotate(216 300 600)"/>
              <ellipse cx="300" cy="562" rx="10" ry="18" transform="rotate(288 300 600)"/>
              {/* Scattered dots (pollen) */}
              <circle cx="200" cy="150" r="3" fill="#1a3320"/>
              <circle cx="350" cy="400" r="2" fill="#1a3320"/>
              <circle cx="150" cy="500" r="3" fill="#1a3320"/>
              <circle cx="450" cy="350" r="2" fill="#1a3320"/>
            </g>
          </svg>
          <div className="hero-ornament">
            <div className="hero-ornament-inner">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1">
                <circle cx="20" cy="20" r="18"/>
                <path d="M20 8 C20 8, 28 14, 28 20 C28 26, 20 32, 20 32 C20 32, 12 26, 12 20 C12 14, 20 8, 20 8Z"/>
              </svg>
              <p style={{fontFamily:'"Cormorant Garamond", serif', fontStyle:'italic', color:'rgba(255,255,255,0.8)', fontSize:'1rem', textAlign:'center'}}>
                M'pearl<br/>Health & Beauty
              </p>
            </div>
          </div>
          <div className="hero-stat hero-stat-1">
            <div className="stat-num">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="hero-stat hero-stat-2">
            <div className="stat-num">10+</div>
            <div className="stat-label">Expert Treatments</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
