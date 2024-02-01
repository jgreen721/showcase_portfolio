import React, {useState, useRef, useEffect} from 'react'
import { useObserver } from '../../../../hooks/useObserver';
import {useAppContext} from "../../../../context/AppContext"
import "./CategoryRow.css"

const CategoryRow = ({category}) => {
  const [data,setData] = useState(category.samples);
  const categoryRef = useRef();
  const {isVisible} = useObserver(categoryRef)
  const {updateCategory} = useAppContext()

  useEffect(()=>{
    console.log('isVisible',isVisible);
    if(isVisible){
      updateCategory(category.level);
    }
  })

  // console.log(setData)
  return (
    <div ref={categoryRef} className="category-row-section">
        <h3 className="my-1"><span className="mid-thin mr-2">Level:</span>{category.level}</h3>
        <h5 className="mid-thin">{category.description}</h5>
        <ul className="carousel">
          <div className="carousel-row">
        {data.map((item)=>(
<li key={item.id} className={item.translate == -105 || item.translate == 210 ?  "carousel-item none" : "carousel-item"} style={{transform:item.translate ? `translateX(${item.translate}%)` : 'none'}}>
    <img className="carousel-img" src={item.img}/>
</li>
        ))}
        </div>
        </ul>
        <button className="carousel-btn" onClick={()=>setData((data)=>data.map(d=>d.translate > -105 ? {...d,translate:d.translate - 105} : {...d,translate:210}))}>Prev</button>
        <button className="carousel-btn" onClick={()=>setData((data)=>data.map(d=>d.translate < 210 ? {...d,translate:d.translate + 105} : {...d,translate:-105}))}>Next</button>

    </div>
  )
}

export default CategoryRow