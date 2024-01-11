import "./Auth.css"
import Link from "next/link"

const Auth = () => {
  return (
    <div className='auth__wp'>
        <div className="auth">
            <nav className="auth__nav">
                <ul className="auth__ul">
                    <li><Link className="auth-link" href="/auth/login">Login</Link></li>
                    <li><Link className="auth-link" href="/auth/sihnup">Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    </div> 
  )
}

export default Auth