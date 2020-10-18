import React from 'react';
import './App.css';
import {ParallaxProvider} from "react-scroll-parallax";

function App() {
  return (
    <div className="App">
        <ParallaxProvider>
            <div>hello</div>
        </ParallaxProvider>
    </div>
  );
}

export default App;
