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
      src: "/3s.jpg",
      alt: "M'pearl Beauty Service",
      title: "Professional Care"
    }
  ]

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div style={{textAlign:'center'}} className="fade-in">
          <p className="section-label">✦ Our Work</p>
          <h2 className="section-title">Treatment <em>Gallery</em></h2>
          <p className="section-desc">
            Discover the transformative results our clients achieve with our advanced beauty treatments
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
