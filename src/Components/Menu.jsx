import styles from '../Styles/home.module.css'
import { useNavigate } from 'react-router-dom'
import { MenuComp } from '../Components/MenuComp.jsx'
export default function Menu(){
    const navigate = useNavigate();
    const handlefunction = () => {
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