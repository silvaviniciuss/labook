import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextInPortuguese } from "../Constants/TextPt";
import { TextInEn } from "../Constants/TextEn";
import { backPage, backHomePage } from "../Routers/Coordinator";

export const AboutPage = () => {
    const navigate = useNavigate()
    const params = useParams()

    console.log(params)

    return (
        <div>
            <h1>About Page</h1>

            {params.language === "PT-BR"
                ? <TextInPortuguese />
                : <TextInEn />}
            <button onClick={()=>backPage(navigate)}>Voltar</button>
            <button onClick={()=>backHomePage(navigate)}>Home</button>

        </div>
    )
}
