import { useState } from 'react';
import { menu } from '../utils/constant';
import { useScrambleText } from '../hooks/useScrambleText';
import Popup from './Popup';

const Navigation = () => {
  const [activePopup, setActivePopup] = useState(null);

  const handleOpenPopup = (section) => {
    setActivePopup(section);
  };

  const handleClosePopup = () => {
    setActivePopup(null);
  };

  const projectsText = useScrambleText(menu.projects);
  const infoText = useScrambleText(menu.about);

  return (
    <>
      <div className="navigation">
        <p
          className="navigation-link"
          onClick={() => handleOpenPopup(menu.projects)}
        >
          {projectsText}
        </p>

        <p
          className="navigation-link"
          onClick={() => handleOpenPopup(menu.about)}
        >
          {infoText}
        </p>
      </div>
      <Popup
        activePopup={activePopup}
        handleOpenPopup={handleOpenPopup}
        handleClosePopup={handleClosePopup}
      />
    </>
  );
};

export default Navigation;
