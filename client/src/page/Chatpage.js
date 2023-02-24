import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const Chatpage = () => {
    const[chat,setChat]=useState([]);
    const fecthchats= async()=>{
        const {data} = await axios.get("http://localhost:5000/api/chats");
        setChat(data);
    }
    useEffect(() => {
      fecthchats();
    },[]);
    
  return(
     <div>{chat.map((e)=>( <div key={e._id}>{e.chatName}</div>))}</div>
  );
  
}

export default Chatpage