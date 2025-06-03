import React, { useState } from "react";
import { doSignOut } from "../firebase/auth";
import NavigationBar from "../components/navigation-bar.jsx";
import { useNavigate } from "react-router-dom";
import "../styling/medical-entries.css"


const MedicalEntries = ()=>{
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("prescriptions");
    const [isModalOpen, setModalOpen] = useState(false);
    const [newName, setNewName] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newType, setNewType] = useState("prescriptions")
    const [newDoctorName, setNewDoctorName] = useState(""); // only for doctor visits

    const [prescriptions, setPrescriptions] = useState([
  { name: "Amoxicillin", date: "Jan 12, 2025", status: "Active" },
  { name: "Lisinopril", date: "Feb 20, 2025", status: "Pending" },
  { name: "Metformin", date: "Mar 5, 2025", status: "Completed" }
]);

const [vaccinations, setVaccinations] = useState([
  { name: "Hepatitis B", date: "Feb 14, 2023", status: "Completed" },
  { name: "Influenza", date: "Oct 9, 2024", status: "Scheduled" }
]);

const [testResults, setTestResults] = useState([
  { name: "Blood Test", date: "Mar 3, 2025", status: "Available" },
  { name: "X-Ray", date: "Feb 18, 2025", status: "In Review" }
]);

const [doctorVisits, setDoctorVisits] = useState([
  { name: "Annual Checkup", dr_name: "Dr.Jason Turner", date: "Jan 10, 2025", status: "Completed" },
  { name: "Dermatology", dr_name: "Dr.Sunita Taran", date: "Apr 2, 2025", status: "Upcoming" }
]);

const resetForm = () => {
  setNewName("");
  setNewDate("");
  setNewDoctorName("");
};

const handleAddRecord = () => {
  const formattedDate = new Date(newDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const newEntry = {
    name: newName,
    date: formattedDate,
    status: "Pending",
  };

  switch (newType) {
    case "prescriptions":
      setPrescriptions([...prescriptions, newEntry]);
      break;
    case "vaccinations":
      setVaccinations([...vaccinations, newEntry]);
      break;
    case "testResults":
      setTestResults([...testResults, newEntry]);
      break;
    case "doctorVisits":
      setDoctorVisits([
        ...doctorVisits,
        { ...newEntry, dr_name: newDoctorName || "Dr. Unknown" },
      ]);
      break;
    default:
      break;
  }

  setModalOpen(false);
  resetForm();
};

  const handleDeleteRecord = (indextoDelete) =>{
    switch (activeTab){
      case "prescriptions":
      setPrescriptions(prev => prev.filter((_, i) => i !== indextoDelete));
      break;
    case "vaccinations":
      setVaccinations(prev => prev.filter((_, i) => i !== indextoDelete));
      break;
    case "testResults":
      setTestResults(prev => prev.filter((_, i) => i !== indextoDelete));
      break;
    case "doctorVisits":
      setDoctorVisits(prev => prev.filter((_, i) => i !== indextoDelete));
      break;
    default:
      break;
    }
  };

    
    const handleLogout = async ()=>{
    try{
        await doSignOut();
        navigate("/login");
    }
    catch (error){
        console.error("Logout Failed!", error.message);
    }
};


    const renderCards = (data) =>
    data.map((item, index) => (
      <div className="prescription-card" key={index}>
        <h3>{item.name}</h3>

        {item.dr_name && (
            <div className="entry-row">
          <span className="label">Doctor</span>
          <span className="separator">•</span>
          <span className="value">{item.dr_name}</span>
        </div>
        )}

        <div className="entry-row">
          <span className="label">Type</span>
          <span className="separator">•</span>
          <span className="value">{item.date}</span>
        </div>

        <div className="entry-row">
          <span className="label">Status</span>
          <span className="separator">•</span>
          <span className="value">{item.status}</span>
        </div>
        
        <button className="details-button">View Details</button>
        <button className="delete-button" onClick={() =>handleDeleteRecord(index)}>Delete Record</button>
      </div>
    ));

    let currentData;
    switch(activeTab){
        case 'prescriptions':
            currentData = prescriptions;
            break;

        case 'vaccinations':
            currentData = vaccinations;
            break;

        case 'testResults':
            currentData = testResults;
            break;

        case 'doctorVisits':
            currentData = doctorVisits;
            break;
    }

    return(
        <>
        <NavigationBar handleLogout={handleLogout} />
        <div className="entries-container">
            <h1 className="entries-title">Medical Entries</h1>
            <p className="entries-subtext">
                View and manage your Prescriptions, Vaccination Records, Test Results and Doctor Visits
            </p>

            {/* Nav Tabs (not functional yet) */}
        <div className="entries-tabs">
            <span className={activeTab == "prescriptions" ? "tab-active" : "tab"} onClick={() => setActiveTab("prescriptions")}>
                Prescriptions
                </span>

            <span
            className={activeTab === "vaccinations" ? "tab-active" : "tab"}
            onClick={() => setActiveTab("vaccinations")}
          >
            Vaccination Records
          </span>

            <span
            className={activeTab === "tests" ? "tab-active" : "tab"}
            onClick={() => setActiveTab("testResults")}
          >
            Test Results
          </span>

            <span
            className={activeTab === "visits" ? "tab-active" : "tab"}
            onClick={() => setActiveTab("doctorVisits")}
          >
            Doctor Visits
          </span>

        </div>
        {/* Prescription Cards */}

        <div className="prescription-list">
            {renderCards(currentData)}
        </div>
        <button className="add-button" onClick={() => setModalOpen(true)}>
          ➕ Add New Record
        </button>
        {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <h3>Add a New Record</h3>

      <label>Type:</label>
      <select value={newType} onChange={(e) => setNewType(e.target.value)}>
        <option value="prescriptions">Prescriptions</option>
        <option value="vaccinations">Vaccination Records</option>
        <option value="testResults">Test Results</option>
        <option value="doctorVisits">Doctor Visits</option>
      </select>

      <label>{newType === "doctorVisits" ? "Visit Reason:" : "Name:"}</label>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        placeholder="e.g. Blood Test, Flu Shot, etc."
      />

      {newType === "doctorVisits" && (
        <>
          <label>Doctor's Name:</label>
          <input
            type="text"
            value={newDoctorName}
            onChange={(e) => setNewDoctorName(e.target.value)}
            placeholder="e.g. Dr. Smith"
          />
        </>
      )}

      <label>Date:</label>
      <input
        type="date"
        value={newDate}
        onChange={(e) => setNewDate(e.target.value)}
      />

      <div className="modal-actions">
        <button onClick={handleAddRecord}>Submit</button>
        <button
          onClick={() => {
            setModalOpen(false);
            resetForm();
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

        </div>
        </>
    );
};

export default MedicalEntries;