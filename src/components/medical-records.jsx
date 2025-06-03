import React, {useState} from 'react';
import '../styling/medical-records.css';

const Section = ({ title, items }) =>{
    const [isOpen, setIsOpen] = useState(false);


return(
    <div className='record-section'>
        <button
        onClick={() => setIsOpen(!isOpen)}
        className='record-title'
        >
            {title}
        </button>
        
        {isOpen &&(
            <ul className='record-list'>
                {items.map((item, idx)=>(
                    <li key= {idx} className='record-item'>{item}</li>
                ))}
            </ul>
        )}

    </div>
);
};

const MedicalRecords = () =>{
    return(
        <div className='medical-records-container'>
            <h2 className='medical-records-header'> Recent Medical Records Overview</h2>

            <Section
        title="Prescriptions"
        items={["Prescription 1", "Prescription 2", "Prescription 3"]}
      />
      <Section
        title="Test Results"
        items={["Test 1 (Passed)", "Test 2 (Pending)", "Test 3 (Failed)"]}
      />
      <Section
        title="Vaccination Records"
        items={["Vaccine 1 (Date)", "Vaccine 2 (Date)", "Vaccine 3 (Date)"]}
      />
      <Section
        title="Doctor Visits"
        items={["Dr. Smith (Jan 12)", "Dr. Jane (Feb 20)", "Dr. Kyle (Mar 5)"]}
      />
        </div>
    );
};

export default MedicalRecords;
