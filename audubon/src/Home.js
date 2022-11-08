import React from "react";
import birds from './Data'
import { Link } from "react-router-dom";




const Home = () => {
    let allData = birds.map ((section, index) => {
       console.log(section.image)
       
        return (
            <div key = {index} >
               
               <div className="pictures">
                <Link to={"/showpage/" + index  } ><img alt ="birdpictures" src= {section.image}/> </Link>
            </div>
            </div>
        )
    })
    
    return <div>{allData}</div>
}

export default Home;
