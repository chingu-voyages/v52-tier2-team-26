import React from 'react'

const MyVisits = () => {
  return (
    <div className="dash-menu">
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
          <button className="filter-button">Filter</button>
          <button className="cancel-button">Cancel Request</button>
          <MoreVertOutlinedIcon
            className="dash-menu-header-icon"
            style={{ fontSize: "0.9vw", color: "#696969" }}
          />
        </div>
    </div>
    </div>
  )
}

export default MyVisits
