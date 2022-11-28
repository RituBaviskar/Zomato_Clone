import React from 'react'
import { restaurants } from '../../data/restaurants';
import Exploresection from '../common/exploreSection/Exploresection';
import Filter from '../common/filters/Filter'
import "./delivery.css"
import DeliveryCollection from './deliveryCollection/DeliveryCollection';
import Topbrand from './topBrands/Topbrand';


const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const restaurantsList = restaurants;

const Delivery = () => {
  return (
    <div>
     <div className='max-width'>
      <Filter filterList={deliveryFilters}/>
      </div>
      <DeliveryCollection />
      <Topbrand />
     <Exploresection  list={restaurantsList} collectionName="Delivery Restaurant in Bangalore"/>
    </div>
  )
}

export default Delivery
