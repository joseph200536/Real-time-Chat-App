import styles from '../Styles/addfriends.module.css';
import { useNavigate } from 'react-router-dom';
export default function Usersearch() {
    const navigate = useNavigate();
    function handlefunction(){
        navigate('/searchprofile');
    }
    return (
        <button onClick={handlefunction} className={styles.usersearch}>
            <img src="../src/asset/images/image 1.png" alt="" />
            <p>@Jarad999</p>
        </button>
    );
}