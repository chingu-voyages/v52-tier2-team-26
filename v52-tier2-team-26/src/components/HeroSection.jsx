import { useNavigate } from "react-router-dom";
import "../styling/herosection.css";
import Autocomplete from "./Autcomplete";

export default function HeroSection({ addresses }) {
    const navigate = useNavigate();

    return (
        <div className="hero-section-container">
            <div className="hero-text-wrapper">
                <p className="golden-text">LA goes solar: Powered by community</p>
                <h1 className="big-print">LA's Solar Initiative is Here!</h1>
                <p className="small-print-two">
                    Check if your qualify for a free solar evaluation and help
                    <br />
                    build a sustainable, greener future for Los Angeles!
                </p>
                <div className="row">
                    <Autocomplete suggestions={addresses} />
                    <button className="btn" onClick={() => navigate("apply")}>Take the First Step towards Solar</button>
                </div>
            </div>

        </div>
    );
}
