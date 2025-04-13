import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Styles/friends.module.css';
import socket from '../socket';
import { useNavigate } from 'react-router-dom';
export default function FriendComp() {
    const navigate = useNavigate();
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const userName = sessionStorage.getItem("userName"); 
    useEffect(() => {
        if (userName) {
            axios.get(`http://localhost:3000/api/friends/${userName}`)
                .then(response => {
                    setFriends(response.data);
                    
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching friends:", error);
                    setLoading(false);
                });
        }
    }, [userName]);
    const handlefunction = (name,img) => {
        socket.emit('frdName',name);
        navigate('/chat', { state: { name,img} });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.frd}>
            <h2>Friends!!</h2>
            <div className={styles.users}>
                {friends.length > 0 ? (
                    friends.map((friend, index) => (
                        <button onClick={() => handlefunction(friend,`http://localhost:3000/api/userimage/${friend}`)} key={index}>
                            <img src={`http://localhost:3000/api/userimage/${friend}`} alt={friend} /> 
                            <p>{friend}</p>
                        </button>
                    ))
                ) : (
                    <p>No friends found.</p>
                )}
            </div>
        </div>
    );
}