import { useEffect, useState } from 'react';
import CarCanvas from '../Background/CarCanvas';
import ContactIcons from '../ContactIcons';
import SkillsSlider from '../SkillsSlider';

const About = () => {
  const fallbackRank = '9';
  const [rank, setRank] = useState(() => {
    return sessionStorage.getItem('rank') || fallbackRank;
  });

  useEffect(() => {
    const fetchRank = async () => {
      if (sessionStorage.getItem('rank')) return;

      try {
        const response = await fetch(
          'https://us-central1-cssbattleapp.cloudfunctions.net/getRank?userId=JuKYCmI8bJUohlnGQ9cQlkrSU752'
        );
        if (response.ok) {
          const data = await response.json();
          sessionStorage.setItem('rank', data.rank);
          setRank(data.rank);
        }
      } catch (error) {
        console.error('Error fetching rank:', error);
        setRank(fallbackRank);
        sessionStorage.setItem('rank', fallbackRank);
      }
    };

    fetchRank();
  }, []);

  return (
    <>
      <div className="overflow-container about">
        <SkillsSlider />
        <div className="about-text">
          <p>
            Namaste, {`I'm`} Gagan Prasad, a focused Frontend Software Developer
            I bring over {new Date().getFullYear() - 2021} years of professional
            experience and personal passion to my work, also currently holding a
            global rank {rank} at{' '}
            <a
              href="https://cssbattle.dev/leaderboard"
              target="_blank"
              rel="noopener noreferrer"
              title="cssBattle"
            >
              cssBattle
            </a>
            .
          </p>
          <p className="text-center">
            Ever-evolving through learning, innovating, and developing all while
            spreading smiles {':)'}
          </p>
        </div>
        <ContactIcons />
      </div>
      <CarCanvas />
    </>
  );
};

export default About;
