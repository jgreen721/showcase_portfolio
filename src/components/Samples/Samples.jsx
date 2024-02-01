import React from 'react'
import "./Samples.css"
import {CategoryRow} from "./components"
import { useAppContext } from '../../context/AppContext'

const Samples = () => {
  const {data} = useAppContext();
  return (
    <div>
        {data.map(category=>(
            <CategoryRow category={category} key={category.id}/>
        ))}
    </div>
  )
}

export default Samples