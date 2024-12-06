import React from "react";
import { useState } from "react";
import TrackerDash from "./TrackerDash";
import NavbarDash from "./NavbarDash";
import ScheduledVisits from "./ScheduledVisits";
import VisitRequests from "./VisitRequests";
import requests from "../../data/requests";
import "../../styling/dashboard.css";

const Dashboard = () => {
  const [category, setCategory] = useState("visit-requests");

  console.log(requests);

  return (
    <div className="dash-wrapper">
      <TrackerDash />
      <NavbarDash category={category} setCategory={setCategory} />
      {category === "visit-requests" ? <VisitRequests /> : null}
      {category === "schedule-visits" ? <ScheduledVisits /> : null}
    </div>
  );
};

export default Dashboard;
