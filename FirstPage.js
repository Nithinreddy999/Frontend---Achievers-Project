import React, { useState ,useEffect} from 'react';
import './FirstPage.css';
import Header from './Header';
import Footer from './Footer';

function FirstPage() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/auth/person_list")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('called get items')
          console.log(result)
          setItems(result);
        },

        (error) => {
          setError(error);
        }
      )
  }, [])
  return (
    <div >
        <Header/>

      {/* <h1>Here's Your Achiever's List</h1>
       <ul>          
        {items && items.map(item => (
           
          <div key={item.id}>
             <h3> {item.id} .  {item.name} {item.award} {item.year} {item.category}</h3>  
          </div>
       
        ))}
      </ul> */}
      <div className="row">
          <div className="all-products-contain">
            {items &&
              items.map((item) => (
                <div key={item.id}>
                  <div className="product-container">
                    <div className="product-image-container">
                      <img
                        src={item.img}
                        width="150px"
                        height="150px"
                        className="img-fluid"
                        alt="Sample"
                      />
                    </div>
                    <div className="product-details-container">
                      <h3> {item.name} </h3>
                      <h4> {item.award}</h4>
                      <h4> {item.year}</h4>
                      <h4> {item.category}</h4>
                    </div>

                    
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default FirstPage;