import logo from './assets/logo.svg';
import AboutSection from './components/AboutSection';
import AwardsSection from './components/AwardsSection';
import IngredientsSection from './components/IngredientsSection';
import TonySection from './components/TonySection';
import BrandSection from './components/BrandSection';
import SiteMenu from './components/SiteMenu';
import { useRef, useState, useEffect } from 'react';
import IntroSection from './components/IntroSection';

function App() {
  const mainRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isSiteMenuOpen, setSiteMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTasteClick = () => {
    if (mainRef.current) {
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize
      );
      const offset = mainRef.current.offsetTop - 14 * rootFontSize;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  const toggleSiteMenu = () => {
    setSiteMenuOpen(prev => !prev);
  };

  const hideSiteMenu = () => {
    setSiteMenuOpen(false);
  };

  return (
    <>
      <div className={`site${isSticky ? ' header_sticky' : ''}${isSiteMenuOpen ? ' show_menu' : ''}`}>
        <header className="site__header">
          <div className="site__header_main">
            <img src={logo} alt="Company Logo" className="site__logo" />
            <h1 className="site__title">
              <span className="typing_line">WE CREATE</span>
              <span className="typing_line">AMAZING</span>
              <span className="typing_line">DIGITAL EXPERIENCES<span className="dot">.</span>
              </span>
            </h1>
          </div>
          <h2><span>DIGITAL AGENCY</span></h2>
        </header>
        <SiteMenu toggleSiteMenu={toggleSiteMenu} hideSiteMenu={hideSiteMenu} isSiteMenuOpen={isSiteMenuOpen} />
        <IntroSection onTasteClick={handleTasteClick} />
        <main ref={mainRef} className="site__main">
          <AboutSection />
          <AwardsSection />
          <IngredientsSection />
          <TonySection />
          <BrandSection />
        </main>
      </div>
    </>
  )
}

export default App;
