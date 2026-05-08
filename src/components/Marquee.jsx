const Marquee = () => {
  const marqueeItems = [
    "Facial Treatments",
    "Body Contouring", 
    "Skin Rejuvenation",
    "Chemical Peels",
    "Microneedling",
    "Laser Treatments",
    "Waxing & Threading",
    "Lash & Brow"
  ]

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {marqueeItems.map((item, index) => (
          <span key={index} className="marquee-item">
            {item} <span className="marquee-dot">✦</span>
          </span>
        ))}
        {/* duplicate for seamless loop */}
        {marqueeItems.map((item, index) => (
          <span key={`duplicate-${index}`} className="marquee-item">
            {item} <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default Marquee
