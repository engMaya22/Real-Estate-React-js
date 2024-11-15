import {assets} from "../assets/assets"

const About =()=>{
    const {brand_img} = assets;
    return <div className ="  container flex flex-col items-center jsutify-center
                    mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2">About 
                    <span className="underline underline-offsite-4 decoration-1 under font-light">Our Brand</span>
                </h1>
                {/* max-w-80 to make the paragh in width */}
                <p className="text-gray-500 max-w-80 text-center mb-8">Passionate About Our Properties , Dedicated to Your Vision </p>
                <div className="flex flex-col md:flex-row md:gap-20 items-center md:items-start">
                    <img src={brand_img} className="w-full sm:w-1/2 max-w-lg "/>
                    <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">

                        <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                            <div >
                                <p className="text-gray-800 font-meduim text-4xl">10+</p>
                                <p>of Excellence</p>
                            </div>
                            <div >
                                <p className="text-gray-800 font-meduim text-4xl">12+</p>
                                <p>Projects Completed</p>
                            </div>
                            <div >
                                <p className="text-gray-800 font-meduim text-4xl">20+</p>
                                <p>Mn . sq . Deliverd</p>
                            </div>
                            <div >
                                <p className="text-gray-800 font-meduim text-4xl">25+</p>
                                <p>Ongoing Projects</p>
                            </div>


                        </div>
                        <p className="my-10 max-w-lg">
                            Real Estate Agents are professionals who help home buyers find and buy a new home or commercial space. They help them buy and sell homes and guide clients through negotiation processes to get top dollar for their property when selling.
                        </p>
                        <button className='bg-blue-600  text-white py-2 px-8 rounded'>Learn more</button>

                    </div>
                </div>

             </div>
}

export default About;