import { useState, useEffect } from 'react'

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>
        M'<span>Pearl</span> Health & Beauty
      </a>
      <ul className="nav-links">
        <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a></li>
        <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
        <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products') }}>Products</a></li>
        <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); scrollToSection('testimonials') }}>Reviews</a></li>
        <li><a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection('booking') }}>Contact</a></li>
      </ul>
      <div className="nav-actions">
        <a href="https://wa.me/2347060991444" target="_blank" rel="noopener noreferrer" className="nav-cta" onClick={(e) => { e.preventDefault(); window.open('https://wa.me/2347060991444', '_blank') }}>
          Book Now
        </a>
      </div>
    </nav>
  )
}

export default Nav
