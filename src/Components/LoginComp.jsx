import '../Styles/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import socket from "../socket";
export function LoginComp() {
    const [emailorpass, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/login', { emailorpass, password })
            .then(result => {
                if (result.data.token) {
                    const userName  = result.data.user.userName;
                    sessionStorage.setItem("userName",userName);
                    socket.emit("user", userName );

                console.log("Login Successful! User:", userName);
                navigate("/home");
                } else {
                    console.error("Login failed:", result.data);
                }
            })
            .catch(err => {
                alert("check your credentials");
                console.log("Error:", err)});
    };
    return (
        <div className="sign">
            <form onSubmit={handleSubmit} action="">
                <div className="head">
                    <div className="head-p">

                        <p>Login</p>
                    </div>
                    <Link to="/" >Sign up</Link>
                </div>
                <div className="email">
                    <input type="text" name='email' placeholder="Email or Username" required 
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="email">
                    <input type="text" name='password' placeholder="Password" required
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="email" id='submit'>
                    <input type="submit" value={"Login"} />
                </div>
            </form>
        </div>
    )
}