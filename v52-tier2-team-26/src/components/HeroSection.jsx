import '../styling/herosection.css';

export default function HeroSection({ addresses }) {
    return (
        <div className = "hero-section-container">
            <p className = "golden-text">LA goes solar: Powered by community</p>
            <h1 className="big-print">LA's Solar Initiative is Here!</h1>
            <p className="small-print-two">Check if your qualify for a free solar evaluation and help
                <br />build a sustainable, greener future for Los Angeles!
            </p>
            <div className="row">
                <input size= "40"
                    placeholder= "Enter Address Here">
                </input>
                <button className="btn">Take the First Step towards Solar</button>                
            </div>

        </div>
    );
}