import { useEffect, useState, useRef } from 'react';
import styles from '../Styles/chat.module.css';
import socket from '../socket';

export default function TypeBar() {
    const [input, setInput] = useState('');
    const [frd, setFrd] = useState('');
    const fileInputRef = useRef(null);

    useEffect(() => {
        const handleFrdName = (frdName) => {
            setFrd(frdName);
        };

        socket.on('frdNamefromserver', handleFrdName);
        
        return () => {
            socket.off('frdNamefromserver', handleFrdName);
        };
    }, []); 

    const reload = () => {
        socket.emit('user', sessionStorage.getItem('userName'));
    }

    const handlekeydown = (event) => {
        if(event.key == 'Enter') {
            event.preventDefault();
            sendMessage();
        }
    }

    const handlekeydown2 = (event) => {
        event.preventDefault();
        sendMessage();
    }

    const sendMessage = () => {
        if (input.trim()) {
            setInput('');
            console.log(frd);
            console.log('Socket connected:', socket.connected);
            socket.emit('privatemsg', input, frd);
        }
    }

    const handleFileClick = () => {
        fileInputRef.current.click();
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const fileContent = e.target.result;
                socket.emit('fileUpload', {
                    fileName: selectedFile.name,
                    fileType: selectedFile.type,
                    fileSize: selectedFile.size,
                    content: fileContent, 
                    recipient: frd
                });
            };
            reader.readAsDataURL(selectedFile);
        }
    }

    return (
        <div>
            <div className={styles.bar}>
                <input 
                    type="file" 
                    ref={fileInputRef}
                    style={{ display: 'none' }} 
                    onChange={handleFileChange}
                />
                <button onClick={handleFileClick}>
                    <img src="../src/asset/images/link 1.png" alt="Attach file" />
                </button>
                
                <input 
                    type="text" 
                    value={input}  
                    placeholder='Type Here' 
                    onClick={reload}
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={handlekeydown}
                />
                
                <button onClick={handlekeydown2}>
                    <img id={styles.barimg} src="../src/asset/images/send 2.png" alt="Send" />
                </button>
            </div>
        </div>
    )
}