import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import "./MyAddressForm.css";

const MyAddressForm = ({ onCancel }) => {
  const [formData, setFormData] = useState({
    name: "Hari keerthi",
    phone: "+91 9648383787",
    pincode: "560001",
    city: "Madhapur",
    state: "Telangana",
    orderAddress: "Road no 6, Rama Street",
    addressType: "Office",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Address Updated:", formData);

    // After update go back
    if (onCancel) onCancel();
  };

  return (
    <div className="myaddressform-container">
      <h2 className="myaddressform-title">Order Address</h2>

      <form onSubmit={handleSubmit} className="myaddressform-form">
        {/* Name */}
        <div className="myaddressform-group">
          <label>Name</label>
          <div className="myaddressform-input-line">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <EditIcon className="myaddressform-edit-icon" />
          </div>
        </div>

        {/* Phone */}
        <div className="myaddressform-group">
          <label>Phone Number</label>
          <div className="myaddressform-input-line">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <EditIcon className="myaddressform-edit-icon" />
          </div>
        </div>

        {/* Pin code + City */}
        <div className="myaddressform-row-2">
  <div className="myaddressform-group">
    <label>Pin code</label>
    <div className="myaddressform-input-line">
      <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} />
      <EditIcon className="myaddressform-edit-icon" />
    </div>
  </div>

  <div className="myaddressform-group">
    <label>City</label>
    <div className="myaddressform-input-line">
      <input type="text" name="city" value={formData.city} onChange={handleChange} />
      <EditIcon className="myaddressform-edit-icon" />
    </div>
  </div>
</div>


        {/* State */}
        <div className="myaddressform-group">
          <label>State</label>
          <div className="myaddressform-input-line">
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
            <EditIcon className="myaddressform-edit-icon" />
          </div>
        </div>

        {/* Order Address */}
        <div className="myaddressform-group">
          <label>Order Address</label>
          <div className="myaddressform-input-line">
            <input
              type="text"
              name="orderAddress"
              value={formData.orderAddress}
              onChange={handleChange}
            />
            <EditIcon className="myaddressform-edit-icon" />
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="myaddressform-radio-row">
          {["Home", "Office", "Others"].map((type) => (
            <label key={type} className="myaddressform-radio">
              <input
                type="radio"
                name="addressType"
                value={type}
                checked={formData.addressType === type}
                onChange={handleChange}
              />
              <span>{type}</span>
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="myaddressform-btn-row">
          <button
            type="button"
            className="myaddressform-cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button type="submit" className="myaddressform-update-btn">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyAddressForm;
