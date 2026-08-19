import { mission } from "../content.js";
import "./MissionStatement.css";

export default function MissionStatement() {
  return (
    <section className="mission">
      <div className="container">
        <p>{mission.text}</p>
      </div>
    </section>
  );
}
