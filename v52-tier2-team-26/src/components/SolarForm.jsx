const SolarForm = () => {
  return (
    <main className="SolarForm">
      <div className="wrapper form-wrapper">
        <div className="form">
          <div className="form-content">
            <div className="heading-text">
              <h2>You're eligible for a free LA Solar Panel Evaluation!</h2>
              <p>Please complete the form below to get started!</p>
            </div>
            <form className="request-form">
              <label for="fname">First Name</label>
              <input id="fname" type="text" required />

              <label for="lname">Last Name</label>
              <input id="lname" type="text" required />

              <label for="address">Home Address</label>
              <input id="address" type="text" required />

              <label for="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="john.doe@cityhall.com"
                //   onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label for="phone">Phone Number</label>
              <input id="phone" type="number" required />

              <h3>Choose Your Preferred Timeslot!</h3>
              <label for="date">Date</label>
              <input id="date" type="date" required />

              <label for="timeslot">Timeslot</label>
              <select name="timeslot" for="timeslot">
                <option value="8AM-10AM">8 AM - 10 AM</option>
                <option value="10AM-12PM">10 AM - 12 PM</option>
                <option value="12PM-2PM">12 PM - 2 PM</option>
                <option value="2PM-4PM">2 PM - 4 PM</option>
              </select>
              <p>
                Please note that preferred timeslots are requested but not
                garaunteed.
              </p>

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>

        <div className="form-imgs">
          <div className="building-img">{/* Building image goes here */}</div>
          <figure>{/* Google map goes here */}</figure>
        </div>
      </div>
    </main>
  );
};

export default SolarForm;
