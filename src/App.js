import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  let [data, setData]=useState()

  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://backendapi5.herokuapp.com")
    .then((data)=> data.json())
    .then((data)=>{
      console.log("+++++++")
      console.log(data)
      console.log("+++++++")
    })
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
