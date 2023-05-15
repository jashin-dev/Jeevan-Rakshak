import React, { useContext, useEffect, useState } from "react";
import "./Chat.css";
import {Link, useLocation } from "react-router-dom";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { AppContext } from "./Context/AppContext";
const Chat = () => {
  const location=useLocation();
  const [username, setUsername] = useState(location?.state?.name);
  const state = useContext(AppContext) ; 
  const [user , setUser] = state.userApi.user;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      
    }
  }, [user]);
   

  useEffect(()=>{
     console.log("checking from chat" , user);
  },[user])
  function createDirectChat(creds) {
    console.log("checking creds " , creds);
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }
  console.log( location.state)

  function renderChatForm(creds) {
	console.log(creds);
    return (  
      <div>
        <div>
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={createDirectChat(creds)}>Create</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <ChatEngine
        height="100vh"
        userName={firstName + " " + lastName}
        userSecret="secret-123-jBj02"
        projectID="75218d99-ca1d-44d9-90dc-7eaf8a5d512c"
        renderNewChatForm={(creds) => renderChatForm(creds)}
      />
      <Footer />
    </div>
  );
};

export default Chat;
