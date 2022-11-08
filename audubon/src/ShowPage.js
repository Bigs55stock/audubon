import React from "react";
import birds from "./Data";
import { useParams } from "react-router-dom";


function Showpage () {
    
    const {index} =useParams();
    console.log(index)

    return (
        <div>
            <h1>{birds[index].name}</h1>
            <h3>{birds[index].genus}</h3>
            <h4>Conservation Status:  {birds[index].conservationStatus}</h4>
            <img src= {birds[index].image}/> 
           <div className="Link">
               <form action = {birds[index].homepage}>
               <input className="button" type ="submit" value="Read more" />
               </form> 
            </div> 
        </div>
    )
}


export default Showpage