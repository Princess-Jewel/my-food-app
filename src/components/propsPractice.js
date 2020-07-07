  import React from 'react'

  function FirstPractice(props){
      const imgstyling ={
          height: "auto",
          weight: "150pt",
          borderRadius:"20px",
          maxWidth:"100%"
     }
      return(
          <div>
          <div className="details">
            <img src = {props.contact.imgurl} alt="" style= {imgstyling}></img>
            <h1>{props.contact.name}</h1>
            <p>{props.contact.category}</p>
            <p>{props.contact.description}</p>

          </div>
          </div>
      )
  }
  export default FirstPractice;