import React from "react"
import Footer from "./Footer";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import cards from "./cards.png";

function Payment(){

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

    const navigate=useNavigate();


    const PlaceOrder=()=>{

        alert("order placed succesfully");
        navigate("/home")
    }
return(
    <div>
        <Header/>
       {getCookie("accessToken") ?  <div><h1>Enter Card details</h1>
             <img src={cards}/> <br></br>
            <input className='register-form-element'  placeholder="Card Name" required type='text'></input> <br/>
            <input className='register-form-element'  placeholder="Card Number" required type='number'></input>  <br/>
            <input className='register-form-element'  placeholder="Cvv" required type='password'></input>  <br/>
            <button onClick={e => PlaceOrder(e)}>Submit</button></div> : <div><center><h1>Access Denied</h1></center></div>} <br/>

            <input type="checkbox" id="gold" name="Gold member"/>
            <label for="gold"> Gold Subscription (SMS notification of newly added data) - 199RS/ Year </label><br/>
            <input type="checkbox" id="diamond" name="Diamond member"/>
            <label for="diamond"> Diamond Subscription (SMS,Mail notification of newly added data) - 299RS/ Year</label><br/>
        <Footer/>
    </div>
)
} 

export default Payment;