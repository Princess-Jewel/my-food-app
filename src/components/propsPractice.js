import React from 'react'
import '../App.css';

function FirstPractice(props){
    return(
        <div>
        <div className="details">
          <img src = {props.contact.imgurl} alt="rice_image" ></img>
          <h1>{props.contact.name}</h1>
          <p className='category'>{props.contact.category}</p>
          <p className='description'>{props.contact.description}</p>

        </div>
        </div>
    )
}
export default FirstPractice;