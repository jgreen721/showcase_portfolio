import {useEffect, useState} from "react"

export const useObserver=(el)=>{
    const [isVisible,setIsVisible] = useState(false)
    const [thresh,setThresh] = useState(.7)

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

    const observer = new IntersectionObserver(changeSection,{threshold:thresh})


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


    onresize=()=>{
        if(innerWidth < 1050){
            setThresh(.4)
        }
    }



    return {isVisible}
}