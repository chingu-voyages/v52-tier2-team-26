import React from "react";
import { useState } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../../styling/dashboard.css";

const NavbarDash = ({ category, setCategory }) => {
  return (
    <div className="dash-navbar">
      {category === "visit-requests" ? (
        <div
          className="dash-nav-tab"
          style={{ backgroundColor: "white", color: "#1212ce" }}
          onClick={() => setCategory("visit-requests")}
        >
          <p className="dash-nav-p">
            {" "}
            <ContentPasteIcon
              className="dash-nav-icon"
              style={{ fontSize: "0.9vw", color: "#1212ce" }}
            />{" "}
            Visit Requests
          </p>
        </div>
      ) : (
        <div
          className="dash-nav-tab"
          style={{ color: "#159461" }}
          onClick={() => setCategory("visit-requests")}
        >
          <p className="dash-nav-p">
            {" "}
            <ContentPasteIcon
              className="dash-nav-icon"
              style={{ fontSize: "0.9vw", color: "#159461" }}
            />{" "}
            Visit Requests
          </p>
        </div>
      )}
      {category === "schedule-visits" ? (
        <div
          className="dash-nav-tab"
          style={{ backgroundColor: "white", color: "#1212ce" }}
          onClick={() => setCategory("schedule-visits")}
        >
          <p className="dash-nav-p">
            <CalendarTodayIcon
              className="dash-nav-icon"
              style={{ fontSize: "0.9vw", color: "#1212ce" }}
            />{" "}
            Schedule Visits
          </p>
        </div>
      ) : (
        <div
          className="dash-nav-tab"
          style={{ color: "#159461" }}
          onClick={() => setCategory("schedule-visits")}
        >
          <p className="dash-nav-p">
            <CalendarTodayIcon
              className="dash-nav-icon"
              style={{ fontSize: "0.9vw", color: "#159461" }}
            />{" "}
            Schedule Visits
          </p>
        </div>
      )}
      {category === "trip-planning" ? (
        <div
          className="dash-nav-tab"
          style={{ backgroundColor: "white", color: "#1212ce" }}
          onClick={() => setCategory("trip-planning")}
        >
          <p className="dash-nav-p">
            <LocationOnOutlinedIcon
              className="dash-nav-icon"
              style={{ fontSize: "0.9vw", color: "#1212ce" }}
            />{" "}
            Trip Planning
          </p>
        </div>
      ) : (
        <div
          className="dash-nav-tab"
          style={{ color: "#159461" }}
          onClick={() => setCategory("trip-planning")}
        >
          <p className="dash-nav-p">
            <LocationOnOutlinedIcon
              className="dash-nav-icon"
              style={{ fontSize: "0.9vw", color: "#159461" }}
            />{" "}
            Trip Planning
          </p>
        </div>
      )}
      {category === "my-visits" ? (
        <div
          className="dash-nav-tab"
          style={{ backgroundColor: "white", color: "#1212ce" }}
          onClick={() => setCategory("my-visits")}
        >
          <p className="dash-nav-p">
            <AccountCircleOutlinedIcon
              className="dash-nav-icon"
              style={{ fontSize: "0.9vw", color: "#1212ce" }}
            />{" "}
            My Visits
          </p>
        </div>
      ) : (
        <div
          className="dash-nav-tab"
          style={{ color: "#159461" }}
          onClick={() => setCategory("my-visits")}
        >
          <p className="dash-nav-p">
            <AccountCircleOutlinedIcon
              className="dash-nav-icon"
              style={{ fontSize: "0.9vw", color: "#159461" }}
            />{" "}
            My Visits
          </p>
        </div>
      )}
    </div>
  );
};

export default NavbarDash;
