import {useLocation } from 'react-router-dom'
import styles from '../Styles/chat.module.css'
import Head from './Head'
import TypeBar from './TypeBar'
import io from 'socket.io-client';
import { useEffect, useState } from "react";

const socket = io("http://localhost:3000");

export default function Chat() {
    const location = useLocation();
    const {name,img} = location.state || {};
    const [message,setMessage] = useState([]);
    const userId =localStorage.getItem("userId");

    useEffect(()=>{
        socket.emit("registerUser",userId)
    })
    return(
        <div className={styles.chat}>
            <Head name={name} img={img} />
            <TypeBar />
        </div>
    )
}