import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import "./insho-style.css";
import FavColor from "./components/favColor";

export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      <FavColor />
    </section>
  );
}