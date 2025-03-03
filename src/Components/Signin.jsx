import { useState } from 'react'
import '../Styles/Signin.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';


export function Signin() {
    const [email,setEmail]= useState();
    const [userName,setUserName] = useState();
    const [password,setPassword]= useState();
    const [confirmPassword,setConfirmPassword]= useState();

     const navigate = useNavigate();

    const handlesubmit= (e) =>{
        e.preventDefault();
        axios.post('http://localhost:3000/register',{email,userName,password,confirmPassword})
        .then(result=>{console.log(result);
             navigate("/login");
        })
        .catch(err=>console.log(err));
    }
    return (
        <div className="sign">
            <form onSubmit={handlesubmit}  method='post'>
                <div className="head">
                    <div className="head-p">

                        <p>SignUp</p>
                    </div>
                    <Link to="/login">Login</Link>
                </div>
                <div className="email">
                    <input type="text" name="email" placeholder="Email" required
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className="email">
                    <input type="text" name="username" placeholder="Username" required
                    onChange={(e)=>setUserName(e.target.value)}/>
                    
                </div>
                <div className="email">
                    <input type="text" name="password" placeholder="Password" required
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className="email">
                    <input type="text" name='confirmPassword' placeholder="Confirm Password" required
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>
                </div>
                <div className="email" id='submit'>
                    <input type="submit" value={"SignUp"} />
                </div>
            </form>
        </div>
    )
}