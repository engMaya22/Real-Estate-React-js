import Navbar from "./Navbar"
import {assets} from "../assets/assets"

const Header = ( ) => {
    return <div className="min-h-screen bg-cover mb-4 bg-center flex items-center w-full overflow-hidden"
              style={{backgroundImage:"url('/header_img.png')"}} id="Header">
                <Navbar /> 
                <div className="container mx-auto text-center px-6 py-4  md:px-20 lg:px-32 text-white">
                    <h2 className ="text-5xl md:text-6xl lg:text-[82px]
                    max-w-3xl inline-block font-semibold pt-20 ">
                        Explore homes that fit your dreams
                    </h2>
                    <div className="space-x-6 mt-16">
                        <a href="#Projects" className="rounded border border-white py-3 px-8 "> Projects</a>
                        <a href="#Contact" className="rounded border bg-blue-500 py-3 px-8"> Contact Us</a>
                    </div>
                </div>
            </div>

}
export default Header;