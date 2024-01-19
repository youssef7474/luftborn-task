import React, { useEffect } from "react";
import "./App.scss"
import ProfileSection from "./components/ProfileSection/ProfileSection";
import Card from "./components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "./state/productsSlice";
import Loader from "./components/Loader/Loader";
import ErrorCompo from "./components/ErrorCompo/ErrorCompo";
const App = () => {
  //const data=[1,2,3,4,5,6,7,8,9,10]
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetProducts())
  },[dispatch])
  const Products = useSelector(state => state.Products);
  //console.log(Products)

  if(Products.error){
    return(
    <ErrorCompo error={Products.error}/>
    )
 
  }

  if(Products.IsLoading=== true){
    return(
      <div >
          <Loader/>
      </div>
    )
  }



  return (
    <div className="conatnier" >
      <div className="home-contanier">
        <div>
          <ProfileSection/>
        </div>
        <div className="cardContanier">
        {
          Products?.data?.map((el)=>{
            return(
              <div key={el.id} >
              <Card  data={el}/>
              </div>
            )
          })
        }
          
          
        </div>
      </div>
    </div>
  );
};

export default App;
