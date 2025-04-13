import styles from '../Styles/friends.module.css'
import {useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios'
import socket from '../socket'
export default function GroupComp() {
    const navigate = useNavigate();
    function handlefunction(grpname,img){
        socket.emit('groupname',grpname);
        navigate('/groupchat',{state:{grpname,img}});
    }
    const userName = sessionStorage.getItem("userName"); 
    const [groups,setGroups] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:3000/api/groups/${userName}`)
        .then(response=>{
            setGroups(response.data);
        })
        .catch(error=>{
            console.error("Error fetching groups:",error);
        });
    },[userName]);
    function addusers(){
        navigate('/addgroup');
    }
    return(
        <div className={styles.frd}>
            <h2>Groups!!  <button onClick={addusers}>+</button></h2>
            <div className={styles.users}>
            {groups.length > 0 ? (
            groups.map((grp,index) => (
                <button  onClick={()=>{handlefunction(grp.groupName,`http://localhost:3000/api/userimage/${grp.groupName}`)}}  key={index}>
                    <img src={`http://localhost:3000/api/userimage/${grp.groupName}`} alt="" />
                    <p>{grp.groupName}</p>
                </button>
            ))):(
                <p>No groups found.</p>
            )}
            </div>
        </div>
    )
}