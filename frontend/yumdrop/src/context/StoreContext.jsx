import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/foodService";
import axios from 'axios';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {

  const [foodList, setFoodList] = useState([]);

  const contextValue = {
    foodList
  };

  useEffect(() => {
    async function loadData(){
      const data = await fetchFoodList();
      setFoodList(data);
    }
    //load  data
    loadData();
  },[]);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}