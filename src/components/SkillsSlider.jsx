import { useMemo } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import HTMLIcon from '../components/Icons/GitHubIcon';
import CssIcon from '../components/Icons/CssIcon';
import JsIcon from '../components/Icons/JsIcon';
import TsIcon from '../components/Icons/TsIcon';
import VueIcon from '../components/Icons/VueIcon';
import ReactIcon from '../components/Icons/ReactIcon';
import ReduxIcon from '../components/Icons/ReduxIcon';
import ThreejsIcon from '../components/Icons/ThreejsIcon';
import OpenAiIcon from '../components/Icons/OpenAiIcon';
import ShopifyIcon from '../components/Icons/ShopifyIcon';
import GitIcon from '../components/Icons/GitIcon';
import GitHubIcon from '../components/Icons/GitHubIcon';
import BitBucketIcon from '../components/Icons/BitBucketIcon';
import ViteIcon from '../components/Icons/ViteIcon';
import WebpackIcon from '../components/Icons/WebpackIcon';
import DockerIcon from '../components/Icons/DockerIcon';
import FirebaseIcon from '../components/Icons/FirebaseIcon';
import HerokuIcon from '../components/Icons/HerokuIcon';
import FigmaIcon from '../components/Icons/FigmaIcon';
import PhotoShopIcon from '../components/Icons/PhotoShopIcon';
import RenderIcon from '../components/Icons/RenderIcon';

const skillsData = [
  { id: '1', title: 'HTML', icon: <HTMLIcon /> },
  { id: '2', title: 'CSS', icon: <CssIcon /> },
  { id: '3', title: 'JavaScript', icon: <JsIcon /> },
  { id: '15', title: 'TypeScript', icon: <TsIcon /> },
  { id: '6', title: 'Vue', icon: <VueIcon /> },
  { id: '4', title: 'React', icon: <ReactIcon /> },
  { id: '5', title: 'Redux', icon: <ReduxIcon /> },
  { id: '13', title: 'Three.js', icon: <ThreejsIcon /> },
  { id: '16', title: 'Open AI', icon: <OpenAiIcon /> },
  { id: '10', title: 'Shopify', icon: <ShopifyIcon /> },
  { id: '11', title: 'Git', icon: <GitIcon /> },
  { id: '12', title: 'Github', icon: <GitHubIcon /> },
  { id: '17', title: 'Bitbucket', icon: <BitBucketIcon /> },
  { id: '7', title: 'Vite', icon: <ViteIcon /> },
  { id: '8', title: 'Webpack', icon: <WebpackIcon /> },
  { id: '9', title: 'Docker', icon: <DockerIcon /> },
  { id: '14', title: 'Firebase', icon: <FirebaseIcon /> },
  { id: '18', title: 'Heroku', icon: <HerokuIcon /> },
  { id: '21', title: 'Render', icon: <RenderIcon /> },
  { id: '19', title: 'Figma', icon: <FigmaIcon /> },
  { id: '20', title: 'PhotoShop', icon: <PhotoShopIcon /> },
];

const settings = {
  type: 'loop',
  perPage: 8,
  perMove: 1,
  arrows: false,
  drag: 'free',
  interval: 2000,
  pagination: false,
  autoplay: true,
  speed: 1000,
  gap: '1rem',
  easing: 'linear',
  pauseOnHover: true,
  breakpoints: {
    1024: {
      perPage: 8,
    },
    700: {
      perPage: 6,
    },
    480: {
      perPage: 4,
    },
  },
};

const SkillsSlider = () => {
  const memoizedSettings = useMemo(() => settings, []);
  const memoizedSkillsData = useMemo(() => skillsData, []);

  return (
    <div className="slider-container">
      <Splide options={memoizedSettings}>
        {memoizedSkillsData.map((skill) => (
          <SplideSlide key={skill.id}>
            <div className="slider-slide">
              <span className="slider-icon">{skill.icon}</span>
              <small className="slider-title">{skill.title}</small>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default SkillsSlider;
