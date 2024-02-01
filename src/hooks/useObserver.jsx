import {useEffect, useState} from "react"

export const useObserver=(el)=>{
    const [isVisible,setIsVisible] = useState(false)

    const changeSection = (entry)=>{
        console.log(entry)
        if(entry[0].isIntersecting){
            // console.log("toggleState");
            setIsVisible(true);
        }
    }

    const observer = new IntersectionObserver(changeSection)


    useEffect(()=>{
        if(el.current){
            // console.log("attaching observer");
            observer.observe(el.current)
        }


        return ()=>{
            console.log("cleanUp");
            observer.unobserve(el.current);
        }
    },[])



    return {isVisible}
}