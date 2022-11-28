import React from 'react'
import './exploresection.css'
//import { restaurants } from '../../../data/restaurants'
import Explorecard from './explorecard/Explorecard'

const Exploresection = ({list,collectionName}) => {
  return (
    <div className='max-width explore-section'>
      <div className='collection-title'>{collectionName}</div>
      <div className="explore-grid">
        {list.map((restaurant)=>{
          return<Explorecard restaurant={restaurant}/>
        })}
      </div>
    </div>
  )
}

export default Exploresection
