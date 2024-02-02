import {useEffect, useState} from "react"

export const useObserver=(el)=>{
    const [isVisible,setIsVisible] = useState(false)
    const [thresh,setThresh] = useState(innerWidth > 1050 ? .6 : .25)
    let observer;
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
    
     observer = new IntersectionObserver(changeSection,{threshold:thresh})


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
            console.log("mobile thresh")
            setThresh(.3)
            observer = new IntersectionObserver(changeSection,{threshold:thresh})

        }
    }



    return {isVisible}
}