import React from 'react';
import YtVideo from "./YtVideo";
import iconTaste from '../assets/icon_taste.svg';
import '../styles/components/intro.scss';

export default function IntroSection({ onTasteClick }) {
    return (
        <section className="intro_section">
            <div>
                <div className="banner_video">
                    <YtVideo
                        videoId="8_4JRK4QkqU"
                        fillContainer={true}
                        autoPlay={true}
                        showPlayButton={false}
                    />
                </div>
                <button
                    className="button_taste"
                    onClick={onTasteClick}
                >
                    <img src={iconTaste} alt="TASTE US NOW!" className="icon_taste" />
                    TASTE US NOW!
                </button>
            </div>
        </section>
    );
}