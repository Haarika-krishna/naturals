import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit'; 
import './MyProfile.css'

const MyProfile = () => {
  // Keeping data empty for a fresh start
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="personal-info-container">
      <h2 className="form-title">Personal Information</h2>

      <form className="personal-info-form">
        {/* Simple Input logic */}
        {[
          { label: "First Name", name: "firstName", placeholder: "Enter your first name" },
          { label: "Last Name", name: "lastName", placeholder: "Enter your last name" },
          { label: "Email Address", name: "email", placeholder: "example@mail.com" },
          { label: "Phone Number", name: "phone", placeholder: "+91 XXXXX XXXXX" },
        ].map((field) => (
          <div className="form-group" key={field.name}>
            <label>{field.label}</label>
            <div className="input-line-wrapper">
              <input
                type="text"
                name={field.name}
                value={formData[field.name]}
                onChange={handleInputChange}
                placeholder={field.placeholder}
              />
              <EditIcon className="edit-icon" />
            </div>
          </div>
        ))}

        {/* Gender Selection */}
        <div className="form-group">
          <label>Gender</label>
          <div className="gender-row">
            {["Male", "Female", "Others"].map((option) => (
              <label key={option} className="custom-radio">
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={formData.gender === option}
                  onChange={handleInputChange}
                />
                <span className="radio-text">{option}</span>
              </label>
            ))}
          </div>
        </div>
       <div className="update-btn-container">
             <button type="submit" className="update-btn">Update</button>
       </div>
       
      </form>
    </div>
  );
};

export default MyProfile;