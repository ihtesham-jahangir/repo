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
      
        <h1> Some Git Commands: </h1>
        <h4><li> git clone "some link" </li></h4> <p> It is used to clone a repository. </p>
        <h4><li> git status </li></h4> <p> It is used to display the status of code. </p>
        <h4><li> git add "file name" </li></h4> <p> It is used to add  changes to the git staging area. </p>
        <h4><li> git add . </li></h4> <p> It is used when we want to stage all the files at once. </p>
        <h4><li> git commit -m "a message" </li></h4> <p> It is the record of change. </p>
        <h4><li> git push origin main </li></h4> <p> It is used to upload the local repository content to remote repository. </p>
        <h4><li> git pull origin main </li></h4> <p> It is used to fetch and download data from a remote repository.</p>
        <p>{Count}</p>
        <button type="button" class="btn btn-secondary" onClick={counter}>Click Me</button>
        <button type="button" class="btn btn-secondary" onClick={rest}>Reset</button>


    </div>
  );
}

export default App;
