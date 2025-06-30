import React, { useState } from 'react';
import '../styles/components/work.scss';
import leftIcon from '../assets/arrow_left.svg';
import rightIcon from '../assets/arrow_right.svg';
import workLpClubImg from '../assets/work_lp_club.jpg';
import workAnotherImg from '../assets/work_another.jpg';

const projects = [
    {
        subtitle: 'HIGHLIGHTED SHOWCASE',
        title: 'LP CLUB MOBILE APP',
        description: `Cras quis nulla commodo, aliquam lectus sed, blandit augue.
Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare.
Phasellus at semper turpis.`,
        image: workLpClubImg,
    },
    {
        subtitle: 'HIGHLIGHTED SHOWCASE',
        title: 'ANOTHER PROJECT',
        description: `Example description for a second project.`,
        image: workAnotherImg,
    },
];

export default function WorkSection() {
    const [current, setCurrent] = useState(0);
    const total = projects.length;

    const prevSlide = () => {
        setCurrent((current - 1 + total) % total);
    };
    const nextSlide = () => {
        setCurrent((current + 1) % total);
    };

    const { subtitle, title, description, image } = projects[current];

    return (
        <section className="work_section">
            <div>
                <button className="arrow arrow--left" onClick={prevSlide}>
                    <img src={leftIcon} alt="Previous" />
                </button>
                <button className="arrow arrow--right" onClick={nextSlide}>
                    <img src={rightIcon} alt="Next" />
                </button>
                <div className="work_slider">
                    <div className="slide">
                        <img src={image} alt={title} />
                    </div>
                    <button className="btn view_project">
                        VIEW PROJECT <span className="underline" />
                    </button>
                </div>
                <div className="work_content">
                    <div className="work_index">
                        <span>
                            <span className="total">{String(current + 1).padStart(2, '0')}</span>
                            <span className="separator"></span>
                            <span className="current">{String(total).padStart(2, '0')}</span>
                        </span>
                    </div>
                    <div className="work_text">
                        <p className="subtitle">{subtitle}</p>
                        <h2 className="title"><span>{title}<span className="dot">.</span></span></h2>
                        <p className="description">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

