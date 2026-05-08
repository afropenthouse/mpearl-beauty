const Products = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const products = [
    {
      id: 1,
      image: "/Flat tummy herb.jpg",
      name: "Flat Tummy Herb",
      price: "NGN 25,000.00"
    },
    {
      id: 2,
      image: "/Ulcer herb.jpg",
      name: "Ulcer Herb",
      description: "For any type of ulcer",
      price: "NGN 10,000.00"
    },
    {
      id: 3,
      image: "/Complete kit of Wartherps.jpg",
      name: "Complete Kit of Wart/Herps",
      description: "Kills bacteria & pathogens, boosting immunity.",
      price: "NGN 118,500.00"
    },
    {
      id: 4,
      image: "/Staphylococcus Aureus herb.jpg",
      name: "Staphylococcus Aureus Herb",
      price: "NGN 84,900.00"
    }
  ]

  const handleWhatsAppBooking = (productName) => {
    const phoneNumber = "2348034567890" // Replace with actual WhatsApp number
    const message = `Hi, I'm interested in ordering: ${productName}. Please provide more information.`
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="products" id="products">
      <div className="container">
        <div style={{textAlign:'center'}} className="fade-in">
          <p className="section-label">✦ Shop</p>
          <h2 className="section-title">Herbal <em>Products</em></h2>
          <p className="section-desc">
            Natural remedies for your health and wellness needs
          </p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card fade-in">
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                {product.description && (
                  <p className="product-desc">{product.description}</p>
                )}
                <p className="product-price">{product.price}</p>
                <button 
                  className="btn-primary product-btn"
                  onClick={() => handleWhatsAppBooking(product.name)}
                >
                  Order now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
