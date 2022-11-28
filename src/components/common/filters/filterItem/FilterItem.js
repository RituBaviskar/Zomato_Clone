import React from 'react'
import './filterItem.css'


const FilterItem = ({filter}) => {
  return (
    <div>
      <div className="filter-item">
    {filter.icon && filter.icon}
    <div className='filter-name'>{filter.title}</div>
      </div>
    </div>
  )
}

export default FilterItem
