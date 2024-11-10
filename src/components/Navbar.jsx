import { assets } from "../assets/assets"

const Navbar = () => {
    const {logo}  = assets;
  return (
    <div className="w-full top-0 left-0 absolute z-10">
        <div className="container mx-auto flex justify-between items-center  py-4 px-6 md:px-20 lg:px-32 bg-transparent"> 
            <img src={logo} alt="" />
            <ul className="hidden md:flex  gap-7 text-white">
                <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
                <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
                <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
                <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>

            </ul>
            <button className="hidden md:block bg-white px-8 py-2 rounded-full">
                Signup
            </button>
          
        </div>
      
    </div>
  )
}

export default Navbar