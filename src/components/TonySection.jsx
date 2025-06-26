import '../styles/components/tony.scss';
import thumb from '../assets/tony.png';

export default function TonySection() {
    return (
        <section className="tony_section">
            <div>
                <div className="tony_content">
                    <img src={thumb} alt="Tony Ng" />
                    <h3>Tony Ng</h3>
                    <p>Founder & Creative Director</p>
                </div>
                <div className="tony_quote">
                    <p>A great digital work isn’t about designing beautiful pages purely. It is about context - how do we deliver the <em>right experience to the right person at the right time</em>. The most important thing is that your work can engage customers at anytime, anywhere and let users experience an entire amazing digital journey.</p>
                </div>
            </div>
        </section>
    );
}