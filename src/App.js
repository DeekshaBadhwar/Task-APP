
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './componets/Navbar';
import Customers from './componets/customers/customers';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navbar />}/>
         
           <Route path="/customer" element={<Customers />} />
     
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
