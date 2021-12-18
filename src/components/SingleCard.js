import './SingleCard.css';
import Back from '../img/cover.png';

const SingleCard = ({ card }) => {
  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src={Back} alt="card front" />
      </div>
    </div>
  );
};

export default SingleCard;
