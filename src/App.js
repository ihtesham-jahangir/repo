import {useState} from 'react'
import './App.css';

function App() {
  const[Count,SetCount] = useState(0);
  let counter=()=>{
    SetCount(Count+1);
  }
  let rest=()=>{
    SetCount(0)
  }
  return (
 
    <div className="App">
      <header className='App-header'> 
        <h1> Hi! This is Ihtesham Jahanghir </h1>
        <p> and I'm working on git. </p>
        <div className="container">
          <p>{Count}</p>
        <button type="button" onClick={counter} className="btn btn-primary btn-lg" > Counter </button>
        <button type="button" onClick={rest} className="btn btn-primary btn-lg" > Rest </button>
        </div>
      </header>
      
       </div>
  );
}

export default App;
