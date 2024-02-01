import {useEffect, useState} from "react"

export const useObserver=(el)=>{
    const [isVisible,setIsVisible] = useState(false)

    const changeSection = (entry)=>{
        // console.log(entry)
        if(entry[0].isIntersecting){
            // console.log("toggleState");
            setIsVisible(true);
        }
        else{
            setIsVisible(false)
        }
    }

    const observer = new IntersectionObserver(changeSection,{threshold:.7})


    useEffect(()=>{
        if(el.current){
            // console.log("attaching observer");
            observer.observe(el.current)
        }


        return ()=>{
            // console.log("cleanUp");
            observer.unobserve(el.current);
        }
    },[])



    return {isVisible}
}