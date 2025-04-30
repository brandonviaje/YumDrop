import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {

  const {foodList} = useContext(StoreContext);
  const filterFoods = foodList.filter(food => (
    //normalize casing
    category === 'All' || food.category.toLowerCase() === category.toLowerCase()
  ));
  return (
    <div className="container">
      <div className="row">
        {filterFoods.length > 0 ? (
          filterFoods.map((food, index) => (
            <FoodItem key={index} 
            name={food.name} 
            description={food.description} 
            price={food.price} 
            id = {food.id} 
            imageUrl = {food.imageUrl}/>
          ))
        ) : (
          <div className="text-center mt-4">
            <h4>No Food Found.</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
