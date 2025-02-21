import '../Styles/Signin.css'
import { Link } from 'react-router-dom'
export function Signin() {
    return (
        <div className="sign">
            <form action="">
            <div className="head">
                <div className="head-p">

                <p>SignUp</p>
                </div>
                <Link to="/login">Login</Link>
            </div>
            <div className="email">
                <input type="text" placeholder="Email or Username" />
            </div>
            <div className="email">
                <input type="text" placeholder="Password" />
            </div>
            <div className="email">
                <input type="text" placeholder="Confirm Password" />
            </div>
            <div className="email" id='submit'>
                <input type="submit" value={"SignUp"} />
            </div>
        </form>
        </div>
    )
}