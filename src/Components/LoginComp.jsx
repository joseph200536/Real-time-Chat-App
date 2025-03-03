import '../Styles/Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
export function LoginComp() {
    const [emailorpass, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit= (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/login',{emailorpass,password})
        .then(result=>{
            console.log(result);{
            navigate("/home");} 
        })
        .catch(err=>console.log(err));
    }
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