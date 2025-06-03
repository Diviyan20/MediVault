import React from "react";
import '../styling/profile.css'

const InfoSection = ({section})=>{
    if (section !== "userInfo") return null;

    return(
        <div className="info-section">
            <div className="info-row">
                <label>Name:</label>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
            </div>

            <div className="info-row">
            <label>Email:</label>
            <input type="email" placeholder="name@gmail.com" />
        </div>
        <div className="info-row">
            <label>Date of Birth:</label>
            <input type="date" />
        </div>
        <div className="info-row">
            <label>Gender:</label>
            <input type="text" placeholder="Gender" />
        </div>
        <div className="info-row">
            <label>Blood Type:</label>
            <input type="text" placeholder="Blood type" />
        </div>
        <div className="info-row">
            <label>Phone Number:</label>
            <input type="text" placeholder="Phone Number" />
        </div>
        <div className="info-row">
            <label>Emergency Contact:</label>
            <input type="text" placeholder="Emergency Contact" />
        </div>
        </div>
    );
};

export default InfoSection;