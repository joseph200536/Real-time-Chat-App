import styles from '../Styles/profile.module.css';
export default function ProfileComp() {
    return(
        <div className={styles.searchprof}>
        <div className={styles.bio}>
                        <div className={styles.img}>
                            <img src="../src/asset/images/image 1.png" alt="" />
                            <p>Jarad<button className={styles.edit}><img src="../src/asset/images/edit.png" alt="" /></button></p>
                            
                        </div>
                        <p className={styles.username}>Jarad999</p>
                        <p className={styles.ab}>About Jarad</p>
                        <p className={styles.about}>Hi My name is Jarad and i like to freestyle <button className={styles.edit}><img src="../src/asset/images/edit.png" alt="" /></button></p>
                   </div>
                   </div>
    )
}