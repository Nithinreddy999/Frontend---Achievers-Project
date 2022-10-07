import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from './Home';
import React from 'react'; 
import Aboutus from './Aboutus';
import Contactus from './Contactus';
import { BrowserRouter } from 'react-router-dom';
import Background from './Background';
import FirstPage from './FirstPage';
import Payment from './Payment';

class App extends React.Component {
  constructor(props){
      super(props)
  }
render()
  {
      return(
   
        <BrowserRouter>
    <Routes >
         <Route index path="/" element={<Home  />}/>
         <Route path="/home" element={<Home  />} />
                <Route path="/login" element={<Login  />} />
                <Route path="/register" element={<Register />} />
                <Route path="/aboutus" element={<Aboutus/>} />
                <Route path="/contactus" element={<Contactus/>} />
                <Route path="/firstpage" element={<FirstPage/>} />
                <Route path="/payment" element={<Payment/>} />

      </Routes>
      </BrowserRouter>

     );
    }
}
export default App;
