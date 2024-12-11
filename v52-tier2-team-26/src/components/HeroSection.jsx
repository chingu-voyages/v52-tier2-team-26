import '../styling/herosection.css';
import Autocomplete from './Autcomplete';

const suggestions = [ "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grapes" ];

export default function HeroSection() {
    return (
        <div className = "hero-section-container">
            <p className = "golden-text">LA goes solar: Powered by community</p>
            <h1 class="big-print">LA's Solar Initiative is Here!</h1>
            <p class="small-print-two">Check if your qualify for a free solar evaluation and help
                <br />build a sustainable, greener future for Los Angeles!
            </p>
            <div className="row">
                    <Autocomplete suggestions = {suggestions} />
                    <button class = "btn">Take the First Step towards Solar</button>              
            </div>

        </div>
    );
}