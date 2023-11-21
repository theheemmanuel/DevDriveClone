import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/footer";
import "./App.css";
import Testimonials from "./components/Testimonials";
import { useState } from "react";

function App() {
  const [darker, lighter] = useState(false);
  return (
    <div className={darker ? "" : "dark"}>
      <div className="fixed bottom-4 right-2 z-50">
        <button
          onClick={() => {
            lighter(!darker);
          }}
          className=" bg-black dark:bg-white border border-white text-2xl font-bold text-white py-2 px-2 dark:border-black dark:text-black rounded-full"
        >
          {darker ? "DRK" : "LHT"}
        </button>
      </div>
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
