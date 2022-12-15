import { useContext } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import FeaturedProject from "./components/FeaturedProject"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { DarkModeContext } from "./context/darkModeContext"

function App() {
  const { dark} = useContext(DarkModeContext) as DarkModeContextType

  return (
    <>
    <div className={`${dark ? 'dark' : ''} transition-all ease-out duration-500 bg-gray-50 select-none`}>
      <Navbar />
      <div className="px-10 lg:px-48 2xl:px-56 space-y-40 md:space-y-52 dark:bg-gray-900">
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
