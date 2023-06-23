import React, { Component, useState, useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import Resume from "./components/Resume";
import Right from "./components/Right";

const App = () => {

  const componentRef = useRef();

  const handlePrint = useReactToPrint({ content: () => componentRef.current });

    return (
      <div className="flex flex-col items-center" id="App">
        
        <Resume ref={componentRef}/>
        <Right 
          onPrint={handlePrint}
        />

      </div>
    );

}



export default App;
