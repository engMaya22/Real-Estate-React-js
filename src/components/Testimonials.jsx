

import {testimonialsData , assets} from "../assets/assets"
const Testimonials = ()=>{
    const {star_icon} = assets;

    return (
         
         <div className="container mx-auto py-10  lg:px-32 w-full overflow-hidden" id="Testimonials">
            <h1 className="text-2xl sm:text-4xl text-center font-bold mb-2"> Customer
                <span className="underline underline-offsite-4 decoration-1 under font-light"> Testimonials </span></h1>
            <p  className="text-gray-500 max-w-80 mx-auto text-center mb-12 ">Real Stories from Those Who Found Home With Us</p>
            <div className="flex flex-wrap gap-2 sm:gap-0 justify-center ">
            {
                testimonialsData.map((testimonial , index)=> ( 
                      <div key={index} className="max-w-[340px] border shadow-lg rounded px-8  py-12 text-center">
                            <img src={testimonial.image} alt= {testimonial.alt} className="mx-auto w-20 h-20 rounded-full mb-4" />
                            <h2 className="text-gray-700 font-meduim text-xl"> {testimonial.name}</h2>
                            <p className="mb-4 text-gray-500 text-sm">{testimonial.title}</p>
                            <div className="flex justify-center gap-1  mb-4 text-red-500">
                                {
                                    Array.from( (  {length: testimonial.rating }) , (item , index)=>(
                                        <img src={star_icon }  key={index}/>

                                    )  ) 
                                }
                            </div>
                            <p className="text-gray-600">{testimonial.text}</p>

                      </div>
                    
                ))
            }

         </div>
         </div>
        
    )


}

export default Testimonials;