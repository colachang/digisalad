import '../styles/components/awards.scss';
import SectionTitle from "./SectionTitle";
import logo from '../assets/awards.png';

export default function AwardsSection() {
    return (
        <section className="awards_section">
            <div>
                <div className="awards_content">
                    <SectionTitle text="AWARDS" className='h3' />
                    <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. </p>
                </div>
                <div className="awards_logos">
                    <img src={logo} alt="Award Logo 1" />
                    <img src={logo} alt="Award Logo 2" />
                    <img src={logo} alt="Award Logo 3" />
                    <img src={logo} alt="Award Logo 4" />
                </div>
            </div>
        </section>
    );
}