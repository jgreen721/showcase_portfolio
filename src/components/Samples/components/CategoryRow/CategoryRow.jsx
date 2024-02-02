import React, {useState, useRef, useEffect} from 'react'
import { useObserver } from '../../../../hooks/useObserver';
import {useAppContext} from "../../../../context/AppContext"
import {FaReact,FaHtml5,FaCss3, FaJs, FaArrowLeft, FaArrowRight} from "react-icons/fa"
import {TbBrandBlender,TbBrandThreejs} from "react-icons/tb"
import "./CategoryRow.css"

const CategoryRow = ({category}) => {
  const [data,setData] = useState(category.samples);
  const categoryRef = useRef();
  const {isVisible} = useObserver(categoryRef)
  const {updateCategory} = useAppContext()
  const [info,setInfo] = useState({})

  useEffect(()=>{
    console.log('isVisible',isVisible);
    if(isVisible){
      updateCategory(category.level);
    }
  })

  const handleSetInfo=(info)=>{
    let icons = [];
    info.technology.forEach(item=>{
      if(item == "HTML" || item.name == "HTML"){
        icons.push(({name:"HTML",icon:<FaHtml5/>,color:"html_orange"}))
      }
      if(item == "JS" || item.name == "JS"){
        icons.push(({name:"JS",icon:<FaJs/>,color:"js_yellow"}))
      }
      if(item == "CSS" || item.name == "CSS"){
        icons.push(({name:"CSS",icon:<FaCss3/>,color:"css_blue"}))
      }
      if(item == "React" || item.name == "React"){
        icons.push(({name:"React",icon:<FaReact/>,color:"react_blue"}))
      }
      if(item == "Blender" || item.name == "Blender"){
        icons.push(({name:"Blender",icon:<TbBrandBlender/>,color:"blender_orange"}))
      }
      if(item == "Three" || item.name == "Three"){
        icons.push(({name:"Three",icon:<TbBrandThreejs/>,color:"three_grey"}))
      }
    })
    let temp = info;
    temp.technology = icons;
    setInfo(temp);
  }

  // console.log(setData)
  return (
    <div ref={categoryRef} className="category-row-section">
        <h3 className="my-1"><span className="mid-thin mr-2">Level:</span>{category.level}</h3>
        <h5 className="mid-thin">{category.description}</h5>
        <ul className="carousel">
          <div className="carousel-row">
            {data.map((item)=>(
              <li onClick={()=>handleSetInfo(item)} key={item.id} className={item?.hide == true ?  "carousel-item hide-item" : "carousel-item"} style={{transform:`translateX(${item.translate}%)`}}>
                <img className="carousel-img" src={item.img}/>
              </li>
              ))}
          <button className="carousel-btn prev-btn" onClick={()=>setData((data)=>data.map(d=>d.translate > -104 ? {...d,hide:false,translate:d.translate - 105} : {...d,hide:true,translate:210}))}><FaArrowLeft/></button>
          <button className="carousel-btn next-btn" onClick={()=>setData((data)=>data.map(d=>d.translate < 209 ? {...d,hide:false,translate:d.translate + 105} : {...d,hide:true,translate:-105}))}><FaArrowRight/></button>
          </div>

        </ul>
        <div className="category-panel-row">
          {/* <button className="carousel-btn" onClick={()=>setData((data)=>data.map(d=>d.translate > -105 ? {...d,translate:d.translate - 105} : {...d,translate:210}))}>Prev</button>
          <button className="carousel-btn" onClick={()=>setData((data)=>data.map(d=>d.translate < 210 ? {...d,translate:d.translate + 105} : {...d,translate:-105}))}>Next</button> */}
          <div className="preview-container">
            {!info?.title && <h4 className="empty-h4 mid-thin text-secondary">Select a Sample</h4>}
            {info?.title &&
              <div className="item-info">
                 <h4 className="uppercase text-secondary">{info?.title}</h4>
                 <ul className="technology-list">
                  {info.technology.map(t=>(
                    <h4 className={t.color} key={t.name}>{t.icon} </h4>

                  ))}
                  </ul>
                  <p>{info.description}</p>
                  <a className="visit-link" target="_blank" href={info.site}>Visit</a>
              </div>}
          </div>
        </div>

    </div>
  )
}

export default CategoryRow