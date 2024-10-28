import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./insho-style.css";
import FavColor from "./components/favColor";
import Contact from "./components/Contact";

export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <FavColor />
      <Contact />
    </section>
  );
}