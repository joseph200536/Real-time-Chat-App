import {useLocation } from 'react-router-dom'
import styles from '../Styles/chat.module.css'
import Head from './Head'
import GroupTypeBar from './GroupTypeBar';
import socket from '../socket';
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function GroupChatComp() {
    const location = useLocation();
    const {grpname,img} = location.state || {};
    const [messages, setMessages] = useState([]);
    const userName = sessionStorage.getItem('userName');
    const [frds,setFrds] = useState([]);
    useEffect(() => {
        const handleFrdsName = (frdsName) => {
            setFrds(frdsName);
        };

        socket.on('groupmembers', handleFrdsName);
        return () => {
            socket.off('groupsmembers', handleFrdsName);
        };
    }, []); 
    useEffect(() => {
        const handleReceivedMsg = (data) => {
            console.log('Received message:', data);
            setMessages((prevMessages) => [...prevMessages, data]);
        };
        const fetchMessage = async()=>{
            try{
                const response = await axios.get('http://localhost:3000/api/groupmessages',{
                    params:{
                        user1:userName,
                        groupName:grpname
                    },
                });
                if (Array.isArray(response.data)) {
                    setMessages(response.data);
                } else {
                    console.error('API response is not an array:', response.data);
                    setMessages([]); // Set messages to an empty array as a fallback
                }
            }catch(error){
                console.error('Error fetching messages:',error);
                setMessages([]);

            }
        }
        fetchMessage();
        socket.emit('user',sessionStorage.getItem('userName'));
        socket.on('grpmsgoutput', handleReceivedMsg);
        return () => {
            socket.off('grpmsgoutput', handleReceivedMsg);
        };
    }, [userName,frds]);
    
   
    
    return(
        <div className={styles.chat}>
            <Head name={grpname} img={img} />
            <div className={styles.messages}>
                {Array.isArray(messages) && messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.from}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <GroupTypeBar/>
        </div>
    )
}