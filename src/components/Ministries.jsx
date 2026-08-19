import { ministries } from "../content.js";
import "./Ministries.css";

export default function Ministries() {
  return (
    <section className="ministries">
      <div className="container">
        <h2>Ministères</h2>
        <div className="ministries__grid">
          {ministries.map((item) => (
            <a key={item.name} className="ministries__card" href="#">
              <div className="ministries__image">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="ministries__label">
                <span>{item.name}</span>
                <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
