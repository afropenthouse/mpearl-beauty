const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: "/1s.jpg",
      alt: "Skincare Treatment Results",
      title: "Radiant Skin"
    },
    {
      id: 2,
      src: "/2s.jpg", 
      alt: "Beauty Treatment",
      title: "Luxury Treatment"
    },
    {
      id: 3,
      src: "/4s.jpg",
      alt: "M'pearl Beauty Team",
      title: "Professional Care"
    }
  ]

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div style={{textAlign:'center'}} className="fade-in">
          <p className="section-label">✦ Our Team</p>
          <h2 className="section-title">Meet Our <em>Experts</em></h2>
          <p className="section-desc">
            Discover the skilled professionals dedicated to your beauty and wellness journey
          </p>
        </div>
        
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item fade-in">
              <div className="gallery-image-wrapper">
                <img src={image.src} alt={image.alt} className="gallery-image" />
                <div className="gallery-overlay">
                  <h3>{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
