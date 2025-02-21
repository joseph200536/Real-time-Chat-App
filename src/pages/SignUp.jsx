import { Signin } from '../Components/Signin.jsx'
import { LoginButtonComp } from '../Components/loginButtonComp.jsx'
import '../Styles/SignUp.css'
import { bgImg } from '../asset/bg.js'

export function SignUp() {
    return (
        <div className="bg" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="bg-2">
            <div className="signup">
                <div className="padding">
                <h2>CHAT APP</h2>
                <p className='p'>Login via Google or Facebook</p>
                <LoginButtonComp />
                <div className="divider"></div>
                <Signin/>
                </div>
            </div>
            </div>
        </div>
    )
}