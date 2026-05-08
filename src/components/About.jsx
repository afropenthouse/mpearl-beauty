const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const perks = [
    "Certified Professionals",
    "Premium Products", 
    "Personalized Plans",
    "Relaxing Environment",
    "Proven Results",
    "Aftercare Support"
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual fade-in">
            <div className="about-img-main">
              <img src="/3s.jpg" alt="M'pearl Beauty Medspa" style={{width:'100%', height:'100%', objectFit:'cover'}} />
              <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', background:'rgba(26,51,32,0.3)'}}>
                <div style={{textAlign:'center', color:'rgba(255,255,255,0.8)'}}>
                  <p style={{fontFamily:'"Cormorant Garamond", serif', fontSize:'3rem', fontStyle:'italic', lineHeight:1, textShadow:'0 2px 4px rgba(0,0,0,0.3)'}}>M</p>
                  <p style={{fontSize:'0.65rem', letterSpacing:'0.3em', textTransform:'uppercase', textShadow:'0 1px 2px rgba(0,0,0,0.3)'}}>Pearl</p>
                </div>
              </div>
            </div>
            <div className="about-accent"></div>
            <div className="about-badge">
              <div className="about-badge-num">5★</div>
              <div className="about-badge-text">Rated</div>
            </div>
          </div>
          <div className="about-content fade-in">
            <p className="section-label">✦ Our Story</p>
            <h2 className="section-title" style={{marginBottom:'2rem'}}>Beauty That's <em>Personal</em></h2>
            <p>
              At MPearl Beauty Medspa, we believe every person deserves to feel confident in their own skin. 
              Our team of certified beauty professionals combine the art of aesthetics with the science of skincare 
              to deliver transformative results.
            </p>
            <p>
              From your very first consultation, we take the time to understand your unique skin concerns, 
              lifestyle, and goals — crafting a personalized treatment plan that truly works for you.
            </p>
            <div className="about-perks">
              {perks.map((perk, index) => (
                <div key={index} className="perk">
                  <div className="perk-dot"></div>
                  {perk}
                </div>
              ))}
            </div>
            <a href="#booking" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection('booking') }}>
              Meet the Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
