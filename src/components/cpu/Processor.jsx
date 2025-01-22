import data from "../../data/index.json";
import BasicDemo from "../carousel/App";
import { PrimeReactProvider } from 'primereact/api';
import React from 'react';

export default function processor(){
    return(
      <section id="processor" className="processor--section">
        <div id="processor" className="processor--section--cards">
          <div className="rps--section--container" style={{ marginTop: '60px' }}>
            <h1 className="skills-section--heading--right" >Processor</h1>
            <p className="hero--section-description">
            The first and lengthiest part of this project was creating the 9-bit processor. The design was based on the diagram to 
            the right and the instruction set below. The final processor had 8 registers and the ability to move data inbetween registers, move new data into a register, and subtract or add the data of one 
            register from another. This processor was then implemented onto an FPGA board where individual instructions could be inputted to test the processor before adding memory interfacing.
            </p>
            <div className="rps--section--container" >
              <div className="radio--section--card">
                  <div className="portfolio--section--card--content">
                  <div>
                      <h3 className="portfolio--section--title">Instructions</h3>
                  </div>
                  <div className="portfolio--section--img">
                      <img src="./img/201Labs/cpu/processor_instructions.png" alt="Placeholder" />
                  </div>
                  </div>
              </div>
            </div>
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
                                <img src="./img/201Labs/cpu/processor_diagram.png" alt="Placeholder" />
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