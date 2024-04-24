import github from '../assets/github.svg';
import linkedIn from '../assets/linkedIn.svg';
import cssBattle from '../assets/cssBattle.svg';
import gmail from '../assets/gmail.svg';

const ContactIcons = () => {
  return (
    <div className="contact-icon-container">
      <a
        href="mailto:writetogaganprasad@gmail.com"
        title="Gmail"
      >
        <img
          src={gmail}
          alt="Gmail"
        />
      </a>
      <a
        href="https://github.com/gaganPrasadOnGitHub"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub"
      >
        <img
          src={github}
          alt="GitHub"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/gagan-prasad/"
        target="_blank"
        rel="noopener noreferrer"
        title="LinkedIn"
      >
        <img
          src={linkedIn}
          alt="LinkedIn"
        />
      </a>
      <a
        href="https://cssbattle.dev/player/gagan"
        target="_blank"
        rel="noopener noreferrer"
        title="CSS Battle"
      >
        <img
          src={cssBattle}
          alt="CSS Battle"
        />
      </a>
    </div>
  );
};

export default ContactIcons;
