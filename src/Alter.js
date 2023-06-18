import Button from '../src/Button'


function App() {

  return (   
    <div className="cc">
     <Head/>
     <div className="card">
     <Items/>
      <I/>
      <M/>
      <J/>
      <M/>

      <It/>
      <I/>
      <J/>
  <Button/>
     </div>
    
    </div>
    

  );
}
export default App;

function Head(){
  return (
  
  <div className="cc">

  <div className="navbar bg-neutral text-neutral-content flex">
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">Shop now</a>
    </div>
    <div>
    <button class="btn btn-outline-dark" type="submit">
    <i class="bi-cart-fill me-1"></i>
                           
                            Cart
                            <span class="badge bg-dark text-black ms-1 rounded-pill">0</span>
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
  );
  }
 
  function Items(){
    return (
      <div className="card w-96 bg-base-80 shadow-xl ">
      <figure><img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" alt="Shoes" /></figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"><b>FancyProduct</b></h2>
        <h2>             </h2>
        <h2>             </h2>
        <h3>             </h3>

        <p>$40.00 - 80.00</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline">View options</button>
        </div>
      </div>
    </div>

);
}

function I(){
  return (
    <div className="card w-96 bg-base-80 shadow-xl ">
  <figure><img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" alt="Shoes" /></figure>
 
  <div className="card-body items-center text-center">

    <h2 className="card-title"><b>Special Item</b></h2>
    <div className="rating rating-xs">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
</div>
<h2>                           </h2>
    <p><strike>$20.00</strike>  $18.00</p>
    <div className="card-actions justify-end">
      <button className="btn btn-outline">Add to cart</button>
    </div>
  </div>
</div>
    );
  }



  function M(){
    return (
      <div className="card w-96 bg-base-80 shadow-xl ">
    <figure><img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" alt="Shoes" /></figure>
   
    <div className="card-body items-center text-center">
  
      <h2 className="card-title"><b>Sale Item</b></h2>
    
      <h2>             </h2>
        <h2>             </h2>
        <h3>             </h3>

      <p><strike>$50.00</strike> 25.00</p>
      <div className="card-actions justify-end">
        <button className="btn btn-outline"><p>Add to cart</p></button>
      </div>
    </div>
  </div>
      );
    }


  function J(){
    return (
      <div className="card w-96 bg-base-80 shadow-xl ">
    <figure><img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" alt="Shoes" /></figure>
   
    <div className="card-body items-center text-center">
  
      <h2 className="card-title"><b>Popular Item</b></h2>
      <div className="rating rating-xs">
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"checked />
  </div>
 


      <p>40.00</p>
      <div className="card-actions justify-end">
        <button className="btn btn-outline"><p>Add to cart</p></button>
      </div>
    </div>
  </div>
      );
    }



    function It(){
      return (
        <div className="card w-96 bg-base-80 shadow-xl ">
        <figure><img src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" alt="Shoes" /></figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"><b>FancyProduct</b></h2>
          <h2>             </h2>
          <h2>             </h2>
          <h3>             </h3>
  
          <p>$120.00 - 280.00</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline">View options</button>
          </div>
        </div>
      </div>
  
  );
  }


 







