import './SingleCard.css';
import Back from '../img/cover.png';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? 'flipped' : ''}>
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
