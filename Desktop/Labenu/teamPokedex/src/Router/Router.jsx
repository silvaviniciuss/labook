import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MainPage } from "../pages/MainPage/MainPage"

export const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<MainPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}
