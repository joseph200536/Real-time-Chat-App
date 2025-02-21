import styles from '../Styles/chat.module.css'
export default function TypeBar() {
    return(
        <div>
            <div className={styles.bar}>
                <button><img src="../src/asset/images/link 1.png" alt="" /></button>
                <input type="text" placeholder='Type Here'/>
                <button><img id={styles.barimg} src="../src/asset/images/send 2.png" alt="" /></button>
            </div>
        </div>
    )
}