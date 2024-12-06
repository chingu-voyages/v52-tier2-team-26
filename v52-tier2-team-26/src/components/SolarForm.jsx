import { useState } from "react";
import requests from "../data/requests";
import { useNavigate } from "react-router-dom";

const SolarForm = () => {
  const [requestsList, setRequestsList] = useState([requests]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  // Info gathered from inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  // TO DO: Add setAppointmentStatus to Context
  const [appointmentStatus, setAppointmentStatus] = useState("Pending");
  // TO DO: Need an API call to verify address input
  const [address, setAddress] = useState("");

  // TO DO: Update local storage each time requestsLsit changes

  const addNewRequest = () => {
    const newRequest = {};
    newRequest.id = new Date().getTime().toString(36);
    newRequest.name = `${firstName} ${lastName}`;
    newRequest.email = email;
    newRequest.phoneNumber = phoneNumber;
    newRequest.date = date;
    newRequest.time = preferredTime;
    newRequest.status = appointmentStatus;

    // TO DO: Integrate address API
    newRequest.address = address;

    setRequestsList([newRequest, ...requestsList]);
  };
  console.log(requestsList);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional for smooth scrolling
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewRequest();
    setIsSubmitted(true);
    scrollToTop();
  };

  //   const clearFormFields = () => {
  //     setFirstName("");
  //     setLastName("");
  //     setAddress("");
  //     setEmail("");
  //     setPhoneNumber("");
  //     setDate("");
  //     setPreferredTime("");
  //   }

  const cancelRequest = () => {
    // clearFormFields();
    navigate("/");
    scrollToTop();
  };

  return (
    <main className="SolarForm">
      <div className="wrapper form-wrapper">
        {isSubmitted ? (
          <div className="submission-msg">
            <div className="submission-msg-wrapper">
              <h4>Thank you for submitting your request!</h4>
              <p>
                Please note that your preferred time slot has been requested,
                but it is not garaunteed. You will receive an appointment
                confirmation email before your scheduled visit.
              </p>
              <p>
                <b>To cancel or make changes to your request</b>, please give us
                a call at <a href="tel:+18001234567">1-800-123-4567</a>.
              </p>
            </div>
          </div>
        ) : (
          <div className="form">
            <div className="form-content">
              <div className="heading-text">
                <h2>You're eligible for a free LA Solar Panel Evaluation!</h2>
                <p>Please complete the form below to get started.</p>
              </div>
              <form className="request-form" onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  type="text"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="lname">Last Name</label>
                <input
                  id="lname"
                  type="text"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="address">Home Address</label>
                <input
                  id="address"
                  type="text"
                  required
                  onChange={(e) => setAddress(e.target.value)}
                />

                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  type="number"
                  required
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <h3>Choose Your Preferred Timeslot!</h3>
                <label htmlFor="date">Date</label>
                <input
                  id="date"
                  type="date"
                  required
                  onChange={(e) => setDate(e.target.value)}
                />

                <label htmlFor="timeslot">Timeslot</label>
                <select
                  name="timeslot"
                  htmlFor="timeslot"
                  onChange={(e) => setPreferredTime(e.target.value)}
                >
                  <option value="8AM-10AM">8 AM - 10 AM</option>
                  <option value="10AM-12PM">10 AM - 12 PM</option>
                  <option value="12PM-2PM">12 PM - 2 PM</option>
                  <option value="2PM-4PM">2 PM - 4 PM</option>
                </select>
                <p>
                  *Please note that preferred timeslots are requested but not
                  garaunteed.
                </p>

                <button type="submit">Submit</button>
                <button className="cancel" onClick={cancelRequest}>
                  Cancel Request
                </button>
              </form>
            </div>
          </div>
        )}

        <div className="form-imgs">
          <div className="building-img"></div>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7033.303859259271!2d-118.24563974879914!3d34.05356082842473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64f3b01358f%3A0x5723556b26dfefac!2sLos%20Angeles%20City%20Hall!5e0!3m2!1sen!2sus!4v1733266312319!5m2!1sen!2sus"
              title="LA City Hall"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </div>
      </div>
    </main>
  );
};

export default SolarForm;
