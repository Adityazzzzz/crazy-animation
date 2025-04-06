import About from "./components/about";
import Contact from "./components/contact";
import Features from "./components/features";
import Footer from "./components/footer";
import Hero from "./components/hero"
import NavBar from "./components/navbar";
import FloatingImage from "./components/story";

function App() {
    return (
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Features />
        <FloatingImage />
        <Contact />
        <Footer />  
        {/* <section className="z-0 min-h-10 bg-blue-500" /> */}
      </main>
    );
  }

export default App
