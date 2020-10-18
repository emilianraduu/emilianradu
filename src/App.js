import React from 'react';
import './App.css';
import {ParallaxProvider} from "react-scroll-parallax";
import {Main} from "./components/Main";

function App() {
  return (
    <div className="App">
        <ParallaxProvider>
            <Main/>
        </ParallaxProvider>
    </div>
  );
}

export default App;
