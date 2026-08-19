import { engagements } from "../content.js";
import "./Engagements.css";

export default function Engagements() {
  return (
    <section className="engagements">
      {engagements.map((item) => (
        <div
          key={item.title}
          className={`engagement-block engagement-block--image-${item.imageSide}`}
        >
          <div className="container engagement-block__inner">
            <div className="engagement-block__text">
              <p className="eyebrow">{item.eyebrow}</p>
              <h2>{item.title}</h2>
              <p className="engagement-block__body">{item.body}</p>
              <a className="engagement-block__link" href="#">
                {item.link} <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="engagement-block__image">
              <img src={item.image} alt="" loading="lazy" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
