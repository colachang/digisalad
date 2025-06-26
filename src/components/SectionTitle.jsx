import React from 'react';
import '../styles/components/title.scss';

export default function SectionTitle({ text, darkMode = false, className = '' }) {
    return (
        <h3 className={`section_title${darkMode ? ' section_title--dark' : ''} ${className ? className : ''}`}>
            <span>{text}<span className="dot">.</span></span>
        </h3>
    );
}