export default function memory(){
    return(
        <section className="processor--section">
            <div id="processor" className="memory--section--content">
                <div className="rps--section--container">
                    <h1 className="skills-section--heading--right" >Memory Interfacing</h1>
                    <p className="hero--section-description">
                    The second part of this project involved connecting a counter and memory component to the processor shown in the original diagram.
                    This was accomplished by creating the memory module shown on the right and connecting it to a simple counter that would step through the memory addresses.
                    This allowed lists of up to 32 instructions to be stored in memory and executed by the processor without individually inputting each 9-bit instruction sequence.
                    </p>
                </div>
                <div className="about--section--img">
                    <div className="hero--section--content--box about--section--box">
                    <div className="breadboard--section--content">
                        <div className="rps--section--container" >
                                <div className="radio--section--card">
                                    <div className="portfolio--section--card--content">
                                    <div>
                                        <h3 className="portfolio--section--title">Diagram</h3>
                                    </div>
                                    <div className="portfolio--section--img">
                                        <img src="./img/201Labs/cpu/memory-diagram.png" alt="Placeholder" />
                                    </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}