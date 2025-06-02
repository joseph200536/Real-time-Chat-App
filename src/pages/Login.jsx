import { LoginComp } from '../Components/LoginComp.jsx'
import '../Styles/SignUp.css'
import { bgImg } from '../asset/bg.js'

export function Login() {
    return (
        <div className="bg" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="bg-2">
            <div className="signup">
                <div className="padding">
                <h2>CHAT APP</h2>
                
                <div className="divider"></div>
                <LoginComp/>
                </div>
            </div>
            </div>
        </div>
    )
}