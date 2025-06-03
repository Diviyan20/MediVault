import React, { useState } from "react";
import Sidebar from "../components/side-bar";
import InfoSection from "../components/info-section";
import '../styling/profile.css'

const ProfilePage = () => {
    const [activeSection, setActiveSection] = useState("userInfo");

    return (
        <div className="profile-container">
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
            <InfoSection section={activeSection} />
        </div>
    );
};

export default ProfilePage;
