import React from 'react';
import './App.css';
import Lottie from 'react-lottie';
import * as animationData from './assets/working.json'

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className="App">
      <Lottie options={defaultOptions}
        height={400}
        width={400}
        loop={true} />
    </div>
  );
}

export default App;
