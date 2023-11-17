import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/footer";
import "./App.css";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
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
