import React from "react";
import Reviews from "./Reviews";
import "../styling/howto.css";

const HowTo = () => {
  return (
    <section className="HowTo">
      <div className="together-wrapper">
        <p className="why-statement">Why company a</p>
        <h1 className="together-statement">
          Together We Shine: Serving Residents & Community Partners
        </h1>
        <div className="residents-parters-container">
          <div className="residents-div">
            <div className="residents-img"></div>
            <div className="residents-info">
              <h3 className="residents-name">RESIDENTS</h3>
              <h3 className="residents-title">
                Bringing Solar to Your Doorstep
              </h3>
              <p className="residents-desc">
                We connect residents with trusted community partners to help you
                access free solar evaluations, reduce energy costs, and
                contribute to a greener, more sustainable future.
              </p>
            </div>
          </div>
          <div className="partners-div">
            <div className="partners-img"></div>
            <div className="partners-info">
              <h3 className="partners-name">COMMUNITY PARTNERS</h3>
              <h3 className="partners-title">
                Connecting Partners with Solar-Ready Residents
              </h3>
              <p className="partners-desc">
                We make it easy for community partners to reach residents
                interested in solar, helping you meet your goals of increasing
                solar adoption while driving a sustainable, planet-friendly
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="purpose-wrapper">
        <div className="purpose-container">
          <div className="save-div">
            <div className="save-img"></div>
            <div className="save-info">
              <h3 className="save-title">Save on Energy Bills</h3>
              <p className="save-desc">
                Solar panels can significantly lower your monthly electricity
                costs by harnessing the power of the sun, offering long-term
                savings for your home or business.
              </p>
            </div>
          </div>
          <div className="protect-div">
            <div className="protect-img"></div>
            <div className="protect-info">
              <h3 className="protect-title">Help Protect the Planet</h3>
              <p className="protect-desc">
                By choosing solar, you are reducing your carbon footprint and
                contributing to a cleaner, more sustainable environment for
                future generations.
              </p>
            </div>
          </div>
          <div className="independence-div">
            <div className="independence-img"></div>
            <div className="independence-info">
              <h3 className="independence-title">Energy Independence</h3>
              <p className="independence-desc">
                With solar, you are less reliant on external energy sources,
                giving you greater control over your energy needs and reducing
                vulnerability to energy price hikes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="process-wrapper">
        <div className="process-container">
          <div className="path-div">
            <h3 className="path-title">
              How It Works: Your Path to Free Solar Evaluation
            </h3>
            <p className="path-desc">
              We made it easy to see if you qualify for solar. Follow these
              simple steps to get started, receive personalized recommendations,
              and explore your options with no obligation.
            </p>
            <img
              src="https://img.freepik.com/premium-photo/cartoon-family-standing-front-house-with-solar-panels-roof-generative-ai_958192-26570.jpg"
              className="path-img"
              alt="A family walking into their house with solar panels"
            />
          </div>
          <div className="steps-div">
            <div className="steps-contact">
              <div className="steps-contact-title">
                <p className="steps-number">1</p>
                <h3 className="steps-title">Partner Contact</h3>
              </div>
              <p className="steps-desc">
                After submitting the form, a community partner will reach out to
                confirm your solar evaluation schedule. They will work with you
                to find a time that fits your availability.
              </p>
            </div>
            <div className="steps-audit">
              <div className="steps-audit-title">
                <p className="steps-number">2</p>
                <h3 className="steps-title">Solar Audit</h3>
              </div>
              <p className="steps-desc">
                A certified solar specialist will visit your home to conduct a
                thorough solar audit. They will assess your energy needs and the
                suitability of your property for a solar installation.
              </p>
            </div>
            <div className="steps-recommend">
              <div className="steps-recommend-title">
                <p className="steps-number">3</p>
                <h3 className="steps-title">Recommendations & No Obligation</h3>
              </div>
              <p className="steps-desc">
                After the audit, you will receive a detailed set of solar
                recommendations tailored to your home. There is no pressure to
                make a purchase -- just valuable insights to help you decide if
                solar is right for you.
              </p>
            </div>
            <div className="qualify-div">
              <button className="qualify-button">
                Find Out If You Qualify
              </button>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </section>
  );
};

export default HowTo;
