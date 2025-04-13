import styles from '../Styles/home.module.css'
import { useNavigate } from 'react-router-dom'
import { MenuComp } from '../Components/MenuComp.jsx'
import socket from '../socket';
export default function Menu(){
    const navigate = useNavigate();

    const userName= sessionStorage.getItem("userName") || "";
    
    const handlefunction = () => {
        console.log(userName);
        if (!userName) {
        alert("User not found! Please log in.");
        return;
    }
    socket.emit("details", userName);
    navigate('/profile');
    }
    function gohome(){
        navigate('/home')
    }
    return(
        <div className={styles.menu}>
                    <div className={styles.menu1}>
                        <h2 onClick={gohome}>CHAT APP</h2>
                        <div className={styles.divider}></div>
                        <MenuComp />
                    </div>
                    <div className={styles.menu2}>
                        <button onClick={handlefunction} className={styles.chat}>
                            <img src="../src/asset/images/user 1.png" alt="" />
                            <p>Profile</p>
                        </button>
                    </div>
                </div>
    )
}