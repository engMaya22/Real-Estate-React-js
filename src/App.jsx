import { ToastContainer } from 'react-toastify';
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


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
         <Footer />

       </div>
    </>
  )
}
// make tailwind css for h1 where it is common for all sections and its span
//make card for project and testimonial
//make data form saved by local storage
//make tailwind class for buttons
//make copy right dynamic

export default App
