import React, {useEffect, useState} from "react";
import {Messages} from "./Messages";
import {NewMessage} from "./NewMessage";
import './App.css';

import firebase, {Timestamp, USER} from "./firebase";


const App = () => {
    const [messages, setMessages] = useState<any[]>([]);

    useEffect(() => {

        firebase.collection('messages').orderBy('createdAt').onSnapshot((docSnap:any) => {
            docSnap.docChanges().forEach((result:any) => {
                    if (result.type === 'added') {
                        setMessages(prev => [...prev, result.doc.data()])
                    }
                }
            )
        });

    }, []);

    const addNewMessage = (message: string) => {
        firebase.collection('messages').add({
            username: USER,
            message: message,
            createdAt: Timestamp.fromDate(new Date())
        })
    };

    return (
        <div>
            <div id="container">
                <div id="messages">
                    <Messages messages={messages}/>
                </div>
                <div id="input">
                    <NewMessage addMessage={addNewMessage}/>
                </div>
            </div>
        </div>
    );
};

export default App;
