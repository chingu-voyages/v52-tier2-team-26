const SolarForm = () => {
  return (
    <main className="SolarForm">
      <div className="wrapper form-wrapper">
        <div className="form">
          <div className="form-content">
            <div className="heading-text">
              <h2>You're eligible for a free LA Solar Panel Evaluation!</h2>
              <p>Please complete the form below to get started.</p>
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
                *Please note that preferred timeslots are requested but not
                garaunteed.
              </p>

              <button type="submit">Submit</button>
              {/* TO DO: create function to set inputs blank & navigate to Home */}
              <button className="cancel">Cancel Request</button>
            </form>
          </div>
        </div>

        <div className="form-imgs">
          <div className="building-img"></div>
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7033.303859259271!2d-118.24563974879914!3d34.05356082842473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c64f3b01358f%3A0x5723556b26dfefac!2sLos%20Angeles%20City%20Hall!5e0!3m2!1sen!2sus!4v1733266312319!5m2!1sen!2sus"
              title="LA City Hall"
              width="100%"
              height="450"
              style={{border: 0}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </figure>
        </div>
      </div>
    </main>
  );
};

export default SolarForm;
