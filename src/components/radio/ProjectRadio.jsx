import data from "../../data/index.json";
import { useState, useEffect } from "react";
import { Fieldset } from 'primereact/fieldset';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Link as RouterLink } from "react-router-dom";

export default function RadioProject() {
  return (
    <><section id="RadioProject" className="about--section">
      <div className="about--section--img">
        <img src="./img/CrystalSetPics/Circuit Diagram.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Crystal Set Radio</h1>
          <p className="hero--section-description">
            For this project I created the circuit for a simple crystal set radio.
            The radio was based on the diagram shown to the left, from "The Crystal Set" by Thomas B. Greenslade Jr. linked below.
            I was targeting the radio frequency 680kHz, corresponding to an oldies station within listening distance of Pittsburgh.
            To achieve this I had to satisfy the equation f = 1/[2π(LC)^1/2] , where f is the frequency I was targeting, L is the inductance of my inductor, and C is the capacitance of my capacitor.
          </p>
          <div>
        <a href="/img/Crystal Set Radio/The Crystal Set-1.pdf" className="btn btn-github" target="_blank" rel="noopener noreferrer" style={{ marginTop: '20px' }}>The Crystal Set</a>
        </div>
        </div>
      </div>
    </section>
    <section className="portfolio--section" id="MyPortfolio">
    <div className="portfolio--container-box" style={{ marginBottom: '120px' }}>
      <div className="portfolio--container">
      </div>
    </div>
    <div className="portfolio--section--container">
      {data?.radio?.map((item, index) => (
        <div key={index} className="radio--section--card">
          <div className="portfolio--section--img">
            <img src={item.src} alt="Placeholder" />
          </div>
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
          <div className="radio--section--card">
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Results</h3>
              <p className="text-md">Once the circuit was complete, I could hear faint music through the earpiece, but it was difficult to tell if it was the station I had been targeting. Tuning the inductor by removing or adding loops lead to static and eventually seemed to switch to another station, even though I still could not tell exactly what was playing.
              Although it was not possible to determine whether or not I had targeted the correct station, I still believe that this project was a success, as I was able to achieve some output with relatively simple materials.</p>
            </div>
          </div>
        </div>
  </section></>
  );
}
