import React from 'react';
import '../styles/components/sitemenu.scss';
import logoMenu from '../assets/logo_menu.svg';
import logo from '../assets/logo.svg';
import item01 from '../assets/menu_01.png';
import item02 from '../assets/menu_02.png';
import item03 from '../assets/menu_03.png';
import item04 from '../assets/menu_04.png';
import item05 from '../assets/menu_05.png';

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
                <div className={isSiteMenuOpen ? 'site__menu_list' : 'site__menu_list site__menu_list--hidden'}>
                    <div>
                        <ul className="site__menu_ul">
                            <li className="site__menu_ul_li">
                                <a href="#">
                                    <div className="icon">
                                        <img src={item01} alt="ABOUT US" />
                                    </div>
                                    <div className="content">
                                        <div className="label">ABOUT US<span className="dot">.</span></div>
                                        <div className="text">EMPOWERING BRANDS</div>
                                    </div>
                                </a>
                            </li>
                            <li className="site__menu_ul_li">
                                <a href="#">
                                    <div className="icon">
                                        <img src={item02} alt="WORKS" />
                                    </div>
                                    <div className="content">
                                        <div className="label">WORKS<span className="dot">.</span></div>
                                        <div className="text">CASE STUDIES</div>
                                    </div>
                                </a>
                            </li>
                            <li className="site__menu_ul_li">
                                <a href="#">
                                    <div className="icon">
                                        <img src={item03} alt="CAREERS" />
                                    </div>
                                    <div className="content">
                                        <div className="label">CAREERS<span className="dot">.</span></div>
                                        <div className="text">BE COOL WITH US</div>
                                    </div>
                                </a>
                            </li>
                            <li className="site__menu_ul_li">
                                <a href="#">
                                    <div className="icon">
                                        <img src={item04} alt="INSIGHTS" />
                                    </div>
                                    <div className="content">
                                        <div className="label">INSIGHTS<span className="dot">.</span></div>
                                        <div className="text">OUR STRATEGIES</div>
                                    </div>
                                </a>
                            </li>
                            <li className="site__menu_ul_li">
                                <a href="#">
                                    <div className="icon">
                                        <img src={item05} alt="SERVICES" />
                                    </div>
                                    <div className="content">
                                        <div className="label">SERVICES<span className="dot">.</span></div>
                                        <div className="text">AREAS OF EXPERTISE</div>
                                    </div>
                                </a>
                            </li>
                            <li className="site__menu_ul_li">
                                <a href="#">
                                    <div className="content">
                                        <div className="label">CONTACT<span className="dot">.</span></div>
                                        <div className="text">START YOUR JOURNEY WITH US</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}