import React, { useEffect, useState } from 'react'
import axios from "axios"


const Chatpage = () => {
    const [first, setfirst] = useState("HOmePaAge")

//     const fetchChats=async()=>{
// const {data}=await axios.get('http://localhost:5000/api/chats');
//         console.log(data);
//         // setfirst(data);
//     };



    

    // useEffect(() => {
        

    //     fetchChats();

        
    // }, []);

    
    
  return (
    
    <div>{first}</div>
  )
} 

export default Chatpage