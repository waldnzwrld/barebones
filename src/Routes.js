import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export default () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
        </BrowserRouter>
    );
}
