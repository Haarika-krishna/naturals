import React, { useState, useEffect } from "react";
import MyProfile from "./MyProfile.jsx";
import MyAddress from "./MyAddress.jsx";
import "./Myaccount.css";
import MyAddressForm from "./MyAddressForm.jsx";
import MyOrders from "./MyOrders.jsx";
import OrderTracking from "./OrderTracking.jsx";
import ReturnForm from "./ReturnForm.jsx";
import CancelTracking from "./CancelTracking.jsx";
import WestIcon from "@mui/icons-material/West";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Myaccount = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 750;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
      if (mobile) setIsOpen(true);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= DESKTOP VIEW ================= */}
      <div className="myaccount-page">
        <div className="desktopView-container">
          {/* LEFT SIDEBAR */}
          <div className="account-sidebar">
            <h3>My Account</h3>
            <hr />

            <button
              onClick={() => setActiveSection("profile")}
              className={activeSection === "profile" ? "active-link" : ""}
            >
              Profile
            </button>

            <button
              onClick={() => setActiveSection("address")}
              className={activeSection === "address" ? "active-link" : ""}
            >
              Address
            </button>

            <h3>Orders & Tracking</h3>
            <hr />

            <button
              onClick={() => setActiveSection("orders")}
              className={activeSection === "orders" ? "active-link" : ""}
            >
              Orders
            </button>

            <button>Customer Support</button>
          </div>

          {/* RIGHT CONTENT */}
          <div className="account-right-box">
            {activeSection === "profile" && <MyProfile />}

            {activeSection === "address" && (
              <MyAddress onAddNew={() => setActiveSection("addressform")} />
            )}

            {activeSection === "addressform" && (
              <MyAddressForm onCancel={() => setActiveSection("address")} />
            )}

            {activeSection === "orders" && (
              <MyOrders
                onFullOrder={() => setActiveSection("orderdetails")}
                onCancelOrder={() => setActiveSection("canceltracking")}
              />
            )}

            {activeSection === "canceltracking" && <CancelTracking />}

            {activeSection === "orderdetails" && (
              <OrderTracking onReturn={() => setActiveSection("return")} />
            )}

            {activeSection === "return" && (
              <ReturnForm onBack={() => setActiveSection("orderdetails")} />
            )}
          </div>
        </div>
      </div>

      
      {isMobile && (
        <>
          {/* MOBILE SIDEBAR */}
          {isOpen && (
            <div className="mobileView-profile-container">
              <div className="mobile-profile-content">
                <h1>My Account</h1>

                <div className="name-container">
                  <div className="icon-container">
                     <span className="iconamoon--profile-thin"></span>
                  </div>
                  
                  <div className="names-edit-container">
                    <div className="name-of-user">
                      <h3>Harika</h3>
                      <p>+91 9177494523</p>
                    </div>

                    <span
                      className="edit-text"
                      onClick={() => {
                        setActiveSection("profile");
                        setIsOpen(false);
                      }}
                    >
                      Edit
                    </span>
                  </div>
                </div>
              </div>

              <div className="sidebar-links">
                <label className="each-link">
                  <a
                    href="#profile"
                    onClick={() => {
                      setActiveSection("profile");
                      setIsOpen(false);
                    }}
                  >
                    Profile
                  </a>
                  <NavigateNextIcon />
                </label>
                <label className="each-link">
                  <a
                    href="#address"
                    onClick={() => {
                      setActiveSection("address");
                      setIsOpen(false);
                    }}
                  >
                    Address
                  </a>
                  <NavigateNextIcon />
                </label>

                <label className="each-link">
                  <a
                    href="#orders"
                    onClick={() => {
                      setActiveSection("orders");
                      setIsOpen(false);
                    }}
                  >
                    Orders
                  </a>
                  <NavigateNextIcon />
                </label>

                <label className="each-link">
                  <a href="#support">Customer Support</a>
                  <NavigateNextIcon />
                </label>
              </div>

              <div className="logout-btn">
                <button>Logout</button>
              </div>
            </div>
          )}

         
          {!isOpen && (
            <div className="mobile-right-content">
              

              {activeSection === "profile" && <MyProfile />}

              {activeSection === "address" && (
                <MyAddress onAddNew={() => setActiveSection("addressform")} />
              )}

              {activeSection === "addressform" && (
                <MyAddressForm onCancel={() => setActiveSection("address")} />
              )}

              {activeSection === "orders" && (
                <MyOrders
                  onFullOrder={() => setActiveSection("orderdetails")}
                  onCancelOrder={() => setActiveSection("canceltracking")}
                />
              )}

              {activeSection === "canceltracking" && <CancelTracking />}

              {activeSection === "orderdetails" && (
                <OrderTracking onReturn={() => setActiveSection("return")} />
              )}

              {activeSection === "return" && (
                <ReturnForm onBack={() => setActiveSection("orderdetails")} />
              )}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Myaccount;
