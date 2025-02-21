import group from "../asset/groups";
import styles from '../Styles/friends.module.css'
import {useNavigate} from 'react-router-dom'
export default function GroupComp(name,img) {
    const navigate = useNavigate();
    function handlefunction(name,img){
        navigate('/groupchat',{state:{name,img}});
    }
    return(
        <div className={styles.frd}>
            <h2>Groups!!</h2>
            <div className={styles.users}>

            {group.map((grp) => (
                <button onClick={()=>{handlefunction(grp.name,grp.img)}}  key={grp.id}>
                    <img src={grp.img} alt="" />
                    <p>{grp.name}</p>
                </button>
            ))}
            </div>
        </div>
    )
}