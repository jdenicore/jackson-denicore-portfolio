import data from "../../data/index.json";
import { useState, useEffect } from "react";
import { Fieldset } from 'primereact/fieldset';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Link as RouterLink } from "react-router-dom";

export default function RadioProject() {
  return (
    <section id="RadioProject" className="breadboard--section" style={{ marginBottom: '20px' }}>
      <div className="about--section--img">
        <div className="hero--section--content--box about--section--box">
          <div className="breadboard--section--content">
            <h1 className="skills-section--heading--right" >Breadboard Circuit</h1>
            <div className="portfolio--section--container" style={{ marginTop: '90px' }}>
              <div className="radio--section--card">
                <div className="portfolio--section--card--content">
                  <div className="portfolio--section--img">
                    <img src="./img/201Labs/RPS.png" alt="Placeholder"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rps--section--container" style={{ marginBottom: '60px' }}>
        <div className="radio--section--card">
          <div className="portfolio--section--card--content">
            <div>
              <h3 className="portfolio--section--title">Abstraction</h3>
              <p className="text-md">00: Invalid, 01: Rock, 10: Paper, 11: Scissors <br />A/B: Player inputs, WA/WB: Winning player, E: Invalid input</p>
            </div>
          </div>
        </div>
        {data?.["rps"]?.map((item, index) => (
          <div key={index} className="radio--section--card">
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
              </div>
              <div className="portfolio--section--img">
                <img src={item.src} alt="Placeholder" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
