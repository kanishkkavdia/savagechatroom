import React,{useState,useEffect} from 'react';
import { Button,FormControl,InputLabel,Input} from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [input,setInput]=useState("");
  const [messages,setMessages]=useState([]); //{username:"steve",text:"Hello"}
  const [username,setUsername]=useState("");
  
  useEffect(() => {
    db.collection('messages')
    .orderBy("timestamp","asc")
    .onSnapshot(snapshot=>{
      setMessages(snapshot.docs.map(doc=>doc.data()));
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Enter username: "));
  }, [])


  console.log(input);
  console.log(messages);

  const sendMessage=(event)=>{
    event.preventDefault();
    db.collection('messages').add({
      text:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages,{username:username,text:input}]);//append messages
    setInput("");
  }
  return (
    <div className="App">
      <h1>Welcome {username}</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Enter a message</InputLabel>
        <Input value={input} onChange={event=>setInput(event.target.value)}/>
        <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
      </FormControl>
      {
        messages.map(message=>(
          <Message username={username} message={message} />
        
        ))
      }
    </div>
  );
}
export default App;
