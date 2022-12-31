import './App.css';
import { ShowTable } from './Components/Table';
import { CsvReader } from './CsvReader/ReaderCsv';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
           <Route path='/'  element={<ShowTable/>}/>
            <Route path='/csv'  element={<CsvReader/>}/>
         </Routes>
    </div>
  );
}

export default App;
