import styles from '../Styles/addfriends.module.css';
import socket from '../socket';
import { useEffect, useState } from 'react';
export default function SearchprofComp() {
    const loggedUser = sessionStorage.getItem("userName");
    const [user,setUser] = useState("");
    const [name,setName] = useState("");
    const [about,setAbout] = useState("");
    const [profilepath,setProfilepath] = useState('');
    useEffect(()=>{
        const handleadd = (user,name,about,prof)=>{
            setUser(user);
            setName(name);
            setAbout(about);
            setProfilepath(prof);
        }
        socket.on("searchFinal",handleadd);
        return ()=>socket.off("searchFinal");
    })
    const handleaddFriend =()=>{
        if(socket.emit("addfrdbutton",user,loggedUser)){
            alert("Frd added")
        };
        
    }
    return (
       user && <div className={styles.searchprof}>
           <div className={styles.bio}>
                <div className={styles.img}>
                    <img src={`http://localhost:3000/api/userimage/${user}`} alt="" />
                    <p>{name}</p>
                </div>
                <p className={styles.username}>{user}</p>
                <p className={styles.ab}>About {name}</p>
                <p className={styles.about}>{about}</p>
           </div>
           <div className={styles.buttons}>
                <form action="">
                    <button onClick={handleaddFriend}>
                        <img src="../src/asset/images/plus -white.png" alt="" />
                        <p>Add Friend</p>
                    </button>
                    <button>
                        <img src="../src/asset/images/cmt-white.png" alt="" />
                        <p>Message</p>
                    </button>
                </form>
           </div>
        </div>
    );
}