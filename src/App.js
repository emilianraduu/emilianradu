import React from 'react';
import './App.css';
import Home from "./pages/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Projects from "./pages/projects/Projects";
import Super12 from "./pages/projects/super12/Super12";
import Bachelors from "./pages/projects/bachelors/Bachelors";
import Intern from "./pages/projects/intern/Intern";
import Links from "./pages/links/Links";
import Contact from "./pages/contact/Contact";

function App() {
    return (
        <div className={'main'}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="projects" element={<Projects/>}/>
                    <Route path="links" element={<Links/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="projects/super12" element={<Super12/>}/>
                    <Route path="projects/bachelors" element={<Bachelors/>}/>
                    <Route path="projects/intern" element={<Intern/>}/>
                    <Route path="*" element={<>NO RESULT</>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
