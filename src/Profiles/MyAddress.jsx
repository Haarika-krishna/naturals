import React, { useState } from "react";
import "./MyAddress.css";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";

const MyAddress = ({onAddNew}) => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      isDefault: true,
      name: "Hari Keerthi",
      phone: "+91 9648383787",
      address: "Road no 23, Kakatiya hills, Madhapur, Hyderabad,India, 50081",
      type: "Office",
    },
    {
      id: 2,
      isDefault: false,
      name: "Keerthi",
      phone: "+91 8965213333",
      address: "Chakri girls pg, Kokatapally, Hyderabad, India, 50081",
      type: "Home",
    },
  ]);

  const handleDelete = (id) => {
    setAddresses(addresses.filter((item) => item.id !== id));
  };

   const navigate = useNavigate();
  return (
    <div className="address-page">
      <h2 className="address-title">Order Address</h2>

      <div className="address-grid">
        {addresses.map((item) => (
          <div key={item.id} className="address-card">
            <div className="address-top">
              <label className="default-radio">
                <input type="radio" checked={item.isDefault} readOnly />
                <span className="radio-dot"></span>
                <span className="default-text">Default</span>
              </label>
            </div>

            <h4 className="address-name">{item.name}</h4>
            <p className="address-phone">{item.phone}</p>
            <p className="address-text">{item.address}</p>
            <p className="address-type">{item.type}</p>

            <div className="address-actions">
              <button className="edit-btn">Edit</button>
              <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="new-address"> 
        <button onClick={onAddNew}><AddIcon/>New Address</button>
      </div>
    </div>
  );
};

export default MyAddress;
