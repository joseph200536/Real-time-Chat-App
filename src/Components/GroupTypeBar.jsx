import { useEffect, useState } from 'react'
import styles from '../Styles/chat.module.css'
import socket from '../socket';
export default function GroupTypeBar() {
    const [input,setInput] = useState('');
    const [frds,setFrds] = useState([]);
    const [groupName,setGroupName] = useState('');
    useEffect(() => {
        const handleFrdsName = (frdsName) => {
            setFrds(frdsName);
        };
        socket.on('grpnameformsg',(group)=>{
            setGroupName(group.groupName);
        })
        socket.on('groupmembers', handleFrdsName);
        return () => {
            socket.off('groupsmembers', handleFrdsName);
        };
    }, []); 
    const reload = ()=>{
        socket.emit('user',sessionStorage.getItem('userName'));
    }
    const handlekeydown = (event)=>{
        if(event.key == 'Enter'){
            event.preventDefault();
            setInput('');
            console.log(frds);
            console.log('Socket connected:', socket.connected);
            socket.emit('groupmsg',input,frds,groupName);
        }
    }
    const handlekeydown2 = (event)=>{
            event.preventDefault();
            setInput('');
            console.log(frds);
            console.log('Socket connected:', socket.connected);
            socket.emit('groupmsg',input,frds,groupName);
    }
    return(
        <div>
            <div className={styles.bar} >
                <input type="text" value={input}  placeholder='Type Here' onClick={reload}
                onChange={(e)=>setInput(e.target.value)} onKeyDown={handlekeydown}/>
                <button onClick={handlekeydown2} ><img id={styles.barimg} src="../src/asset/images/send 2.png" alt="" /></button>
            </div>
            <script src="/socket.io/socket.io.js"></script>
        </div>
    )
}