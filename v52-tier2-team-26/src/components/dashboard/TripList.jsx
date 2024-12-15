import React, { useEffect, useState, useRef } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DownloadPDF from "../../ui/DownloadPDF";

const TripList = ({
  page,
  setPage,
  tripView,
  setUpdatedRequests,
  filteredRequests,
  setFilteredRequests,
}) => {
  const numRequests = filteredRequests.length;

  const page1 = filteredRequests.slice(0, 10);
  const page2 = filteredRequests.slice(10, 20);
  const page3 = filteredRequests.slice(20, 30);
  const page4 = filteredRequests.slice(30, 40);
  const page5 = filteredRequests.slice(40, 50);
  const page6 = filteredRequests.slice(50, 60);
  const page7 = filteredRequests.slice(60, 70);
  const page8 = filteredRequests.slice(70, 80);

  const handleEditStatus = (id, newStatus) => {
    const requestList = JSON.parse(localStorage.getItem("requestList"));
    const getRequest = requestList.find((item) => item.id === id);
    const updateRequest = (getRequest["status"] = newStatus);
    localStorage.setItem("requestList", JSON.stringify(requestList));
    setUpdatedRequests(requestList);
    setFilteredRequests(requestList.filter((i) => i.status === "Scheduled"));
  };

  return (
    <div className="dash-menu-req-wrapper">
      <div className="dash-menu-req-wrapper">
        {(tripView === "full-view" || tripView === "list-view") &&
        page === 1 ? (
          <div>
            {" "}
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
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-trip-div">
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Completed" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-completed">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                <select
                  className="select-status"
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option className="option-change" value={item.status}>
                    (change status)
                  </option>
                  <option className="option-cancelled" value="Cancelled">
                    Cancelled
                  </option>
                  <option className="option-completed" value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div className=""></div>
              {numRequests < 11 ? null : (
                <div
                  className="dash-menu-next-div"
                  onClick={() => {
                    setPage(2);
                  }}
                >
                  <p className="dash-menu-next-text">Next</p>
                  <ArrowForwardIosIcon
                    className="dash-menu-forward-icon"
                    style={{ fontSize: "0.7vw", color: "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {(tripView === "full-view" || tripView === "list-view") &&
        page === 2 ? (
          <div>
            {" "}
            {page2.map((item) => (
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
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-trip-div">
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Completed" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-completed">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                <select
                  className="select-status"
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option className="option-change" value={item.status}>
                    (change status)
                  </option>
                  <option className="option-cancelled" value="Cancelled">
                    Cancelled
                  </option>
                  <option className="option-completed" value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(1);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "white" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              {numRequests < 21 ? null : (
                <div
                  className="dash-menu-next-div"
                  onClick={() => {
                    setPage(3);
                  }}
                >
                  <p className="dash-menu-next-text">Next</p>
                  <ArrowForwardIosIcon
                    className="dash-menu-forward-icon"
                    style={{ fontSize: "0.7vw", color: "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {(tripView === "full-view" || tripView === "list-view") &&
        page === 3 ? (
          <div>
            {" "}
            {page3.map((item) => (
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
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-trip-div">
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Completed" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-completed">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                <select
                  className="select-status"
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option className="option-change" value={item.status}>
                    (change status)
                  </option>
                  <option className="option-cancelled" value="Cancelled">
                    Cancelled
                  </option>
                  <option className="option-completed" value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(2);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "white" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              {numRequests < 31 ? null : (
                <div
                  className="dash-menu-next-div"
                  onClick={() => {
                    setPage(4);
                  }}
                >
                  <p className="dash-menu-next-text">Next</p>
                  <ArrowForwardIosIcon
                    className="dash-menu-forward-icon"
                    style={{ fontSize: "0.7vw", color: "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {(tripView === "full-view" || tripView === "list-view") &&
        page === 4 ? (
          <div>
            {" "}
            {page4.map((item) => (
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
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-trip-div">
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Completed" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-completed">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                <select
                  className="select-status"
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option className="option-change" value={item.status}>
                    (change status)
                  </option>
                  <option className="option-cancelled" value="Cancelled">
                    Cancelled
                  </option>
                  <option className="option-completed" value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(3);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "white" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              {numRequests < 41 ? null : (
                <div
                  className="dash-menu-next-div"
                  onClick={() => {
                    setPage(5);
                  }}
                >
                  <p className="dash-menu-next-text">Next</p>
                  <ArrowForwardIosIcon
                    className="dash-menu-forward-icon"
                    style={{ fontSize: "0.7vw", color: "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {(tripView === "full-view" || tripView === "list-view") &&
        page === 5 ? (
          <div>
            {" "}
            {page5.map((item) => (
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
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-trip-div">
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Completed" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-completed">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                <select
                  className="select-status"
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option className="option-change" value={item.status}>
                    (change status)
                  </option>
                  <option className="option-cancelled" value="Cancelled">
                    Cancelled
                  </option>
                  <option className="option-completed" value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(4);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "white" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              {numRequests < 51 ? null : (
                <div
                  className="dash-menu-next-div"
                  onClick={() => {
                    setPage(6);
                  }}
                >
                  <p className="dash-menu-next-text">Next</p>
                  <ArrowForwardIosIcon
                    className="dash-menu-forward-icon"
                    style={{ fontSize: "0.7vw", color: "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {(tripView === "full-view" || tripView === "list-view") &&
        page === 6 ? (
          <div>
            {" "}
            {page6.map((item) => (
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
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-trip-div">
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Completed" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-completed">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                <select
                  className="select-status"
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option className="option-change" value={item.status}>
                    (change status)
                  </option>
                  <option className="option-cancelled" value="Cancelled">
                    Cancelled
                  </option>
                  <option className="option-completed" value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(5);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "white" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              {numRequests < 61 ? null : (
                <div
                  className="dash-menu-next-div"
                  onClick={() => {
                    setPage(7);
                  }}
                >
                  <p className="dash-menu-next-text">Next</p>
                  <ArrowForwardIosIcon
                    className="dash-menu-forward-icon"
                    style={{ fontSize: "0.7vw", color: "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {(tripView === "full-view" || tripView === "list-view") &&
        page === 7 ? (
          <div>
            {" "}
            {page7.map((item) => (
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
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-trip-div">
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Completed" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-completed">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                <select
                  className="select-status"
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option className="option-change" value={item.status}>
                    (change status)
                  </option>
                  <option className="option-cancelled" value="Cancelled">
                    Cancelled
                  </option>
                  <option className="option-completed" value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(6);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "white" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              {numRequests < 71 ? null : (
                <div
                  className="dash-menu-next-div"
                  onClick={() => {
                    setPage(8);
                  }}
                >
                  <p className="dash-menu-next-text">Next</p>
                  <ArrowForwardIosIcon
                    className="dash-menu-forward-icon"
                    style={{ fontSize: "0.7vw", color: "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {(tripView === "full-view" || tripView === "list-view") &&
        page === 8 ? (
          <div>
            {" "}
            {page8.map((item) => (
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
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-trip-div">
                    <p className="dash-menu-req-status-scheduled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Pending" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-pending">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Cancelled" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-cancelled">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                {item.status === "Completed" ? (
                  <div className="dash-menu-req-status-div">
                    <p className="dash-menu-req-status-completed">
                      {item.status}
                    </p>
                  </div>
                ) : null}
                <select
                  className="select-status"
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option className="option-change" value={item.status}>
                    (change status)
                  </option>
                  <option className="option-cancelled" value="Cancelled">
                    Cancelled
                  </option>
                  <option className="option-completed" value="Completed">
                    Completed
                  </option>
                </select>
              </div>
            ))}
            <div className="dash-menu-req-pages-div">
              <div
                className="dash-menu-previous-div"
                onClick={() => {
                  setPage(7);
                }}
              >
                <ArrowBackIosIcon
                  className="dash-menu-back-icon"
                  style={{ fontSize: "0.7vw", color: "white" }}
                />
                <p className="dash-menu-previous-text">Previous</p>
              </div>
              {numRequests < 81 ? null : (
                <div
                  className="dash-menu-next-div"
                  onClick={() => {
                    setPage(9);
                  }}
                >
                  <p className="dash-menu-next-text">Next</p>
                  <ArrowForwardIosIcon
                    className="dash-menu-forward-icon"
                    style={{ fontSize: "0.7vw", color: "white" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TripList;
