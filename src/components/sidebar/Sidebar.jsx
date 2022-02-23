import React, { useState } from "react";
import "./sidebar.css";
import logo from "../../assets/idefi-letter-logo.png";

const Sidebar = (props) => {
  const { signOut } = props;
  const [inactive, setInactive] = useState(false);
  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
      <div className="sidebar__top-section">
        <div className="sidebar__logo">
          <img src={logo} alt="idefi-logo" />
        </div>
        <div className="sidebar__btn-container">
          <div className="sidebar__toggle-menu-btn">
            <button onClick={() => setInactive(!inactive)} className="sidebar__btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#462200"
                className="bi bi-arrow-left-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="sidebar__separator"></div>
      <div className="sidebar__items-container">
        <div className="sidebar__items-content">
          <a className="sidebar__item">
            <div className="sidebar__item-image">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#757575" className="bi bi-speedometer2" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                <path
                  fill-rule="evenodd"
                  d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                />
              </svg>
            </div>
            <p className="sidebar__item-text">Dashboard</p>
          </a>
          <div className="sidebar__sign-out-container">
            <button onClick={signOut}>Sign out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
