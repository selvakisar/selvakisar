
import './App.css';
import React, { useState } from 'react';








function App() {


const [acceptCount, setAcceptCount] = useState(0)
  const studentsData = [
    {
      name:"Fancy Product",
      price:"$40.00-$80.00",
      
    },
    {
      name:"Special item",
      price2:"$20.00",
      price:"$18.00",
      
      
      
    },
    

    {
      name:"Sale Item",
      price2:"$50.00",
      price:"$25.00",
      
      rating:"",
      
    },
    {
      name:"Popular item",
      rating:"",
      price:"$40.00",
      
      
    },
    {
      name:"Sale Item",
      price2:"$50.00",
      price:"$25.00",
      
      rating:"",
      
    },
    {
      name:"Fancy Product",
      price:"$120.00-$280.00",

      rating:"",
      
    },
    {
      name:"Special item",
      price2:"$20.00",
      price:"$18.00",
      
      rating:"",
      Ratings:"",
      
    },
    {
      name:"Popular item",
      rating:"",
      price:"$40.00",
      
      
    },
   
  
  ]
  return (



    
    
<div className="App">
<div className="cc">

  <div className="navbar bg-neutral text-neutral-content flex">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Shop now</a>
    </div>
    <div>
    <button class="btn btn-outline-dark" type="submit">
    <i class="bi-cart-fill me-1"></i>
                           
                            Cart<img class="badge bg-dark text-black ms-5 rounded-pill" src="https://img.uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/shopping-cart-icon.svg" alt="car"></img>
                            <span class="badge bg-dark text-black ms-1 rounded-pill">{acceptCount}</span>
                        </button>
      
    </div>
  </div>
  
  
  <header class="bg-black py-5 flex">
              <div class="container px-4 px-lg-5 my-5">
                  <div class="text-center text-white">
                      <h1 class="text-6xl font-bold">Shop in style</h1>
                      <p class="lead fw-normal text-white-50 mb-5 py-6">With this shop hompeage </p>
                  </div>
              </div>
  </header>
  
  
  
  </div>

<div className='card-block'>
  {studentsData.map((stud,idx)=>(
     <StudentCard
     key ={idx}
     name={stud.name}
     {...<h2>       </h2>}
     {...<h2>       </h2>}
     {...<h2>       </h2>}
      
     rating={stud.rating}
     Ratings={stud.Ratings}
     price2={stud.price2}
     price={stud.price}
     acceptCount={acceptCount}
     setAcceptCount={setAcceptCount}
     />
    
    
    

  ))}
</div>
</div>
  );
}


export default App;

function StudentCard({name, price,price2 ,education, rating,Ratings,acceptCount, setAcceptCount}){
  const [show, setShow] = useState(true)

  function handleAccept(){
    setShow(!show)
    setAcceptCount(acceptCount+1)
  }

  function handleReject(){
    setShow(!show)
    setAcceptCount(acceptCount-1)

  }
  return (
    <div className='student-card'>
      <img 
      src="https://southernword.org/wp-content/uploads/2018/01/placeholder-450x300.png"
       alt="name"/>
      <h1><strong>{name}</strong></h1>
      <h2><strike>{price2}</strike></h2> <span><h2>{price}</h2></span>
     
      
      <p>{rating}</p>
      <p>{Ratings=
      <div>
        <div className="rating rating-xs">
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
</div>
      </div>
      }</p>
      <p>{education}</p>

    {
    show ?   <button 
      className='accept-btn btn'
      onClick={handleAccept}
      >Add To Cart</button> 
      :    
      <button 
      className='reject-btn btn'
      onClick={handleReject}
      >Remove  From Cart</button>
    }


    </div>
  )
}  




