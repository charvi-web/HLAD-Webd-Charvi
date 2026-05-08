import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Debates from "./components/Debates";
import Members from "./components/Members";
import Timeline from "./components/Timeline";
import Join from "./components/Join";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Pillars />
      <Debates />
      <Members />
      <Timeline />
      <Join />
      <Footer />
    </>
  );
}