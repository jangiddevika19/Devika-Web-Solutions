import Navbar from "./components/layouts/Navbar";

import Hero from "./components/home/Hero";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/layouts/Footer";


function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

    </>
  );
}

export default App;