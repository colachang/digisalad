import React from 'react';
import YtVideo from "./YtVideo";
import VideoThumbnail from '../assets/video_thumbnail.png';
import '../styles/components/about.scss';
import SectionTitle from "./SectionTitle";

export default function AboutSection() {
    return (
        <section className="about_section">
            <SectionTitle text="ABOUT DIGISALAD" />
            <div className="about_video">
                <YtVideo
                    videoId="IeIRJ9jZ5Ro"
                    width="100%"
                    aspectRatio="16:9"
                    autoPlay={false}
                    showPlayButton={true}
                    previewImage={VideoThumbnail}
                />
            </div>
            <div className="about_content">
                <p>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacus, ac rhoncus neque eros nec lacus. Cras lobortis molestie faucibus.</p>
                <a className="more" href="#">VIEW MORE</a>
            </div>
        </section>
    );
}