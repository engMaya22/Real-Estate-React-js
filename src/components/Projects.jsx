import { projectsData} from "../assets/assets"
import { motion } from "framer-motion"
import useProject from "../hooks/useProject"

const Projects =()=>{

    const {
        nextProject , 
        prevProject,
        left_arrow,
        right_arrow ,
        currentIndex ,
        cardsToShow


    } = useProject();

    return <motion.div
                initial={{opacity:0 , x:-200}}
                transition={{duration:1}}
                whileInView={{opacity:1 , x:0}}
                viewport={{once:true}}
                className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 overflow-hidden w-full"
                 id="Projects">

                <h1 className="heading">Projects  
                    <span className="headingSpan underline-offsite-4 " >Completed</span> 
                    
                </h1>
                {/* if we want to still cenetr  text after applying max-w-80, we need to add mx-auto  property */}
                
                <p className="paragraph">Crafting Spaces , Building Legacies-Explore Our Portfolio </p>

                {/* slidder buttons */}
                <div className="flex justify-end items-center mb-2">
                    <button className="bg-gray-200 p-3 mr-2 rounded" aria-label="Previous Project" onClick={prevProject}  >
                        <img src={left_arrow}  alt="previous"/>
                    </button>
                    <button className="bg-gray-200 p-3 mr-2 rounded" aria-label="Next Project" onClick={nextProject}>
                        <img src={right_arrow} alt="Next" />
                    </button>
                </div>
         
         {/* project slider container */}
                   <div className="overflow-hidden">
                      <div className="flex gap-8 transition-transform duration-500 ease-out"
                          style={{transform : `translateX(-${(currentIndex * 100)/ cardsToShow}%)`}}  >
                        {projectsData.map( (project , id)=>
                                (   <div className="flex-shrink-0 relative w-full sm:w-1/4 " key={id}>
                                        <img src={project.image} alt={project.title} className="h-auto w-full mb-14"/>
                                        <div className="flex justify-center absolute left-0 right-0 bottom-5 "> 
                                            <div className="bg-white  inline-block w-3/4 px-4 py-2 shadow-md">
                                                <h2 className="text-gray-800 text-xl font-smibold">{project.title}</h2>
                                                <p className="text-gray-500 text-sm"> { project.price} <span className=" px-1">|</span> { project.location}</p>
                                            </div>
                                        </div>

                                    </div>
                                )
                        )}

                      </div>
                       

                       
                   </div>


           </motion.div>

}

export default Projects ;