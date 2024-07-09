import Hero from "../components/hero/herosection"
import About from "../components/contents/about"
import Technologie from "../components/contents/technologie"
import Experiences from "../components/contents/experiences"
import Project from "../components/contents/project"
import Contact from "../components/contents/contact"
export default function Home()  {
    return (
        <>
        
          <Hero/>
          <About />
          <Technologie />
          <Experiences/>
          <Project />
          <Contact />
        </>
    )
}