import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import styles from "../Styles/addgroup.module.css";
import axios from "axios"

export default function Addgroup() {
    const [friends, setFriends] = useState([]);
    const [friendsList, setFriendsList] = useState([]);
    const [preview, setPreview] = useState('../src/asset/images/image 1.png');
    const [profile, setProfile] = useState('');
    const userName = sessionStorage.getItem("userName");
    const navigate = useNavigate();

    useEffect(() => {
        if (userName) {
            axios.get(`http://localhost:3000/api/friends/${userName}`)
                .then(response => {
                    setFriends(response.data);
                })
                .catch(error => {
                    console.error("Error fetching friends:", error);
                })
        }
    }, [userName]);

    const handlecheckbox = (e) => {
        const selectedFriend = e.target.name;
        setFriendsList(prev =>
            e.target.checked ? [...prev, selectedFriend] : prev.filter(friend => friend !== selectedFriend)
        );
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfile(file);
            setPreview(URL.createObjectURL(file));
        }
    }

    const handleform = async (e) => {
        e.preventDefault();
        if (!profile) {
            alert("upload profile first");
            return;
        }

        const groupname = e.target.groupname.value;
        console.log(groupname);
        const friends = friendsList;
        friends.push(userName);
        console.log(friends);
        const formdata = new FormData();
        formdata.append('profilePic', profile);
        formdata.append('user', groupname);
        await fetch('http://localhost:3000/api/uploadProfilePic', {
            method: 'POST',
            body: formdata
        })
            .then(response => response.json());
        await axios.post(`http://localhost:3000/api/groups/add/${userName}`, {
            groupName: groupname,
            friends: friends
        })
            .then(response => {
                console.log(response.data);
                navigate('/groups');
            })
            .catch(error => {
                console.error("Error adding group:", error);
            })
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Create New Group</h2>
            <form onSubmit={handleform} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="groupname" className={styles.label}>Group Name:</label>
                    <input type="text" name="groupname" id="groupname" className={styles.input} required />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Group Profile:</label>
                    <div className={styles.profilePreview}>
                        <img src={preview} className={styles.profileImage} alt="Group preview" />
                        <label className={styles.fileInputLabel}>
                            Choose Image
                            <input type="file" accept="image/*" onChange={handleFileChange} className={styles.fileInput} />
                        </label>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.label}>Add Friends:</label>
                    <div className={styles.friendsList}>
                        {friends.length > 0 ? (
                            friends.map((friend, index) => (
                                <div className={styles.friendItem} key={index}>
                                    <input
                                        type="checkbox"
                                        onChange={handlecheckbox}
                                        name={friend}
                                        id={`friend-${index}`}
                                        className={styles.checkbox}
                                    />
                                    <label htmlFor={`friend-${index}`} className={styles.friendName}>{friend}</label>
                                </div>
                            ))
                        ) : (<p className={styles.noFriends}>No friends found.</p>)}
                    </div>
                </div>

                <button type="submit" className={styles.submitButton}>Create Group</button>
            </form>
        </div>
    )
}