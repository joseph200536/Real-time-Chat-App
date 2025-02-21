import styles from '../Styles/addfriends.module.css';
export default function SearchprofComp() {
    return (
        <div className={styles.searchprof}>
           <div className={styles.bio}>
                <div className={styles.img}>
                    <img src="../src/asset/images/image 1.png" alt="" />
                    <p>Jarad</p>
                </div>
                <p className={styles.username}>Jarad999</p>
                <p className={styles.ab}>About Jarad</p>
                <p className={styles.about}>Hi My name is Jarad and i like to freestyle</p>
           </div>
           <div className={styles.buttons}>
                <form action="">
                    <button>
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