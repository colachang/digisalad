import '../styles/components/brand.scss';
import SectionTitle from "./SectionTitle";
import brand from '../assets/brand.png';

export default function BrandSection() {
    return (
        <section className="brand_section">
            <SectionTitle text="OUR BRAND EXPERIENCE" />
            <div className="brand_content">
                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
                <img src={brand} alt="OUR BRAND EXPERIENCE" />
            </div>
        </section>
    );
}