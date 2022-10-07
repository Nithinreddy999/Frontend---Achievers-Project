import React from 'react';
import './App.css';
import Pagelogo1 from './Pagelogo1.png'
import Achievers1 from './Achievers1.png';
import quotation from './quotation.jpg';
import Capture from './Capture.png';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


function Home() {
    return (
        <div>
            <Header/>
            {/* <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src={Pagelogo1} />
                    </div>
                    <div class="title">
                    <li><a href="#title"><h2> ACHIEVERS </h2> </a></li>
                    </div>
     

                   
                    <li><a href="#home"> HOME </a></li>
                    <li><a href="#aboutus"><Link to="/Aboutus">  ABOUTUS  </Link></a></li>
                    <li><a href="#contactus"><Link to="/Contactus"> CONTACT US </Link></a></li>
                    <li><a href="#register"><Link to="/Register">  REGISTER </Link> </a></li>
                    <li><a href='#login'><Link to="/Login"> LOGIN</Link> </a></li> 
                  
                </ul>
            </nav> */}
  
            <body class="bg">
            <img src={Capture}  width="1510px" height="700px"/>
            </body>

            <Footer/>
            {/* <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer> */}
        </div>
    )
}
  
export default Home