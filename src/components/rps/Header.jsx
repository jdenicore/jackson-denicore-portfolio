export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Rock Paper Scissors</span>{" "}
          </h1>
          <p className="hero--section-description">
            <br/>For this project I created a circuit on a breadboard that allows two players to play a game of rock-paper-scissors. <br /> I then transferred the circuit onto a DE10-Lite FPGA board using the VHDL program Quartus Prime.
          </p>
        </div>
    </div>
      <div className="hero--section--img">
        <img src="./img/rps.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}

