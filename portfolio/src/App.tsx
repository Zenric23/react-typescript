import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import FeaturedProject from "./components/FeaturedProject"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <div className="bg-gray-50 select-none">
      <Navbar />
      <div className="px-56 space-y-52">
        <Hero />
        <FeaturedProject />
        <Experience />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
