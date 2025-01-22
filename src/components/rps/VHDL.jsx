import data from "../../data/index.json";

export default function vhdl() {
    return (
        <section className = "skills--section">
            <h1 className="skills-section--heading--right">VHDL Implementation</h1>
            <p className="hero--section-description">
            After creating the circuit on a breadboard, I transferred the design onto an FPGA board. The buttons for each players' inputs were replaced with switches, and LED lights above the switches were used to indicate a winner, a tie, or an invalid input. Below is the code and the RTL view of it after compilation.
            </p>
            <div className="skills--section--container">
                {data?.rps_vhdl?.map((item, index) => (
                <div key={index} className="skills--section--card">
                    <div className="skills--section--card--content">
                        <h3 className="skills--section--title">{item.title}</h3>
                    </div>
                    <div className="skills--section--img">
                        <img src={item.src} alt="Product Chain" />
                    </div>
                </div>
                ))}
            </div>
        </section>     
    );
}