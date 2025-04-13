import { useState } from 'react';
import socket from '../socket';
import styles from '../Styles/addfriends.module.css';
export default function Search() {
    const [message,setMessage] = useState("");
    const handlesubmit = ()=>{
        socket.emit("addfrd",message);
    }
    return (
        <div>
            <div className={styles.search}>
                <input type="text" onChange={(e)=>setMessage(e.target.value)}  placeholder='Enter Username or Email'/>
                <img src="../src/asset/images/send 2.png" onClick={handlesubmit} alt="" />
            </div>
        </div>
    );
}