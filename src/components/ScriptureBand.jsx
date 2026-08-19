import { scripture } from "../content.js";
import "./ScriptureBand.css";

export default function ScriptureBand() {
  return (
    <section className="scripture-band">
      <div className="container">
        <blockquote>
          <p>« {scripture.quote} »</p>
          <cite>{scripture.reference}</cite>
        </blockquote>
      </div>
    </section>
  );
}
