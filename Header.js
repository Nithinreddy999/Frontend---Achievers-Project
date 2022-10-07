import React from 'react';
import './App.css';
import Pagelogo1 from './Pagelogo1.png'
import Achievers1 from './Achievers1.png'
import { Outlet, Link } from "react-router-dom";

function Header() {
    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    const signoutHandler = () => {
        console.log("logout")
        console.log(window.location);
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/';
    }
    const username=sessionStorage.getItem("username");
    return (
        <div>
            {getCookie("accessToken") &&
            <nav class="navbar background">
            <ul class="nav-list">
                <div class="logo">
                    <img src={Pagelogo1} />
                </div>
                <div class="title">
                <li><a href="title"><h2> ACHIEVERS </h2> </a></li>
                </div>
                <li><a href="home"> HOME </a></li>
                <li><a href="aboutus">  ABOUTUS  </a></li>
                <li><a href="contactus"> CONTACT US </a></li>
                <li><a href="payment"> SUBSCRIPTION </a></li>
                <li><a href="home" onClick={signoutHandler}> LOGOUT </a></li> 
                <div className="username">
                <li> <label> Hi, {username}</label></li>
                </div>

            </ul>
        </nav>}

        {!(getCookie("accessToken")) &&
        <nav class="navbar background">
        <ul class="nav-list">
            <div class="logo">
                <img src={Pagelogo1} />
            </div>
            <div class="title">
            <li><a href="title"><h2> ACHIEVERS </h2> </a></li>
            </div>
            <li><a href="home"> HOME </a></li>
            <li><a href="aboutus">  ABOUTUS  </a></li>
            <li><a href="contactus"> CONTACT US </a></li>
            <li><a href="register">  REGISTER </a></li>
            <li><a href='login'> LOGIN </a></li> 
            </ul>
        
    </nav>}
        </div>
    )
}
  
export default Header