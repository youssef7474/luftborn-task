import React from "react";
import { BsThreeDots } from "react-icons/bs";
import "./Card.scss"
const Card = ({data}) => {
  const colorsData=["#FF8B64","#55C2E6","#FF5E7D","#7335D2","#F1C75B","#4BCF82"]
  function getRandomNumber() {
    const randomDecimal = Math.random();
  
    const randomNumber = Math.floor(randomDecimal * 6);
  
    return randomNumber;
  }

  console.log(data)

  return (
    <div className="card" >
      <div className="UpperPart" style={{backgroundColor: colorsData[getRandomNumber()] }} ></div>
      <div className="lower-Part-Contanier">

      <div>
        <div>
            <div className="Title-Contanier">
                <p className="title-text">{data?.category}</p>
                <BsThreeDots style={{color:"#D8D8D8"}} size={20}/>
            </div>
        </div>
        <div className="dic-contaniner">
            <div className="mobile">
                <div className="price">{data?.price}</div>
                <div className="description">{data?.title}</div>
            </div>
            <div>
                <div className="instore">InStore</div>
                <div className="instore">{data?.rating.count}</div>
            </div>
        </div>
      </div>
       
      </div>
    </div>
  );
};

export default Card;
