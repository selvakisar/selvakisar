import React, { useState } from 'react';

const AddTo=()=>{
    const [cart,setCart]=useState([])
    const [btnName, setBtnName] = useState("Add To Cart");
    const handleAddToCart=()=>{
      const newItem={
        id:1,
        name:'I',
        
      };
      setCart([...cart,newItem]);
      setBtnName("Remove");
    };
    return(
        <button onClick={handleAddToCart}>{btnName}</button>
    )
  }
  export default AddTo;