import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import requests from "../../data/requests";

const TripList = () => {
  const scheduledRequests = requests.filter((i) => i.status === "Scheduled");

  const page1 = scheduledRequests.slice(0, 4);

  return (
    <div className="dash-menu-req-wrapper">
      {page1.map((item) => (
        <div key={item.id} className="dash-menu-req-container-trip">
          <div className="dash-menu-req-img-div-trip">
            <img className="dash-menu-req-img-trip" src={item.imgUrl} />
          </div>
          <div className="dash-menu-req-name-div-trip">
            <p className="dash-menu-req-name-trip">{item.name}</p>
            <p className="dash-menu-req-email-trip">{item.email}</p>
          </div>
          <p className="dash-menu-req-address-trip">{item.address}</p>
          <p className="dash-menu-req-phone-trip">{item.phone}</p>
          <div className="dash-menu-req-date-div-trip">
            <div className="dash-menu-req-date-container-trip">
              <p className="dash-menu-req-date-trip">{item.date}</p>
            </div>
          </div>
          <p className="dash-menu-req-time-trip">{item.time}</p>
        </div>
      ))}
      <div className="dash-menu-req-pages-div-trip">
        <div className="dash-menu-previous-div-trip">
          <ArrowBackIosIcon
            className="dash-menu-back-icon-trip"
            style={{ fontSize: "0.7vw", color: "#929292" }}
          />
          <p className="dash-menu-previous-text">Previous</p>
        </div>
        <div className="dash-menu-next-div-trip">
          <p className="dash-menu-next-text-trip">Next</p>
          <ArrowForwardIosIcon
            className="dash-menu-forward-icon-trip"
            style={{ fontSize: "0.7vw", color: "#929292" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TripList;
