import { useRef, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { menu } from '../utils/constant';
import useOutsideClick from '../hooks/useOutsideClick';
import CompanyIcons from './CompanyIcons';
import closeIcon from '../assets/close.svg';
import Loading from './Loading';

const About = lazy(() => import('./Popup/About'));
const Projects = lazy(() => import('./Popup/Projects'));

const Popup = ({ activePopup, handleOpenPopup, handleClosePopup }) => {
  const popupRef = useRef();
  useOutsideClick(popupRef, () => handleClosePopup());

  const renderContent = () => {
    switch (activePopup) {
      case menu.projects:
        return <Projects />;
      case menu.about:
        return <About />;
      default:
        return null;
    }
  };

  return (
    <>
      {activePopup && (
        <div className="overlay">
          <div
            className="popup"
            ref={popupRef}
          >
            <img
              className="close"
              onClick={handleClosePopup}
              title="Close"
              src={closeIcon}
              alt="Close"
            />
            <div className="popup-nav bold">
              <p
                className={`${
                  activePopup === menu.projects ? 'active' : ''
                } navigation-link`}
                onClick={() => handleOpenPopup(menu.projects)}
              >
                {menu.projects}
              </p>
              <p
                className={`${
                  activePopup === menu.about ? 'active' : ''
                } navigation-link`}
                onClick={() => handleOpenPopup(menu.about)}
              >
                {menu.about}
              </p>
            </div>
            <Suspense fallback={<Loading />}>{renderContent()}</Suspense>
          </div>
          <CompanyIcons />
        </div>
      )}
    </>
  );
};

Popup.propTypes = {
  activePopup: PropTypes.string,
  handleOpenPopup: PropTypes.func.isRequired,
  handleClosePopup: PropTypes.func.isRequired,
};

export default Popup;
