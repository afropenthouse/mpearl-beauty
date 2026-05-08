const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've been coming here for 6 months and my skin has completely transformed. The team is so knowledgeable and makes you feel so comfortable throughout every treatment.",
      author: "Adaeze M.",
      stars: "★★★★★",
      image: "/1s.jpg"
    },
    {
      id: 2,
      text: "MPearl is the only place I trust for my skincare. My chemical peel results were incredible — clearer skin in just a few sessions. Absolutely recommend!",
      author: "Funke O.",
      stars: "★★★★★",
      image: "/2s.jpg"
    },
    {
      id: 3,
      text: "The atmosphere is so calming and luxurious. I came in for lash extensions and left feeling like a whole new woman. The attention to detail is unmatched.",
      author: "Chisom E.",
      stars: "★★★★★",
      image: "/3s.jpg"
    }
  ]

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div style={{textAlign:'center'}} className="fade-in">
          <p className="section-label">✦ Client Love</p>
          <h2 className="section-title">What Our <em>Clients</em> Say</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testi-card fade-in">
                            <div className="testi-stars">{testimonial.stars}</div>
              <p className="testi-text">{testimonial.text}</p>
              <p className="testi-author">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
