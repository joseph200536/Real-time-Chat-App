
import '../Styles/Signin.css'
import {Link} from 'react-router-dom'
export function LoginComp() {
    return (
        <div className="sign">
            <form action="">
            <div className="head">
                <div className="head-p">

                <p>Login</p>
                </div>
                <Link to="/" >Sign up</Link>
            </div>
            <div className="email">
                <input type="text" placeholder="Email or Username" />
            </div>
            <div className="email">
                <input type="text" placeholder="Password" />
            </div>
            <div className="email" id='submit'>
                <input type="submit" value={"Login"} />
            </div>
        </form>
        </div>
    )
}