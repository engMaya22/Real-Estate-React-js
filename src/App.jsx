import { ToastContainer } from 'react-toastify';
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"


function App() {

  return (
    <>
       <div className="w-full overflow-hidden">
         <ToastContainer/>
         <Header />
         <About />
         <Projects />
         <Testimonials />
         <Contact />

       </div>
    </>
  )
}
// make tailwind css for h1 where it is common for all sections and its span
//use hook in contact
//make card for project and testimonial

export default App
