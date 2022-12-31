import logo from './logo.svg';
import './App.css';
import UploadCsv from './Components/Upload';


function App() {
  return (
    <div className="App">
        <br/>
         <h2>Please Upload Your csv file here</h2>
          <br/>
         <UploadCsv/>
         <br/>
         
    </div>
  );
}

export default App;
