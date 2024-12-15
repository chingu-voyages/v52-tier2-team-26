import React from "react";
import { useState } from "react";
import { useRequest } from "../../contexts/RequestsContext";
import TrackerDash from "./TrackerDash";
import NavbarDash from "./NavbarDash";
import PendingVisits from "./PendingVisits";
import VisitRequests from "./VisitRequests";
import TripPlanning from "./TripPlanning";
import CompletedVisits from "./CompletedVisits";
import "../../styling/dashboard.css";

const Dashboard = ({ addresses }) => {
  const { requestList } = useRequest();
  const [updatedRequests, setUpdatedRequests] = useState(requestList);
  const [category, setCategory] = useState("visit-requests");
  const [tripView, setTripView] = useState("full-view");

  return (
    <div className="dash-wrapper">
      <TrackerDash
        updatedRequests={updatedRequests}
        setUpdatedRequests={setUpdatedRequests}
      />
      <NavbarDash
        category={category}
        setCategory={setCategory}
        tripView={tripView}
        setTripView={setTripView}
      />
      {category === "visit-requests" ? (
        <VisitRequests
          addresses={addresses}
          updatedRequests={updatedRequests}
          setUpdatedRequests={setUpdatedRequests}
        />
      ) : null}
      {category === "schedule-visits" ? (
        <PendingVisits
          addresses={addresses}
          updatedRequests={updatedRequests}
          setUpdatedRequests={setUpdatedRequests}
        />
      ) : null}
      {category === "trip-planning" ? (
        <TripPlanning
          addresses={addresses}
          tripView={tripView}
          setTripView={setTripView}
          updatedRequests={updatedRequests}
          setUpdatedRequests={setUpdatedRequests}
        />
      ) : null}
      {category === "completed-visits" ? (
        <CompletedVisits
          addresses={addresses}
          updatedRequests={updatedRequests}
          setUpdatedRequests={setUpdatedRequests}
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
