import React, {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import "../styling/navigation-bar.css";

const NavigationBar = ({handleLogout}) =>{
    const [dropdownOpen, setDropDownOpen] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <div className='nav-container'>
            <div className ='nav-links'>
                <span
                    className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}
                    onClick={() => navigate('/dashboard')}
                >
                    Dashboard
                </span>

                <span
                    className={`nav-item ${location.pathname === '/medical-entries' ? 'active' : ''}`}
                    onClick={() => navigate('/medical-entries')}
                >
                    Medical Entries
                </span>

            </div>

            <div className='nav-actions'>
                <div className='profile-container' onClick={() => setDropDownOpen(!dropdownOpen)}>
                    <img src="profile.png" alt="Profile" className='profile-img'/>
                    {dropdownOpen && (
                        <div className='dropdown-menu'>
                            <div className="dropdown-item" onClick={()=> navigate('/profile')}>Profile</div>
                            <div className="dropdown-item">Account</div>
                            <div className="dropdown-item">Settings</div>
                            <div className="dropdown-item" onClick={handleLogout}>Logout</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;