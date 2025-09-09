import React from 'react'


export default function App() {
return (
<div className="container">
<header className="header">
<h1 className="logo">Mimkh</h1>
<nav className="nav">
<a href="#work">Work</a>
<a href="#about">About</a>
<a href="#contact">Contact</a>
</nav>
</header>


<main>
<section id="hero" className="card">
<h2>Hi I'm Mohammdkhalvat</h2>
<div className="buttons">
<a href="#work" className="btn">View work</a>
<a href="#contact" className="btn primary">Get in touch</a>
</div>
</section>


<section id="work" className="work">
  <h2>Products</h2>
  <div className="projects-grid">
    <div className="card">
      <h3>Mimkh T-Shirt</h3>
      <div className="product-images">
        <img src="/products/tshirt-front.jpg" alt="Mimkh T-Shirt Front" />
        <img src="/products/tshirt-back.jpg" alt="Mimkh T-Shirt Back" />
      </div>
      <p>High-quality cotton T-shirt featuring the Mimkh design. Front & back print.</p>
      <button className="buy-btn">Buy Now</button>
    </div>
  </div>
</section>



<section id="about" className="section">
<h3>About</h3>
<p>I'm Mohammad and Im planning to make it better</p>
</section>


<section id="contact" className="section">
<h3>Contact</h3>
<p>Email: MohammadKhalvat5757@gmail.com</p>
<p>phone:+1(647)-869-6904</p>
</section>
</main>


<footer className="footer">© {new Date().getFullYear()} Mimkh</footer>
</div>
)
}
