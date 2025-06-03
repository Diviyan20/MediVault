import React from "react";
import { useNavigate } from "react-router-dom";
import { doSignOut } from "../firebase/auth";
import AppointmentList from "../components/appointment-list.jsx";
import MedicalRecords from "../components/medical-records.jsx";
import NavigationBar from "../components/navigation-bar.jsx";

const Dashboard = () => {
    const navigate = useNavigate();

const handleLogout = async ()=>{
    try{
        await doSignOut();
        navigate("/login");
    }
    catch (error){
        console.error("Logout Failed!", error.message);
    }
};

    return (
    <>
      <NavigationBar handleLogout={handleLogout} />
      <div className="dashboard-container">
        <h2 className="dashboard">Welcome to Your Dashboard</h2>
        <AppointmentList />
        <MedicalRecords />
      </div>
    </>
  );
};

export default Dashboard