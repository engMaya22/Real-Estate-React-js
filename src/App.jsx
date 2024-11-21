import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"

function App() {

  return (
    <>
       <div className="w-full overflow-hidden">
         <Header />
         <About />
         <Projects />
         <Testimonials />

       </div>
    </>
  )
}
// make tailwind css for h1 where it is common for all sections and its span
//make card for project and testimonial

export default App
