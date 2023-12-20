import { Routes, Route } from "react-router-dom"
import { useState, useEffect} from "react"
import Plant from "../../pages/Plants/index"
import Show from "../../pages/Show/index"

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Plant />} />
                <Route path="/plant/:id" element={<Show />} />
            </Routes>
        </main>
    );
};

export default Main;