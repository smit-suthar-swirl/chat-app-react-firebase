// ChatRoom.js
import React, { useState, useRef } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { auth, firestore } from "./firebaseConfig";
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
function ChatRoom() {
    const messagesRef = collection(firestore, 'messages');
    // Create a query with ordering and limiting
    const q = query(messagesRef, orderBy('createdAt'), limit(25));

    // Execute the query and retrieve the documents
    getDocs(q)
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);
            });
        })
        .catch((error) => {
            console.error('Error getting documents: ', error);
        });
    // const messagesRef = collection(firestore, 'messages');
    // console.log("firestore => ", messagesRef);
    // const query = messagesRef.orderBy("createdAt").limit(25);
    // const messagesRef = firestore.collection("messages");
    // const query = messagesRef.orderBy("createdAt").limit(25);

    // const [messages] = useCollectionData(query, { idField: "id" });
    // const [newMessage, setNewMessage] = useState("");

    // const sendMessage = async () => {
    //     if (newMessage.trim() !== "") {
    //         await messagesRef.add({
    //             text: newMessage,
    //             createdAt: new Date(),
    //             uid: auth.currentUser.uid,
    //         });
    //         setNewMessage("");
    //     }
    // };

    return (
        <>
            {/* <div>
                {messages &&
                    messages.map((message) => (
                        <ChatMessage key={message.id} message={message} />
                    ))}
            </div>
            <input
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button> */}
        </>
    );
}

function ChatMessage({ message }) {
    return <p>{message.text}</p>;
}

export default ChatRoom;
