export default function Header(){
    return(
        <section className="cpu--final--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                <h1 className="skills-section--heading--right" >Final Design</h1>
                <p className="hero--section-description">
                    After connecting the processor to the memory and counter components, 
                    the final design was implemented onto a DE10-Lite FPGA board.
                    The board was then programmed with a simple set of instructions to test it's functionality.
                    The final design is shown in the diagram to the right.
                </p>
                </div>
            </div>
            <div className="hero--section--img">
                <img src="./img/201Labs/cpu/cpu_rtl.png" alt="Hero Section" />
            </div>
        </section>
    )
}