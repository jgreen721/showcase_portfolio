import React, {Suspense, useState, useEffect} from 'react'
import {Canvas, useFrame, useThree} from "@react-three/fiber"
import {useGLTF,Text, useAnimations,Float} from "@react-three/drei"
import "./Experience.css"


const Model =()=>{
    const img = useGLTF("./models/typingguy2.glb");
    const {mixer,actions} = useAnimations(img.animations,img.scene);
    const [pos,setPos] = useState([.15,-1.85,1])
    const [scale,setScale] = useState(.65)
    console.log(img)

    useFrame(()=>{

        img.animations.forEach(clip=>{
            if(clip.name == "Typing"){
            let action = mixer.clipAction(clip);
            action.play();
            }
        })
    })

    useEffect(()=>{
        if(innerWidth < 825){
            setScale(.4)
            setPos([.3,-1,1])
        }

        if(innerWidth < 425){
            setScale(.4)
            setPos([.65,-1,1.5])
        }
    },[])

    onresize=()=>{
        if(innerWidth < 825){
            setScale(.4)
            setPos([.3,-1,0])
        }
        if(innerWidth < 425){
            setScale(.4)
            setPos([1,-1,2])
        }

    }

    return (
        <Float>
        <group position={pos} rotation={[0,Math.PI * -.25,0]}>
            <pointLight intensity={.7}/>
            <directionalLight intensity={2} position={[1,1,0]}/>
            <primitive scale={scale} object={img.scene}/>
        </group>
        </Float>
    )
}


const Scene = ()=>{
    const {camera} = useThree();

    camera.position.z = 5;

    return (
        <group>
            <Suspense onFallback={()=><Text>Loading...</Text>}>
            <Model/>
            </Suspense>
        </group>
    )
}

const Experience = () => {

  return (
    <div className="experience-overlay">
        <Canvas>
            <ambientLight intensity={.6}/>
            <Scene/>
        </Canvas>
    </div>
  )
}

export default Experience