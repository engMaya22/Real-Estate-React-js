import {assets} from "../assets/assets"

const Footer =()=>{
    const {logo_dark} = assets;
    return <div className="pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-900 overflow-hidden " id="Footer">
             <div className="flex mx-auto container flex-col md:flex-row justify-between items-start">
                <div className="mb-8 md:mb-0 w-full md:w-1/3">
                     <img src={logo_dark} />
                     <p className="mt-4 text-gray-400">
                     A company that buys, sells, and rents properties: In recent years, shares of real estate companies have returned an average of 33%. run/own/manage a real estate company They run a real estate company in Las Vegas and are currently very worried about the state of the housing market. private/public real estate companies.

                     </p>

                </div>

                <div className="mb-8 md:mb-0 w-full md:w-1/5 ">
                   <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                    <ul className="flex flex-col gap-2 text-gray-400">
                        <a href="#Header" className="hover:text-white">Home</a>
                        <a href="#About" className="hover:text-white">About us</a>
                        <a href="#Contact" className="hover:text-white">Contact us</a>
                        <a href="#" className="hover:text-white">Privacy policy</a>

                    </ul>
                </div>

                <div className="w-full md:w-1/3">
                    <h3 className="text-white font-bold text-lg mb-4">Subscribe to our newsletter</h3>
                    <p className="text-gray-400 mb-4 max-w-80">The latest news, artciles , and resources , sent to your inbox weekly .</p>

                    <div className="flex gap-2">
                        <input  type="email" placeholder="Enter your email" className="p-2 rounded
                        text-gray-400 bg-gray-800 border border-gray-700 focus:outline-none w-full md:w-auto" />

                        <button className="bg-blue-500 py-2 px-4 rounded text-white">Subscribe</button>
                    </div>
                </div>

             </div>
        
             <div className="border-t border-gray-700 mt-10 py-4 text-center text-gray-500">
               Copyright 2024 . All Rights Reserved .
             </div>
         
           </div>

}
export default Footer;