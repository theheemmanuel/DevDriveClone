import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/footer";
import "./App.css";
import Testimonials from "./components/Testimonials";
import "animate.css/animate.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <p className="w-full h-1 dark:bg-black bg-gray-200"></p>
      <Analytics />
      <Cards />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
