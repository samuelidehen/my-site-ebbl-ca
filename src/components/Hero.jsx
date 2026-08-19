import { hero } from "../content.js";
import heroImage from "../assets/hero.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__image" style={{ backgroundImage: `url(${heroImage})` }} />
      <div className="hero__scrim" />
      <div className="container hero__content">
        <div className="hero__times">
          {hero.times.map((time) => (
            <p key={time}>{time}</p>
          ))}
        </div>
        <a className="btn btn-outline-light" href="#visit">
          {hero.cta} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
