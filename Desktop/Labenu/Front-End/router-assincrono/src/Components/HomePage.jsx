import React from "react";
import { useNavigate } from "react-router-dom";
import { aboutPage } from "../Routers/Coordinator";

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Home Page</h1>
            <img src="https://t4.ftcdn.net/jpg/01/87/04/55/360_F_187045571_1GPYu7GFoJzKuljKRaeowV20vskm3Hzv.jpg"/>
            <button onClick={() => aboutPage(navigate,"PT-BR")}>PT-BR</button>
            <button onClick={()=> aboutPage(navigate,"EN")}>EN</button>
        </div>
    )
}
