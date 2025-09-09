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
<h2>Hello — I'm Mimkh</h2>
<p>I build clean web experiences and brand identities. This is a quick starter site using your chosen headline font.</p>
<div className="buttons">
<a href="#work" className="btn">View work</a>
<a href="#contact" className="btn primary">Get in touch</a>
</div>
</section>


<section id="work" className="section">
<h3>Selected work</h3>
<div className="grid">
<article className="card">Project A</article>
<article className="card">Project B</article>
</div>
</section>


<section id="about" className="section">
<h3>About</h3>
<p>Short bio about Mimkh — who you are, what you do, and a call to action.</p>
</section>


<section id="contact" className="section">
<h3>Contact</h3>
<p>Email: hello@mimkh.com</p>
</section>
</main>


<footer className="footer">© {new Date().getFullYear()} Mimkh</footer>
</div>
)
}