import React from "react";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import "./style.css"

export default function App(){

    const [darkMode,setDarkMode] = React.useState(false)

    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode);
    }


    return(
        <div className="container">
            <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
            <Main darkMode={darkMode}/>
        </div>
    )
}