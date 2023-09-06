
import './App.css';

function App() {
  return (
    <div className="App">
      
        <h1> Some Git Commands: </h1>
        <h4><li> git clone "some link" </li></h4> <p> It is used to clone a repository. </p>
        <h4><li> git status </li></h4> <p> It is used to display the status of code. </p>
        <h4><li> git add "file name" </li></h4> <p> It is used to add  changes to the git staging area. </p>
        <h4><li> git add . </li></h4> <p> It is used when we want to stage all the files at once. </p>
        <h4><li> git commit -m "a message" </li></h4> <p> It is the record of change. </p>
        <h4><li> git push origin main </li></h4> <p> It is used to upload the local repository content to remote repository. </p>
    </div>
  );
}

export default App;
