import React from 'react'
import './Message.css';
function Message({message,username}) {
    const isUSer=username===message.username;
    return (
        <div className={isUSer?"messageUser":"messageGuest"}>
            <h2>{!isUSer&&`${message.username||"Unkown user"}: `}{message.text}</h2>
        </div>
    )
}

export default Message
