// import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
// import React, { useState } from 'react';

// function App() {
//   const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
//   const toggleMode = ()=>{
//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = '#042743';
//     }
//     else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//     }
//   }
//   return (
//     <>
//     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
//     {/* <Navbar/> */}
//     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
//     <div className="container my-3">
//     <TextForm heading="Enter the text to analyze below" mode={mode}/>
//     </div>
//     </> 
//   );
// }
// export default App;

import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";

import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />} >
          <Route path='about' element={<About />} />
          <Route path='text' element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          <Route path='*' element={"Error - 404"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
