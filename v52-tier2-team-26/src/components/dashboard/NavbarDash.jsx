import React from "react";
import { useState } from "react";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "../../styling/dashboard.css";

const NavbarDash = ({ category, setCategory, tripView, setTripView }) => {
  return (
    <div className="dash-navbar-wrapper">
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
        {category === "completed-visits" ? (
          <div
            className="dash-nav-tab"
            style={{ backgroundColor: "white", color: "#1212ce" }}
            onClick={() => setCategory("completed-visits")}
          >
            <p className="dash-nav-p">
              <AccountCircleOutlinedIcon
                className="dash-nav-icon"
                style={{ fontSize: "0.9vw", color: "#1212ce" }}
              />{" "}
              Completed Visits
            </p>
          </div>
        ) : (
          <div
            className="dash-nav-tab"
            style={{ color: "#159461" }}
            onClick={() => setCategory("completed-visits")}
          >
            <p className="dash-nav-p">
              <AccountCircleOutlinedIcon
                className="dash-nav-icon"
                style={{ fontSize: "0.9vw", color: "#159461" }}
              />{" "}
              Completed Visits
            </p>
          </div>
        )}
      </div>
      {category === "trip-planning" ? (
        <div className="trip-planning-navbar">
          <p className="trip-planning-nav-line">|</p>
          {tripView === "list-view" ? (
            <p
              className="trip-planning-nav-tab"
              onClick={() => {
                setTripView("list-view");
              }}
              style={{ color: "#1212ce" }}
            >
              List View
            </p>
          ) : (
            <p
              className="trip-planning-nav-tab"
              onClick={() => {
                setTripView("list-view");
              }}
              style={{ color: "#333333" }}
            >
              List View
            </p>
          )}
          <p className="trip-planning-nav-line">|</p>
          {tripView === "map-view" ? (
            <p
              className="trip-planning-nav-tab"
              onClick={() => {
                setTripView("map-view");
              }}
              style={{ color: "#1212ce" }}
            >
              Map View
            </p>
          ) : (
            <p
              className="trip-planning-nav-tab"
              onClick={() => {
                setTripView("map-view");
              }}
              style={{ color: "#333333" }}
            >
              Map View
            </p>
          )}
          <p className="trip-planning-nav-line">|</p>
          {tripView === "full-view" ? (
            <p
              className="trip-planning-nav-tab"
              onClick={() => {
                setTripView("full-view");
              }}
              style={{ color: "#1212ce" }}
            >
              Full View
            </p>
          ) : (
            <p
              className="trip-planning-nav-tab"
              onClick={() => {
                setTripView("full-view");
              }}
              style={{ color: "#333333" }}
            >
              Full View
            </p>
          )}
          <p className="trip-planning-nav-line">|</p>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarDash;
