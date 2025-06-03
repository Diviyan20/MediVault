import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../firebase/auth";
import { useAuth } from "../context/authContext";
import { use, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {loggedIn} = useAuth()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (e) =>{
    e.preventDefault();
    if (!isSigningIn){
      setIsSigningIn(true);
      try{
        await doSignInWithEmailAndPassword(email, password);
        navigate("/dashboard");
      }
      catch(error){
        setErrorMessage(error.message);
      }
      finally{
        setIsSigningIn(false);
      }
    }
  };
  
    return (
      <div className = "container">
        <h1 className="title">Medi-Vault</h1>
        <p className="content">Welcome to Medi-Vault, your Personal Medical Records Tracker</p>
      
      <div className="login-container"> 
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <input type="email" placeholder="Email" className="login-input" value = {email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="login-button">{isSigningIn ? "Signing In..." : "Login"}</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p className="signup-text">
        Don't have an account? <Link to="/register" className="signup-link">Sign Up</Link>
      </p>
    </div>
    </div>
  );
  };
  
  export default Login;
  