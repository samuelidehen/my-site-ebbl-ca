import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ScriptureBand from "./components/ScriptureBand.jsx";
import MissionStatement from "./components/MissionStatement.jsx";
import Engagements from "./components/Engagements.jsx";
import Ministries from "./components/Ministries.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ScriptureBand />
        <MissionStatement />
        <Engagements />
        <Ministries />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
