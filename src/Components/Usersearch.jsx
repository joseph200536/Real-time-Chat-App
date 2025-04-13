import styles from '../Styles/addfriends.module.css';
import { useNavigate } from 'react-router-dom';
import socket from '../socket';
import { useEffect, useState } from 'react';
export default function Usersearch() {
    const [name,setName] =useState("");
    useEffect(()=>{

        socket.on("findUser",(frdName)=>{
            socket.frdName = frdName;
            setName(frdName);
            console.log("name1",name);
        })
        return () => socket.off("findUser");
    });
    
    const navigate = useNavigate();
    function handlefunction(){
        socket.emit("search",name);
        navigate('/searchprofile'); 
    }
    return (
        name && <button onClick={handlefunction} className={styles.usersearch}>
            <img src={`http://localhost:3000/api/userimage/${name}`} alt="" />
            <p>{name}</p>
        </button>
    );
}