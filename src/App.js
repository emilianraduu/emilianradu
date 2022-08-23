import React from 'react';
import './App.css';
import Lottie from 'react-lottie';
import * as animationData from './assets/working.json'
 
function App() {
  return (
    <div className="App">
          <Lottie
              height={400}
              width={400}
             loop={true}/>
    </div>
  );
}

export default App;
