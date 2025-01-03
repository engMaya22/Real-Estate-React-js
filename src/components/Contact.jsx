import useContact from  "../hooks/useContact"
import { motion } from "framer-motion"

const Contact = () => { 
    const {onSubmit ,
            result ,
            name,
            email,
            message,
            setName,
            setEmail,
            setMessage} = useContact();
      
    return <motion.div 
            initial={{opacity:0 , x:-200}}
            transition={{duration:1}}
            whileInView={{opacity:1 , x:0}}
            viewport={{once:true}}
             className="p-6 py-20 text-center lg:px-32 w-full overflow-hidden" id="Contact">
                <h1 className="heading"> Contact
                <span className="headingSpan underline-offsite-4"> With Us </span></h1>
                <p  className="paragraph ">Ready to Make a Move ?
                    let's  Build your Future Together 
                </p>

                <form className="text-gray-600 pt-8 mx-auto max-w-2xl" onSubmit={onSubmit}>
                     {/* <input type="hidden" name="access_key" value="57891215-da1c-4574-8cc5-5a0ba2605050"></input> */}
                    <div className="flex flex-wrap">
                        <div className="text-left md:w-1/2 w-full">Your Name
                         <input  value={name}
                                 onChange={(e) => setName(e.target.value)}
                                 name="Name" className="border border-gray-300 mt-2 rounded py-3  px-4 w-full" type="text" placeholder="Your Name" required/>
                        </div>
                        <div className="text-left md:w-1/2 w-full md:pl-4">Your Email
                         <input value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="Email" className="border border-gray-300 mt-2 rounded py-3  px-4 w-full" type="email" placeholder="Your Email" required/>
                        </div>
                    </div>
                    <div 
                     className="text-left my-6">
                        Message 
                        <textarea
                         value={message}
                         onChange={(e) => setMessage(e.target.value)}
                         name="Message" placeholder="Message" className="border border-gray-300 py-3 px-4 resize-none h-48 w-full mt-2" required>

                        </textarea>
                    </div>
                    <button  className="px-12 py-2 bg-blue-600 text-white rounded mb-10">{result ? result : 'Send Message'}</button>
                </form>
               
           </motion.div>
        //    


}
export default Contact;