import React from 'react';
import web from "./images/css1.jpg";
import {NavLink} from "react-router-dom";
import Card from "./Card";

const Services = () => {

  const cardData = [
   {
    title:"Web Application"
   },
   {
    title:"Ml App"
   },
   {
    title:"CCNA Block framework"
   },
   {
    title:"Deep learning App"
   },
   {
    title:"Django App"
   },
   {
    title:"BlockChain App"
   }
  ];
  return (
  <>
   <div className="container">
    <div className="row">
     <div className="col-10 mx-auto">
       


      <div className="row">
      {
        cardData.map((value )=>{
            return <Card mytitle={value.title} />
        })
      }

      </div>

     </div>
    </div>
   </div> 
   </>
  )
}

export default Services;