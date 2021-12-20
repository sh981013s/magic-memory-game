import './SingleCard.css';
import Back from '../img/cover.png';

const SingleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src={Back}
          onClick={handleClick}
          alt="card front"
        />
      </div>
    </div>
  );
};

export default SingleCard;
