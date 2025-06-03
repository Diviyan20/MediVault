import React from "react";
import '../styling/appointment-list.css';

const appointments = [
  {
    title: "Follow-up Consultation",
    time: "10:00 AM",
    type: "Follow Up",
    doctor: "Dr. George Hill",
  },
  {
    title: "Annual Health Screening",
    time: "2:30 PM",
    type: "Preventive Care",
    doctor: "Dr. Laura Lewis",
  },
  {
    title: "Back Pain Checkup",
    time: "4:15 PM",
    type: "Chronic Care",
    doctor: "Dr. Mary Clark",
  }
];

const AppointmentList = () => {
  return (
    <div className="appointments-container">
      <h2 className="appointment-header">Upcoming Appointments</h2>
      <div>
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <div className="appointment-info">
              <div>
                <p className="appointment-titles">{appointment.title}</p>
                <p className="appointment-details">
                  {appointment.time} &middot; {appointment.type} &middot; {appointment.doctor}
                </p>
              </div>
            </div>
            <a href="#" className="appointment-view">
              View
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;
