import React from "react";
import { useState } from "react";
import TrackerDash from "./TrackerDash";
import NavbarDash from "./NavbarDash";
import ScheduledVisits from "./PendingVisits";
import VisitRequests from "./VisitRequests";
import TripPlanning from "./TripPlanning";
import requests from "../../data/requests";
import CompletedVisits from "./CompletedVisits";
import "../../styling/dashboard.css";

const Dashboard = () => {
  const [category, setCategory] = useState("visit-requests");
  const [tripView, setTripView] = useState("full-view");

  console.log(requests);

  return (
    <div className="dash-wrapper">
      <TrackerDash />
      <NavbarDash
        category={category}
        setCategory={setCategory}
        tripView={tripView}
        setTripView={setTripView}
      />
      {category === "visit-requests" ? <VisitRequests /> : null}
      {category === "schedule-visits" ? <ScheduledVisits /> : null}
      {category === "trip-planning" ? (
        <TripPlanning tripView={tripView} setTripView={setTripView} />
      ) : null}
      {category === "completed-visits" ? <CompletedVisits /> : null}
    </div>
  );
};

export default Dashboard;
