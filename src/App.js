import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Projects from "./pages/projects/Projects";

function App() {
    return (
        <div className={'main'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="projects/super12" element={<Footer/>}/>
                    <Route path="*" element={<>NO RESULT</>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
