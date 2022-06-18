import React from "react"
import personImage from "../images/laura.png"

export default function ExampleCard(){
    return(
        <div className="personCard">
            <img src={personImage}></img>
            <h2>Laura Smith</h2>
            <h3>FrontEnd Developer</h3>
            <h4>Laura.website</h4>
            <div className="personButtons">
                <button>deneme</button>
                <button>deneme2</button>
            </div> 
            <h3>About</h3>
            <p>hede hödö</p>
            <h3>Interests</h3>
            <p>kedi ködö</p>
        </div>


    )
}