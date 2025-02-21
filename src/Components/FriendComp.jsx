import friends from "../asset/friends";
import styles from '../Styles/friends.module.css'
import {useNavigate} from 'react-router-dom'
export default function FriendComp() {
    const navigate = useNavigate();
    function handlefunction(name,img){
        navigate('/chat', { state:{name,img}});
    }
    return(
        <div className={styles.frd}>
            <h2>Friends!!</h2>
            <div className={styles.users}>

            {friends.map((friend) => (
                <button onClick={()=>{handlefunction(friend.name,friend.img)}}  key={friend.id}>
                    <img src={friend.img} alt="" />
                    <p>{friend.name}</p>
                </button>
            ))}
            </div>
        </div>
    )
}