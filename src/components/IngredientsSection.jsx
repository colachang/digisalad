import React, { useEffect, useRef } from 'react';
import '../styles/components/ingredients.scss';
import SectionTitle from "./SectionTitle";
import i01 from '../assets/ingredient_001.png';
import i02 from '../assets/ingredient_002.png';
import i03 from '../assets/ingredient_003.png';
import i04 from '../assets/ingredient_004.png';
import i05 from '../assets/ingredient_005.png';
import i06 from '../assets/ingredient_006.png';
import i07 from '../assets/ingredient_007.png';
import i08 from '../assets/ingredient_008.png';
import i09 from '../assets/ingredient_009.png';

export default function IngredientsSection() {
    const listRef = useRef(null);

    useEffect(() => {
        const list = listRef.current;
        if (!list) return;
        const items = list.querySelectorAll('li');
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '0px 0px 10% 0px',
                threshold: 0.1,
            }
        );
        items.forEach(item => observer.observe(item));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="ingredients_section">
            <SectionTitle text="OUR INGRADIENTS" darkMode />
            <div className="ingredients_content">
                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
            </div>
            <div className="ingredients_list" ref={listRef}>
                <h4 className="services">OUR SERVICES</h4>
                <ul>
                    <li>
                        <div className="icon"><img src={i01} alt="UX Design" /></div>
                        <h5>UX Design</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                    <li>
                        <div className="icon"><img src={i02} alt="UI Design" /></div>
                        <h5>UI Design</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                    <li>
                        <div className="icon"><img src={i03} alt="website development" /></div>
                        <h5>website development</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                    <li>
                        <div className="icon"><img src={i04} alt="mobile app development" /></div>
                        <h5>mobile app development</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                    <li>
                        <div className="icon"><img src={i05} alt="ecommerce" /></div>
                        <h5>ecommerce</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                    <li>
                        <div className="icon"><img src={i06} alt="customer loyalty" /></div>
                        <h5>customer loyalty</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                    <li>
                        <div className="icon"><img src={i07} alt="digital transformation" /></div>
                        <h5>digital transformation</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                    <li>
                        <div className="icon"><img src={i08} alt="digital marketing" /></div>
                        <h5>digital marketing</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                    <li>
                        <div className="icon"><img src={i09} alt="BRANDING" /></div>
                        <h5>BRANDING</h5>
                        <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.</p>
                        <a className="more" href="#">VIEW MORE</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}