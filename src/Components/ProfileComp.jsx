import { useEffect, useState } from 'react';
import styles from '../Styles/profile.module.css';
import socket from '../socket';
export default function ProfileComp() {
    const [user,setUser] = useState("");
    const [name,setName] = useState("");
    const [about,setAbout] = useState("");
    const [profilePic, setProfilePic] = useState(null);
    const [preview, setPreview] = useState("../src/asset/images/image 1.png");

    useEffect(() => {
        const fetchProfilePicture = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/userimage/${user}`);
                const blob =await response.blob();
                const imageUrl = URL.createObjectURL(blob);
                setPreview(imageUrl);

            } catch (error) {
                console.error('Error fetching profile picture:', error);
            }
        };
    
        if (user) {
            fetchProfilePicture();
        }
    }, [user]);
    
    useEffect(() => {
        const handleProfilePicUpdated = (profilePicPath) => {
            setPreview(profilePicPath);
        };
        const handleDetails = (user, name, about) => {
            setUser(user);
            setName(name); 
            setAbout(about);
        };
    
        socket.on("det", handleDetails);
        socket.on("profilePicUpdated", handleProfilePicUpdated);
        return () => {
            socket.off("det", handleDetails);
            socket.off("profilePicUpdated", handleProfilePicUpdated);
        };
    }, []);
    const handlename = ()=>{
        const name = prompt("name:");
        setName(name);
        socket.emit("setname",name,user);
    }
    const handleabout = ()=>{
        const about = prompt("About:");
        setAbout(about);
        socket.emit("setabout",about,user);
    }
    const handleFileChange = (e)=>{
        const file = e.target.files[0];
        if(file){
            setProfilePic(file);
            setPreview(URL.createObjectURL(file));
        }
    }
    const handleUpload =()=>{
        if(!profilePic){
            alert("Upload Image First");
            return;
        }

        const formdata = new FormData();
        formdata.append('profilePic',profilePic);
        formdata.append('user',user);
        fetch('http://localhost:3000/api/uploadProfilePic',{
            method:'POST',
            body:formdata
        })
        .then(response => response.json())
        .then(data => {
            if (data.message === "Profile picture updated successfully") {
                alert("Profile picture updated successfully");
                console.log("Profile picture path:", data.profilePic); 
                setPreview(`http://localhost:3000${data.profilePic}`); 
            } else {
                alert("Error updating profile picture");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Error updating profile picture");
        });
    }
    return(
        <div className={styles.searchprof}>
        <div className={styles.bio}>
                        <div className={styles.img}>
                            <img src={preview} alt="" />
                            
                            <p>{name ||"Edit Name"}<button onClick={handlename} className={styles.edit}><img src="../src/asset/images/edit.png" alt="" /></button></p>
                            
                        </div>
                        <div className={styles.imgupload}>
                            <input type="file" accept='image/*' onChange={handleFileChange}  />
                            <button onClick={handleUpload} className={styles.uploadBtn}>Upload</button>
                            </div>
                        <p className={styles.username}>{user}</p>
                        <p className={styles.ab}>About {name}</p>
                        <p className={styles.about}>{about || "Edit about"}<button onClick={handleabout} className={styles.edit}><img src="../src/asset/images/edit.png" alt="" /></button></p>
                   </div>
                   </div>
    )
}
