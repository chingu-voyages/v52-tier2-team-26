import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='Footer'>
      <div className='team-members'>
        {/* TO DO: Use Link component to hyperlink */}
        <p>Member 1</p>
        <p>Member 2</p>
        <p>Member 3</p>
      </div>
      <div className='resident-links'>
        <p>Contact Us</p>
        <p>FAQs</p>
        <p>Community Resources</p>
      </div>
      <div className='community-links'>
        <p>Community Partner Portal</p>
        <p>Join the Community</p>
        <p>Email us</p>
      </div>
      <form className='email-sign-up'>
        <p>Not quite eligible? Sign up now and be the first to know when your city offers free consultation services!</p>
        <label htmlFor='email-input'>Enter email:</label>
        <input type='email' placeholder='Enter Email Address'/>
        <button type='submit'>Sign Up</button>
      </form>

      <hr />
      <div className='bottom-footer-section'>
        <div className='bottom-links'>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Security</p>
        </div>
        <div className='github-links'>
            <FaGithub />
            <p>Project Repo on GitHub</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
