import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

export default function Router() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
        </Routes>
        </BrowserRouter>
    );
}
