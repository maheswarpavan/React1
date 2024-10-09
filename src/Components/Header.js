import React from "react";
import '../styles.css';


export default function Header(){
    return(
        <header className="header">
            <img className="header-img" src="logo.png" alt="moviedux.png"></img>
            <h2 className="app-subtitle">Its time to learn new stuff!!</h2>
        </header>
    );
}

