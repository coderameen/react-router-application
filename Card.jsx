import React from 'react';
import web from "./images/css1.jpg";
import {NavLink} from "react-router-dom";

const Card = (props) => {
  return (
  <>
  
        <div className="col-4">

        <div className="card" >
  <img src={web} className="card-img-top img-fluid" alt="image card"/>
  <div className="card-body">
    <h5 className="card-title">{props.mytitle}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
        </div>


   </>
  )
}

export default Card;