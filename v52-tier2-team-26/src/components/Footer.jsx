import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="wrapper">
        <div className="top-footer-section">
          <div className="team-members">
            <h4>Team</h4>
            <a target="blank" href="https://linkedin.com/in/matthew-neie">
              Matthew Neie
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/jordanjacksondeveloper/"
            >
              Jordan Jackson
            </a>
            <a target="blank" href="https://linkedin.com/in/charwaeericachong">
              Erica Chong
            </a>
            <a target="blank" href="https://www.linkedin.com/in/patrick-pate">
              Patrick Pate
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/lisa-rexroad-csm-sa-ccmp-b556511b/"
            >
              Lisa Rexroad
            </a>
            {/* <a target="blank" href="">Carolina</a>
            <a target="blank" href="">Val Lysenko</a>
            <a target="blank" href="">Teresa Green</a> */}
          </div>
          <div className="resident-links">
            <h4>Resident</h4>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Community Resources</p>
            <p>Community Forum</p>
            <p>Accessibility Information</p>
            <p>Help Desk</p>
          </div>
          <div className="community-links">
            <h4>Community Partners</h4>
            <p>Community Partner Portal</p>
            <p>Partner Support</p>
            <p>Join the Community</p>
            <p>Email us</p>
          </div>
          <form className="email-sign-up">
            <p>
              Not quite eligible? Sign up now and be the first to know when your
              city offers free consultation services!
            </p>
            <div className="button-container">
              <label htmlFor="email-input">Enter email:</label>
              <input type="email" placeholder="Email Address" />
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>

        <hr />
        <div className="bottom-footer-section">
          <div className="bottom-links">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Security</p>
            <p>Sitemap</p>
          </div>
          <div className="github-links">
            <a
              href="https://github.com/chingu-voyages/v52-tier2-team-26/"
              target="blank"
            >
              <FaGithub />
            </a>
            <p>
              <a
                href="https://github.com/chingu-voyages/v52-tier2-team-26/"
                target="blank"
              >
                Team 26 of Chingu Voyage 52
              </a>{" "}
              || &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
