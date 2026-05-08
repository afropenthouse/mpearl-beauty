const Booking = () => {
  return (
    <section className="booking" id="booking">
      <div className="container">
        <div className="booking-inner">
          <div className="booking-info fade-in">
            <p className="section-label">✦ Get In Touch</p>
            <h2 className="section-title">Book Your <em>Glow</em><br/>Session</h2>
            <p>
              Ready to begin your beauty journey? Book a consultation and let our experts design a 
              treatment plan tailored just for you. We can't wait to welcome you.
            </p>
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.79 19.79 0 01.07 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <span>+234 706 099 1444</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span>mpearlhealthnbeauty@gmail.com</span>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span>78, Bode Thomas Street, Surulere, Lagos, Nigeria<br/>First Floor, opposite Chicken Republic, same building with Konga</span>
              </div>
            </div>
            <div className="contact-actions" style={{marginTop: '2rem'}}>
              <a href="tel:+2347060991444" className="btn-primary" style={{marginRight: '1rem'}}>
                Call Now
              </a>
              <a href="mailto:mpearlhealthnbeauty@gmail.com" className="btn-ghost">
                Email Us
              </a>
            </div>
          </div>
          <div className="booking-visual fade-in">
            <div style={{
              background: 'linear-gradient(135deg, #c8e6c0 0%, #a8d4a0 40%, #7ab870 100%)',
              borderRadius: '8px',
              padding: '3rem',
              textAlign: 'center',
              color: 'var(--deep)',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <h3 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '2.5rem',
                fontWeight: '300',
                marginBottom: '1rem',
                color: 'var(--deep)'
              }}>
                WhatsApp <em>Us</em>
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: 'var(--muted)',
                maxWidth: '500px',
                margin: '0 auto 2.5rem',
                textAlign: 'center'
              }}>
                Get instant responses to your beauty queries, book appointments, and receive personalized treatment recommendations all through WhatsApp!
              </p>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem'
              }}>
                <a 
                  href="https://wa.me/2347060991444" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    background: '#25D366',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontFamily: 'Jost, sans-serif',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 20px rgba(37,211,102,0.3)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.background = '#128C7E'
                    e.target.style.transform = 'translateY(-2px)'
                    e.target.style.boxShadow = '0 6px 25px rgba(37,211,102,0.4)'
                  }}
                  onMouseOut={(e) => {
                    e.target.style.background = '#25D366'
                    e.target.style.transform = 'translateY(0)'
                    e.target.style.boxShadow = '0 4px 20px rgba(37,211,102,0.3)'
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Booking
