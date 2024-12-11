import React from "react";
import { useRequest } from "../../contexts/RequestsContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TripList = ({ tripView, setTripView }) => {
  const { requestList } = useRequest();
  const scheduledRequests = requestList.filter((i) => i.status === "Scheduled");

  const page1 = scheduledRequests.slice(0, 8);
  const page2 = scheduledRequests.slice(8, 16);
  const page3 = scheduledRequests.slice(16, 24);
  const page4 = scheduledRequests.slice(24, 32);

  return (
    <div className="dash-menu-req-wrapper">
      {tripView === "list-view"
        ? scheduledRequests.map((item) => (
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
          ))
        : null}
      {tripView === "full-view"
        ? page1.map((item) => (
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
          ))
        : null}
      {tripView === "full-view"
        ? page2.map((item) => (
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
          ))
        : null}
      {tripView === "full-view"
        ? page3.map((item) => (
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
          ))
        : null}
      {tripView === "full-view"
        ? page4.map((item) => (
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
          ))
        : null}
      {tripView === "full-view" ? (
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
      ) : null}
    </div>
  );
};

export default TripList;
