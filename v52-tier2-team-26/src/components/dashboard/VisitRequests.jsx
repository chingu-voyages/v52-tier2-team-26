import React, { useEffect } from "react";
import { useRef, useState } from "react";
import { useRequest } from "../../contexts/RequestsContext";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DownloadPDF from "../../ui/DownloadPDF";
import requests from "../../data/requests";
import users from "../../data/users";
import "../../styling/dashboard.css";
import fetchAddresses from "../../data/addresses";

const VisitRequests = () => {
  const { requestList } = useRequest();
  const [page, setPage] = useState(1);
  const [updatedRequests, setUpdatedRequests] = useState(requestList);
  const [sortRef, setSortRef] = useState("newest");
  const [sortedRequests, setSortedRequests] = useState(requestList);
  const [requestStatus, setRequestStatus] = useState();

  const downloadRef = useRef(null);

  console.log(requestList);

  const numRequests = requestList.length;

  const page1 = requestList.slice(0, 10);
  const page2 = requestList.slice(10, 20);
  const page3 = requestList.slice(20, 30);
  const page4 = requestList.slice(30, 40);

  const addresses = fetchAddresses();

  console.log(addresses);

  // const handleSort = () => {
  //   const sortRequests = [...requestList].sort((a, b) => {
  //     const dateA = new Date(a.date);
  //     const dateB = new Date(b.date);
  //     if (sortRef === "date-newest") {
  //       return dateB - dateA;
  //     } else if (sortRef === "date-oldest") {
  //       return dateA - dateB;
  //     } else if (sortRef === "oldest") {
  //       return b - a;
  //     }
  //   });
  //   setSortedRequests(sortRequests);
  // };

  const handleEditStatus = (id, newStatus) => {
    const requestList = JSON.parse(localStorage.getItem("requestList"));
    const getRequest = requestList.find((item) => item.id === id);
    const updateRequest = (getRequest["status"] = newStatus);
    console.log(requestList);
    localStorage.setItem("requestList", JSON.stringify(requestList));
    setUpdatedRequests(requestList);
    setSortedRequests(requestList);
    // setSortedRequests(requestList);
  };

  useEffect(() => {}, [requestList, sortedRequests]);

  console.log(sortedRequests);

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
          <select
            onChange={(e) => {
              setSortRef(e.target.value);
            }}
            className="filter-button"
          >
            Sort
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="date-newest">Date(Newest)</option>
            <option value="date-oldest">Date(Oldest)</option>
          </select>
        </div>
      </div>
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
        <p className="dash-menu-label">
          <PendingActionsIcon
            className="dash-nav-icon"
            style={{ fontSize: "0.9vw", color: "black" }}
          />
          Status
        </p>
      </div>
      <div className="dash-menu-req-wrapper">
        {page === 1 ? (
          <div>
            {" "}
            {page1.map((item) => (
              <div key={item.id} className="dash-menu-req-container">
                <div className="dash-menu-req-img-div">
                  <img className="dash-menu-req-img" src={item.imgUrl} />
                </div>
                <div className="dash-menu-req-name-div">
                  <p className="dash-menu-req-name">{item.name}</p>
                  <p className="dash-menu-req-email">{item.email}</p>
                </div>
                <p className="dash-menu-req-address">{item.address}</p>
                <p className="dash-menu-req-phone">{item.phone}</p>
                <div className="dash-menu-req-date-div">
                  <p className="dash-menu-req-date-title">Date</p>
                  <div className="dash-menu-req-date-container">
                    <p className="dash-menu-req-date">{item.date}</p>
                    <CalendarTodayIcon
                      className="dash-menu-req-date-icon"
                      style={{ fontSize: "0.9vw", color: "#929292" }}
                    />
                  </div>
                </div>
                <p className="dash-menu-req-time">{item.time}</p>
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-div">
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
                  onChange={(e) => handleEditStatus(item.id, e.target.value)}
                >
                  <option value={item.status}>(change status)</option>
                  <option value="Pending">Pending</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Cancelled">Cancelled</option>
                  <option value="Completed">Completed</option>
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
                    style={{ fontSize: "0.7vw", color: "#929292" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {page === 2 ? (
          <div>
            {" "}
            {page2.map((item) => (
              <div key={item.id} className="dash-menu-req-container">
                <div className="dash-menu-req-img-div">
                  <img className="dash-menu-req-img" src={item.imgUrl} />
                </div>
                <div className="dash-menu-req-name-div">
                  <p className="dash-menu-req-name">{item.name}</p>
                  <p className="dash-menu-req-email">{item.email}</p>
                </div>
                <p className="dash-menu-req-address">{item.address}</p>
                <p className="dash-menu-req-phone">{item.phone}</p>
                <div className="dash-menu-req-date-div">
                  <p className="dash-menu-req-date-title">Date</p>
                  <div className="dash-menu-req-date-container">
                    <p className="dash-menu-req-date">{item.date}</p>
                    <CalendarTodayIcon
                      className="dash-menu-req-date-icon"
                      style={{ fontSize: "0.9vw", color: "#929292" }}
                    />
                  </div>
                </div>
                <p className="dash-menu-req-time">{item.time}</p>
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-div">
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
                  style={{ fontSize: "0.7vw", color: "#929292" }}
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
                    style={{ fontSize: "0.7vw", color: "#929292" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
        {page === 3 ? (
          <div>
            {" "}
            {page3.map((item) => (
              <div key={item.id} className="dash-menu-req-container">
                <div className="dash-menu-req-img-div">
                  <img className="dash-menu-req-img" src={item.imgUrl} />
                </div>
                <div className="dash-menu-req-name-div">
                  <p className="dash-menu-req-name">{item.name}</p>
                  <p className="dash-menu-req-email">{item.email}</p>
                </div>
                <p className="dash-menu-req-address">{item.address}</p>
                <p className="dash-menu-req-phone">{item.phone}</p>
                <div className="dash-menu-req-date-div">
                  <p className="dash-menu-req-date-title">Date</p>
                  <div className="dash-menu-req-date-container">
                    <p className="dash-menu-req-date">{item.date}</p>
                    <CalendarTodayIcon
                      className="dash-menu-req-date-icon"
                      style={{ fontSize: "0.9vw", color: "#929292" }}
                    />
                  </div>
                </div>
                <p className="dash-menu-req-time">{item.time}</p>
                {item.status === "Scheduled" ? (
                  <div className="dash-menu-req-status-div">
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
                  style={{ fontSize: "0.7vw", color: "#929292" }}
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
                    style={{ fontSize: "0.7vw", color: "#929292" }}
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>
      <div className="downloadPDF-div">
        <DownloadPDF
          filename={`"Visit-Requests(page ${page})"`}
          contentRef={downloadRef}
        />
      </div>
    </div>
  );
};

export default VisitRequests;
