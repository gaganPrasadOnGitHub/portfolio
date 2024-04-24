import { useScrambleText } from '../hooks/useScrambleText';
import Navigation from './Navigation';

export const Landing = () => {
  const originalText1 = 'Namaste,';
  const originalText2 = 'I am';
  const originalText3 = 'Gagan';
  const originalText4 = 'Prasad';
  const originalText5 = 'Software';
  const originalText6 = 'DEVELOPER.';

  const scrambledText1 = useScrambleText(originalText1);
  const scrambledText2 = useScrambleText(originalText2);
  const scrambledText3 = useScrambleText(originalText3);
  const scrambledText4 = useScrambleText(originalText4);
  const scrambledText5 = useScrambleText(originalText5);
  const scrambledText6 = useScrambleText(originalText6);

  return (
    <div className="profile-section">
      <div className="profile-text">
        <p className="heading bold">
          <span>{scrambledText1}</span>{' '}
          <span className="outline">{scrambledText2}</span>
        </p>
        <p className="heading bold">
          <span className="highlight-color">{scrambledText3}</span>{' '}
          <span>{scrambledText4}</span>
        </p>
        <h1 className="main-heading">
          <span className="outline ">{scrambledText5}</span> {scrambledText6}
        </h1>
      </div>
      <Navigation />
    </div>
  );
};
