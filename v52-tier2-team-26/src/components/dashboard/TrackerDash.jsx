import React from "react";
import { useState } from "react";
import requests from "../../data/requests";
import "../../styling/dashboard.css";

const TrackerDash = () => {
  const requestList = JSON.parse(localStorage.getItem("requestList"));
  const pendingTracker = requestList.filter(
    (i) => i.status === "Pending"
  ).length;
  const scheduledTracker = requestList.filter(
    (i) => i.status === "Scheduled"
  ).length;
  const completedTracker = requestList.filter(
    (i) => i.status === "Completed"
  ).length;

  return (
    <div className="dash-header">
      <div className="dash-statement">
        <h3>Monitor, Manage, and Make an Impact on LA's Solar Initiative</h3>
      </div>
      <div className="dash-tracker">
        <div className="dash-tracker-div">
          <div className="dash-tracker-info">
            <h3 className="dash-tracker-num">{pendingTracker}</h3>
            <p className="dash-tracker-p">Pending Evaluation Requests</p>
          </div>
        </div>
        <div className="dash-tracker-div">
          <div className="dash-tracker-info">
            <h3 className="dash-tracker-num">{scheduledTracker}</h3>
            <p className="dash-tracker-p">Scheduled Visits</p>
          </div>
        </div>
        <div className="dash-tracker-div">
          <div className="dash-tracker-info">
            <h3 className="dash-tracker-num">{completedTracker}</h3>
            <p className="dash-tracker-p">Completed Visits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackerDash;
