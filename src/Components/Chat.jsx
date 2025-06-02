import {useLocation } from 'react-router-dom'
import styles from '../Styles/chat.module.css'
import Head from './Head'
import TypeBar from './TypeBar'
import socket from '../socket';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Chat() {
    const location = useLocation();
    const {name,img} = location.state || {};
    const [messages, setMessages] = useState([]);
    const userName = sessionStorage.getItem('userName');
    const frd = name;

    useEffect(() => {
        const handleReceivedMsg = (data) => {
            console.log('Received message:', data);
            setMessages((prevMessages) => [...prevMessages, data]);
        };
        const fetchMessage = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/api/messages',{
                    params:{
                        user1:userName,
                        user2:frd
                    },
                });
                if (Array.isArray(response.data)) {
                    setMessages(response.data);
                } else {
                    console.error('API response is not an array:', response.data);
                    setMessages([]); 
                }
            }catch(error){
                console.error('Error fetching messages:',error);
                setMessages([]);

            }
        }
        fetchMessage();
        socket.emit('user',sessionStorage.getItem('userName'));
        socket.on('receivedmsg', handleReceivedMsg);
        return () => {
            socket.off('receivedmsg', handleReceivedMsg);
        };
    }, [userName,frd]);
    
   
    
    return(
        <div className={styles.chat}>
            <Head name={name} img={img} />
            <div className={styles.messages }>
                {Array.isArray(messages) && messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.from}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <TypeBar/> 
        </div>
    )
}