import React from "react";
import { useState } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import requests from "../../data/requests";
import "../../styling/dashboard.css";
import { Checkbox } from "@mui/material";
import ToggleSwitch from "../../ui/ToggleSwitch";

const VisitRequests = () => {
  const [page, setPage] = useState(1);

  const numRequests = requests.length

  const page1 = requests.slice(0, 8);
  const page2 = requests.slice(8, 16);
  const page3 = requests.slice(16, 24);
  const page4 = requests.slice(24, 32);

  console.log(page1);
  console.log(page2);
  console.log(page3);

  return (
    <div className="dash-menu">
      <div className="dash-menu-header">
        <div className="dash-menu-header-left">
          <h3 className="dash-menu-header-title">
            Admin Dashboard: Visit Scheduling & Planning
          </h3>
          <p className="dash-menu-header-desc">
            Easily manage and schedule solar evaluations, track visit requests,
            and plan logistics all in one place.
          </p>
        </div>
        <div className="dash-menu-header-right">
          <button className="filter-button">Filter</button>
          <button className="cancel-button">Cancel Request</button>
          <MoreVertOutlinedIcon
            className="dash-menu-header-icon"
            style={{ fontSize: "0.9vw", color: "#696969" }}
          />
        </div>
      </div>
      <div className="dash-menu-labels">
        <p className="dash-menu-label">
          <PersonIcon
            className="dash-nav-icon"
            style={{ fontSize: "0.9vw", color: "black" }}
          />
          Name
        </p>
        <p className="dash-menu-label">
          <HomeIcon
            className="dash-nav-icon"
            style={{ fontSize: "0.9vw", color: "black" }}
          />
          Home Address
        </p>
        <p className="dash-menu-label">
          <PhoneIcon
            className="dash-nav-icon"
            style={{ fontSize: "0.9vw", color: "black" }}
          />
          Phone Number
        </p>
        <p className="dash-menu-label">
          <CalendarMonthIcon
            className="dash-nav-icon"
            style={{ fontSize: "0.9vw", color: "black" }}
          />
          Date
        </p>
        <p className="dash-menu-label">
          <AccessTimeFilledIcon
            className="dash-nav-icon"
            style={{ fontSize: "0.9vw", color: "black" }}
          />
          Time
        </p>
        <p className="dash-menu-label">
          <PendingActionsIcon
            className="dash-nav-icon"
            style={{ fontSize: "0.9vw", color: "black" }}
          />
          Status
        </p>
      </div>
      <div className="dash-menu-req-wrapper">
        {page === 1 ? (
          <div>
            {" "}
            {page1.map((item) => (
              <div key={item.id} className="dash-menu-req-container">
                <input type="checkbox" className="dash-menu-req-checkbox" />
                <div className="dash-menu-req-img-div">
                  <img className="dash-menu-req-img" src={item.imgUrl} />
                </div>
                <div className="dash-menu-req-name-div">
                  <p className="dash-menu-req-name">{item.name}</p>
                  <p className="dash-menu-req-email">{item.email}</p>
                </div>
                <p className="dash-menu-req-address">{item.address}</p>
                <p className="dash-menu-req-phone">{item.phone}</p>
                <div className="dash-menu-req-date-div">
                  <p className="dash-menu-req-date-title">Date</p>
                  <div className="dash-menu-req-date-container">
                    <p className="dash-menu-req-date">{item.date}</p>
                    <CalendarTodayIcon
                      className="dash-menu-req-date-icon"
                      style={{ fontSize: "0.9vw", color: "#929292" }}
                    />
                  </div>
                </div>
                <p className="dash-menu-req-time">{item.time}</p>
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-div">
                    <ToggleSwitch className="dash-menu-req-status-toggle" />
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <ToggleSwitch className="dash-menu-req-status-toggle" />
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div className="">
                {/* <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "#929292" }}
                />
                <p className="dash-menu-previous-text">Previous</p> */}
              </div>
              {numRequests < 8 ? null : <div
                className="dash-menu-next-div"
                onClick={() => {
                  setPage(2);
                }}
              >
                <p className="dash-menu-next-text">Next</p>
                <ArrowForwardIosIcon
                  className="dash-menu-forward-icon"
                  style={{ fontSize: "0.7vw", color: "#929292" }}
                />
              </div>}
            </div>
          </div>
        ) : null}
        {page === 2 ? (
          <div>
            {" "}
            {page2.map((item) => (
              <div key={item.id} className="dash-menu-req-container">
                <input type="checkbox" className="dash-menu-req-checkbox" />
                <div className="dash-menu-req-img-div">
                  <img className="dash-menu-req-img" src={item.imgUrl} />
                </div>
                <div className="dash-menu-req-name-div">
                  <p className="dash-menu-req-name">{item.name}</p>
                  <p className="dash-menu-req-email">{item.email}</p>
                </div>
                <p className="dash-menu-req-address">{item.address}</p>
                <p className="dash-menu-req-phone">{item.phone}</p>
                <div className="dash-menu-req-date-div">
                  <p className="dash-menu-req-date-title">Date</p>
                  <div className="dash-menu-req-date-container">
                    <p className="dash-menu-req-date">{item.date}</p>
                    <CalendarTodayIcon
                      className="dash-menu-req-date-icon"
                      style={{ fontSize: "0.9vw", color: "#929292" }}
                    />
                  </div>
                </div>
                <p className="dash-menu-req-time">{item.time}</p>
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-div">
                    <ToggleSwitch className="dash-menu-req-status-toggle" />
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <ToggleSwitch className="dash-menu-req-status-toggle" />
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(1);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "#929292" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              { numRequests < 16 ? null : <div
                className="dash-menu-next-div"
                onClick={() => {
                  setPage(3);
                }}
              >
                <p className="dash-menu-next-text">Next</p>
                <ArrowForwardIosIcon
                  className="dash-menu-forward-icon"
                  style={{ fontSize: "0.7vw", color: "#929292" }}
                />
              </div>}
            </div>
          </div>
        ) : null}
        {page === 3 ? (
          <div>
            {" "}
            {page3.map((item) => (
              <div key={item.id} className="dash-menu-req-container">
                <input type="checkbox" className="dash-menu-req-checkbox" />
                <div className="dash-menu-req-img-div">
                  <img className="dash-menu-req-img" src={item.imgUrl} />
                </div>
                <div className="dash-menu-req-name-div">
                  <p className="dash-menu-req-name">{item.name}</p>
                  <p className="dash-menu-req-email">{item.email}</p>
                </div>
                <p className="dash-menu-req-address">{item.address}</p>
                <p className="dash-menu-req-phone">{item.phone}</p>
                <div className="dash-menu-req-date-div">
                  <p className="dash-menu-req-date-title">Date</p>
                  <div className="dash-menu-req-date-container">
                    <p className="dash-menu-req-date">{item.date}</p>
                    <CalendarTodayIcon
                      className="dash-menu-req-date-icon"
                      style={{ fontSize: "0.9vw", color: "#929292" }}
                    />
                  </div>
                </div>
                <p className="dash-menu-req-time">{item.time}</p>
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-div">
                    <ToggleSwitch className="dash-menu-req-status-toggle" />
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <ToggleSwitch className="dash-menu-req-status-toggle" />
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(2);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "#929292" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              { numRequests < 24 ? null : <div
                className="dash-menu-next-div"
                onClick={() => {
                  setPage(4);
                }}
              >
                <p className="dash-menu-next-text">Next</p>
                <ArrowForwardIosIcon
                  className="dash-menu-forward-icon"
                  style={{ fontSize: "0.7vw", color: "#929292" }}
                />
              </div> }
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default VisitRequests;