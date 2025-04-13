import Chat from "../Components/Chat.jsx";
import FriendComp from "../Components/FriendComp";
import Menu from "../Components/Menu";
import styles from "../Styles/chat.module.css";
import { bgImg } from '../asset/bg.js';
import { useEffect } from "react";
import socket from "../socket.js";
export default function FriendsChat() {
    useEffect(()=>{
        socket.emit('user',sessionStorage.getItem('userName'));
    },[]);
    return(
        <div>
            <div className={styles.bg} style={{ backgroundImage: `url(${bgImg})` }}>
            <div className={styles.bg2}>
                <Menu />
                <FriendComp />
                <Chat />
            </div>
        </div>
        </div>
    );
}