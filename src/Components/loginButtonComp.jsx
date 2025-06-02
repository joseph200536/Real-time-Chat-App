import '../Styles/button.css';
export function LoginButtonComp() {
    return (
        <div className="login">
            <a href='http://localhost:3000/auth/google' className="google">
                <p>Google</p>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3684 9.28366C17.3684 14.4595 13.9197 18.143 8.82658 18.143C3.94349 18.143 0 14.0901 0 9.0715C0 4.05291 3.94349 0 8.82658 0C11.2041 0 13.2043 0.896177 14.7454 2.37395L12.343 4.74791C9.20028 1.63141 3.35623 3.97244 3.35623 9.0715C3.35623 12.2356 5.81557 14.7997 8.82658 14.7997C12.3216 14.7997 13.6314 12.2246 13.8378 10.8895H8.82658V7.7693H17.2296C17.3115 8.23385 17.3684 8.68011 17.3684 9.28366Z" fill="#71797E" />
                </svg>
            </a>
            <div className="google" id='google'>
                <p>Facebook</p>
                <svg width="9" height="21" viewBox="0 0 9 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.41022 11.7517L8.87692 7.97077H5.95887V5.51719C5.95887 4.48279 6.36649 3.47451 7.6734 3.47451H9V0.255437C9 0.255437 7.79615 0 6.64514 0C4.24203 0 2.67125 1.81091 2.67125 5.08915V7.97077H0V11.7517H2.67125V20.892H5.95887V11.7517H8.41022Z" fill="#71797E" />
                </svg>

            </div>
        </div>
    )
} 