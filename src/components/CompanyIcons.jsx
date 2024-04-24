import acronis from '../assets/acronis.svg';
import marmeto from '../assets/marmeto.avif';
import temairazu from '../assets/temairazu.png';

const CompanyIcons = () => {
  return (
    <div className="company-icons-container">
      <img
        title="Acronis"
        src={acronis}
        alt="Acronis"
        className="m-width-90"
      />
      <img
        title="Marmeto"
        src={marmeto}
        alt="Marmeto"
        className="m-width-90"
      />
      <img
        title="Temairazu"
        src={temairazu}
        alt="Temairazu"
        className="m-width-110"
      />
    </div>
  );
};

export default CompanyIcons;
