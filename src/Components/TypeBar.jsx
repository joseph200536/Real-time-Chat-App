import { useEffect, useState } from 'react'
import styles from '../Styles/chat.module.css'
import socket from '../socket';
export default function TypeBar() {
    const [input,setInput] = useState('');
    const [frd,setFrd] = useState('');
    useEffect(() => {
        // Set up the event listener for 'frdNamefromserver'
        const handleFrdName = (frdName) => {
            setFrd(frdName);
        };

        socket.on('frdNamefromserver', handleFrdName);
        
        
        // Clean up the event listener when the component unmounts
        return () => {
            socket.off('frdNamefromserver', handleFrdName);
        };
    }, []); 
    const reload = ()=>{
        socket.emit('user',sessionStorage.getItem('userName'));
    }
    const handlekeydown = (event)=>{
        if(event.key == 'Enter'){
            event.preventDefault();
            setInput('');
            console.log(frd);
            console.log('Socket connected:', socket.connected);
            socket.emit('privatemsg',input,frd);
        }
    }
    const handlekeydown2 = (event)=>{
            event.preventDefault();
            setInput('');
            console.log(frd);
            console.log('Socket connected:', socket.connected);
            socket.emit('privatemsg',input,frd);
    }
    return(
        <div>
            <div className={styles.bar} >
                <button><img src="../src/asset/images/link 1.png" alt="" /></button>
                <input type="text" value={input}  placeholder='Type Here' onClick={reload}
                onChange={(e)=>setInput(e.target.value)} onKeyDown={handlekeydown}/>
                <button onClick={handlekeydown2}><img  id={styles.barimg} src="../src/asset/images/send 2.png" alt="" /></button>
            </div>
            <script src="/socket.io/socket.io.js"></script>
        </div>
    )
}