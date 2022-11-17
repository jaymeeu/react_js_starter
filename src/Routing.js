import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}