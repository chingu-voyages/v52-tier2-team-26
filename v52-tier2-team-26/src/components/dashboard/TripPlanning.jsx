import { useRef, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import DownloadPDF from "../../ui/DownloadPDF";
import TripList from "./TripList";
import Map from "./Map";

const TripPlanning = ({ tripView, setTripView }) => {
  const downloadRef = useRef(null);

  return (
    <div ref={downloadRef} className="dash-menu">
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
          <button className="cancel-button">Generate Schedule</button>
        </div>
      </div>
      {tripView === "list-view" || tripView === "full-view" ? (
        <div>
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
          </div>
          <TripList tripView={tripView} setTripView={setTripView} />
        </div>
      ) : null}
      {tripView === "map-view" || tripView === "full-view" ? <Map /> : null}
      {tripView === "list-view" ? (
        <div className="downloadPDF-div">
          <DownloadPDF filename="Trip-Planning" contentRef={downloadRef} />
        </div>
      ) : null}
    </div>
  );
};

export default TripPlanning;
