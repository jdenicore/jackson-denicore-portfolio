export default function Header(){
    return(
        <section className="cpu--header--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                <h1 className="hero--section--title">
                    <span className="hero--section-title--color">FPGA CPU</span>{" "}
                </h1>
                <p className="hero--section-description">
                    For this project I created a simple CPU implemented onto a DE10-Lite FPGA Board. <br />
                    The basic design is shown in the diagram to the right, where
                    the counter reads through a set of instructions in the memory component that are fed into the processor.
                </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/201Labs/cpu/cpu_diagram.png" alt="Hero Section" />
            </div>
        </section>
    )
}