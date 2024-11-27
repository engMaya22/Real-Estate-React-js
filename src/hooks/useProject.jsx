import {useState ,useEffect} from "react";
import {assets , projectsData} from "../assets/assets"

const useProject  = ()=>{
    const {left_arrow  , right_arrow } = assets;
    const [currentIndex , setCurrentIndex] = useState(0);
    const [cardsToShow , setCardsToShow] = useState(1);//cards to show at least one card by default

    useEffect(()=>{

        const updateCardToShow = ()=>{//set setCardsToShow based on screen size
                if(window.innerWidth >= 1024){//larg screen
                    setCardsToShow(projectsData.length )
                }else{
                    setCardsToShow(1 )

                }           

        }
        updateCardToShow();
        window.addEventListener('resize' , updateCardToShow);
        return ()=> window.removeEventListener('resize' , updateCardToShow);


    },[])

    const nextProject =()=>{
        setCurrentIndex((prevIndex)=>(prevIndex + 1) % projectsData.length); //we use mod to return to first one

    }
    const prevProject =()=>{

        setCurrentIndex((prevIndex)=> prevIndex === 0  ?  projectsData.length -1  : prevIndex - 1 ); 
    }
    return {
        nextProject , 
        prevProject,
        left_arrow,
        right_arrow ,
        currentIndex ,
        cardsToShow


    }


}
export default useProject;