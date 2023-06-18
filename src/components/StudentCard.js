// import {useState} from "react"

// export function StudentCard({name, price, rating, acceptCount, setAcceptCount}){
//     const [show, setShow] = useState(true)
  
//     function handleAccept(){
//       setShow(!show)
//       setAcceptCount(acceptCount+1)
//     }
  
//     function handleReject(){
//       setShow(!show)
//       setAcceptCount(acceptCount-1)
  
//     }
//     return (
//       <div className='student-card'>
//         <img 
//         src="https://southernword.org/wp-content/uploads/2018/01/placeholder-450x300.png"
//          alt="name"/>
//         <b><h1>{name}</h1></b>
//         <p>{price}</p>
//         <p>{rating}</p>
  
//       {
//       show ?   <button 
//         className='accept-btn btn'
//         onClick={handleAccept}
//         >Accept</button> 
//         :    
//         <button 
//         className='reject-btn btn'
//         onClick={handleReject}
//         >Reject</button>
//       }
  
  
//       </div>
//     );
//   }
  

// export default StudentCard;

