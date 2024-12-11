import React from "react";
import { useRequest } from "../../contexts/RequestsContext";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import "../../styling/dashboard.css";

const CompletedVisits = () => {
  const { requestList } = useRequest();
  const completedRequests = requestList.filter((i) => i.status === "Completed");
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
          <button className="cancel-button">Plan Trip</button>
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
        {completedRequests.map((item) => (
          <div key={item.id} className="dash-menu-req-container">
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
                <p className="dash-menu-req-status-scheduled">{item.status}</p>
              </div>
            ) : null}
            {item.status === "Pending" ? (
              <div className="dash-menu-req-status-div">
                <p className="dash-menu-req-status-pending">{item.status}</p>
              </div>
            ) : null}
            {item.status === "Cancelled" ? (
              <div className="dash-menu-req-status-div">
                <p className="dash-menu-req-status-cancelled">{item.status}</p>
              </div>
            ) : null}
          </div>
        ))}
        <div className="dash-menu-req-pages-div">
          <div className="dash-menu-previous-div">
            <ArrowBackIosIcon
              className="dash-menu-back-icon"
              style={{ fontSize: "0.7vw", color: "#929292" }}
            />
            <p className="dash-menu-previous-text">Previous</p>
          </div>
          <div className="dash-menu-next-div">
            <p className="dash-menu-next-text">Next</p>
            <ArrowForwardIosIcon
              className="dash-menu-forward-icon"
              style={{ fontSize: "0.7vw", color: "#929292" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedVisits;
