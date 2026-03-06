import React, { useState } from "react";
import "./ReturnForm.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WestIcon from '@mui/icons-material/West';

const reasonsList = [
  "Wrong product received",
  "Damaged or leaking item",
  "Product arrived late",
  "Unpleasant smell or expired product",
  "Product does not match description",
  "Wrong size/variant ordered",
  "Delivery address was incorrect",
];

const ReturnForm = ({onBack}) => {
  const [selectedReason, setSelectedReason] = useState("Select Reason");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleSelectReason = (reason) => {
    setSelectedReason(reason);
    setOpenDropdown(false);
  };

  return (
    <div className="main-return-cont">
            <span onClick={onBack} className="back-icon"><WestIcon/>Back</span>
    <div className="return-wrapper">
       
      <div className="return-card">
       
        <label className="return-label">Reason</label>

        <div className="select-box" onClick={() => setOpenDropdown(!openDropdown)}>
          <span className={selectedReason === "Select Reason" ? "placeholder" : ""}>
            {selectedReason}
          </span>

          <span className={`arrow ${openDropdown ? "rotate" : ""}`}><KeyboardArrowDownIcon/></span>
        </div>

        {openDropdown && (
          <div className="dropdown-box">
            {reasonsList.map((reason, index) => (
              <div
                key={index}
                className={`dropdown-item ${
                  selectedReason === reason ? "active" : ""
                }`}
                onClick={() => handleSelectReason(reason)}
              >
                {reason}
              </div>
            ))}
          </div>
        )}
        <h4 className="upload-title">Add Photos & Videos</h4>

        <div className="upload-box">
          <div className="upload-circle">
            <span className="plus">+</span>
          </div>
        </div>
        <div className="submit-div">
             <button className="submit-btn">Submit</button> 
        </div>
       
      </div>
      
    </div>
    </div>
  );
};

export default ReturnForm;
