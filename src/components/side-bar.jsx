import React from "react";
import { useNavigate } from "react-router-dom";
import '../styling/profile.css'

const Sidebar = ({activeSection, setActiveSection}) =>{
    const navigate = useNavigate();

    return(
        <div className="profile-sidebar">
            <div className="profile-picture">
                Profile Picture
                </div>
            <div
        className={`sidebar-link ${activeSection === "userInfo" ? "active" : ""}`}
        onClick={() => setActiveSection("userInfo")}
      >
        <u><b>User Information</b></u>
      </div>
      
        <div
        className={`sidebar-link ${activeSection === "allergies" ? "active" : ""}`}
        onClick={() => setActiveSection("allergies")}
      >
        <u><b>Medical Allergies</b></u>
      </div>

        <div
        className={`sidebar-link ${activeSection === "account" ? "active" : ""}`}
        onClick={() => setActiveSection("account")}
      >
        <u><b>Account Controls</b></u>
      </div>
        
        <div className="go-back" onClick={() => navigate("/dashboard")}>
        Go back to Dashboard
      </div>

      </div>
    );
};

export default Sidebar;