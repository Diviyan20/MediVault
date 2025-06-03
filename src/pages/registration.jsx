import React, {useState} from "react";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[signingUp, setSigningUp] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const onSubmit = async (e) =>{
        e.preventDefault();
        setSigningUp(true);
        setError('');
        try{
            await doCreateUserWithEmailAndPassword(email, password);
            navigate('/dashboard');
        }
        catch (err){
            setError(err.message);
            setSigningUp(false);
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-heading">Create Account</h2>
            <form className="register-form" onSubmit={onSubmit}>
                <input type="email"
                placeholder="Email"
                className="register-email"
                value={email}
                onChange={(e) =>setEmail(e.target.value)} 
                required />

                <input type="password"
                placeholder="password"
                className="register-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />

                <button type="submit" className="register-button" disabled={signingUp}>
                {signingUp ? 'Signing Up...' : 'Sign Up'}
                </button>
                {error && <p className="error-text">{error}</p>}
            </form>
        </div>
    );
};;

export default Register;