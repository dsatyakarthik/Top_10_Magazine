import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Layout from './Layout';
import Billionaires from './Pages/Billionaires';
import Atheletes from './Pages/Atheletes';
import IndBill from './Pages/IndBill';
import Women from './Pages/Women';

function App() {
  return (
    <div className="App" class="">
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Main/>}/>
      <Route path='/billionaire' element={<Billionaires/>}/>
      <Route path='/atheletes' element={<Atheletes/>}/>
      <Route path='/indbill' element={<IndBill/>}/>  
      <Route path='/women' element={<Women/>}/> 
      </Route>
          
    </Routes>
    
      
    </div>
  );
}

export default App;
