const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    "Facial Treatments",
    "Microneedling",
    "Chemical Peels", 
    "Body Contouring",
    "Laser Treatments"
  ]

  const navigate = [
    "Home",
    "About", 
    "Reviews",
    "Book Now"
  ]

  const hours = [
    "Mon–Fri: 9am – 6pm",
    "Saturday: 10am – 5pm",
    "Sunday: Closed"
  ]

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
              M'<span style={{color:'var(--gold)', fontStyle:'italic'}}>Pearl</span> Health & Beauty
            </a>
            <p>
              Your sanctuary for advanced beauty treatments. Where luxury meets science for real, lasting results.
            </p>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {navigate.map((item, index) => {
                const sectionId = item.toLowerCase().replace(' ', '').replace('reviews', 'testimonials').replace('book now', 'booking')
                return (
                  <li key={index}>
                    <a href={`#${sectionId}`} onClick={(e) => { e.preventDefault(); scrollToSection(sectionId) }}>
                      {item}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              {hours.map((hour, index) => (
                <li key={index}>
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    {hour}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MPearl Beauty Medspa. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/mpearlbeautymedspa/" target="_blank" rel="noopener noreferrer" className="social-link">
              IG
            </a>
            <a href="https://wa.me/2347060991444" target="_blank" rel="noopener noreferrer" className="social-link">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>
              FB
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
