import { useEffect, useState } from 'react';
import styles from '../Styles/settings.module.css';
import socket from '../socket';
import { useNavigate } from 'react-router-dom';
export default function SettingsComp() {
    const userName = sessionStorage.getItem('userName');
    const [input,setInput] = useState('');
    const [changeUsername,setchangeUsername] = useState('');
    const handleEmail = ()=>{
        socket.emit('changeEmail',input);
        setInput('');
        console.log(input);
        
    }
    const handleUserName = ()=>{
        socket.emit('changeUsername',changeUsername);
        setchangeUsername('');
        console.log(changeUsername);
        
    }
    const navigate = useNavigate();
    const handleDelete =()=>{
        const final = prompt("Are you sure to delete,if yes press 1");
        if(final==="1"){
            console.log('clicked')
            socket.emit('deleteaccount',userName);
            navigate("/");
        }
    }
    useEffect(() => {
        const handleOutput = (val) => {
            console.log("Received:", val);
            setTimeout(() => alert(val), 100); // Slight delay to avoid blocking
        };
        socket.on('deleteaccountResponse',handleOutput);
        socket.on('changeEmailAnswer', handleOutput);
        socket.on('changeUsernameAnswer', handleOutput);
    
        return () => {
            socket.off('changeEmailAnswer', handleOutput);
            socket.off('changeUsernameAnswer', handleOutput);
            socket.off('deleteaccountResponse',handleOutput);
        };
    }, []);
    return(
        <div className={styles.outer}>
            <div className={styles.settings}>
                <div  className={styles.email}>
                    <p>Edit your Email</p>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{if(e.key==="Enter")handleEmail()}} type="text"/>
                </div>
                <div className={styles.email}>
                    <p>Edit your Username</p>
                    <input value={changeUsername} onChange={(e)=>setchangeUsername(e.target.value)} onKeyDown={(e)=>{if(e.key==="Enter")handleUserName()}} type="text" />
                </div>
            </div>
                <div className={styles.delete}>
                    <button onClick={handleDelete}>Delete Account</button>
                </div>
        </div>
    )
}