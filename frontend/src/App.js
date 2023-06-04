import './App.css';
import Location from './components/Location';
import Createlocation from './components/Createlocation';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div >
       <BrowserRouter>
           <Routes>
             <Route  path='/'element={<Location/>}></Route>  
             <Route  path='/add' element={<Createlocation/>}></Route>      
           </Routes>   


       </BrowserRouter>
      
      
    </div>
  );
}

export default App;
