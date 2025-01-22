export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Jackson</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Electrical Engineering</span>{" "}
            <br />
            Student
          </h1>
          <p className="hero--section-description">
            Doylestown, PA
            <br /> University of Pittsburgh, Swanson School of Engineering
          </p>
          <div>
            <a href="/1-8-2025 Resume.pdf" className="btn btn-github" target="_blank" rel="noopener noreferrer" style={{ marginTop: '20px' }}>Resume</a>
          </div>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/Senior Photo.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
