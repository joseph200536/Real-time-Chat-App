import { LoginComp } from '../Components/LoginComp.jsx'
import { LoginButtonComp } from '../Components/loginButtonComp.jsx'
import '../Styles/SignUp.css'
import { bgImg } from '../asset/bg.js'

export function Login() {
    return (
        <div className="bg" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="bg-2">
            <div className="signup">
                <div className="padding">
                <h2>CHAT APP</h2>
                <p className='p'>Login via Google or Facebook</p>
                <LoginButtonComp />
                <div className="divider"></div>
                <LoginComp/>
                <a className='forget-password' href="">Forget Password</a>
                </div>
            </div>
            </div>
        </div>
    )
}