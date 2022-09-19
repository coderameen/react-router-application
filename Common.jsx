import React from 'react'
import web from "./images/codeboy.svg";
const Common = (props) => {
  return (
  <>
   <div className="container">
    <div className="row">
      <div className="col-10 mx-auto">

     <div className="row mt-5">
      <div className="col-9">
        <div className="my-2">
         UpSkill your Proffessional growth, Coderameen
        </div>
        <div className="mb-sm-9 col-12">
          This is an sample {props.myname} page!!
        </div>
        <div className="">
          <div className="btn btn-outline-info">{props.btnname}</div>
        </div>
      </div>
      <div className="col-sm-3 col-12">
        <img src={props.imgsrc} alt="svg image!!" className="img-fluid"/>
      </div>
     </div>

      </div>
    </div>
  </div>
  </>
  )
}

export default Common;