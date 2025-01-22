import data from "../../data/index.json";
import { useState, useEffect } from "react";
import { Fieldset } from 'primereact/fieldset';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Link as RouterLink } from "react-router-dom";

export default function DigitalCircuitDesign() {
  return (
    <><section id="RadioProject" className="about--section">
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">Digital Circuit Design</h1>
        </div>
      </div>
    </section>
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--section--container">
      {data?.["digital-circuits-1"]?.map((item, index) => (
        <div key={index} className="radio--section--card">
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md" style={{ marginTop: '20px' }}>{item.description}</p>
            </div>
            <div className="portfolio--section--img">
            <img src={item.src} alt="Placeholder" />
          </div>
          </div>
        </div>
      ))}
    </div>
    <div className="portfolio--section--container">
      {data?.["digital-circuits-2"]?.map((item, index) => (
        <div key={index} className="radio--section--card">
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md" style={{ marginTop: '20px' }}>{item.description}</p>
            </div>
            <div className="portfolio--section--img">
            <img src={item.src} alt="Placeholder" />
          </div>
          </div>
        </div>
      ))}
    </div>
  </section></>
  );
}
