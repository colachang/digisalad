import React from 'react';
import '../styles/components/site_menu.scss';
import logoMenu from '../assets/logo_menu.svg';
import logo from '../assets/logo.svg';

export default function SiteMenu({ toggleSiteMenu, hideSiteMenu, isSiteMenuOpen }) {
    return (
        <nav className="site__menu">
            <div className="site__menu_main">

                <div className="hamburger">
                    <button
                        className="hamburger__btn"
                        onClick={toggleSiteMenu}>
                        <div className="hamburger__lines">
                            <span></span>
                        </div>
                    </button>
                </div>
                <button
                    className="site__menu_logo"
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        hideSiteMenu();
                    }}
                >
                    <img src={isSiteMenuOpen ? logo : logoMenu} alt="Company Logo" />
                </button>
                <ul className={isSiteMenuOpen ? 'site__menu_list' : 'site__menu_list site__menu_list--hidden'}>
                    <li><a href="#section1"></a></li>
                </ul>
            </div>
        </nav>
    );
}