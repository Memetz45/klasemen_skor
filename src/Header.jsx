import React from "react";
import './Header.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import InputDataKlub from "./InputDataKlub";
import InputSkor from "./InputSkor";
import ViewKlasemen from "./ViewKlasemen";

const Header = () => {
    return (
        <Router>
            <nav className="navbar">
                <ul>
                    <li><Link to="/input-data">Input Data</Link></li>
                    <li><Link to="/input-skor">Input Skor</Link></li>
                    <li><Link to="/view-klasemen">View Klasemen</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route exact path="/" element={<InputDataKlub />}></Route>
                <Route exact path="/input-data" element={<InputDataKlub />}></Route>
                <Route path="/input-skor" element={<InputSkor />}></Route>
                <Route path="/view-klasemen" element={<ViewKlasemen />}></Route>
            </Routes>
        </Router>
    )
}


export default Header;