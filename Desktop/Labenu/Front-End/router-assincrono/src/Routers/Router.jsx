import { AboutPage } from "../Components/AboutPage"
import { ErrorPage } from "../Components/ErrorPage"
import { HomePage } from "../Components/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="about/:language" element={<AboutPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}


