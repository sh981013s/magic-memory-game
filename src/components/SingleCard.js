import Back from '../img/cover.png';
import styled from 'styled-components';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <Card>
      <div className={flipped ? 'flipped' : ''}>
        <FrontImg
          className="front"
          src={card.src}
          alt="card front"
          flipped={flipped}
        />
        <BackImg
          className="back"
          src={Back}
          onClick={handleClick}
          alt="card front"
          flipped={flipped}
        />
      </div>
    </Card>
  );
};

const Card = styled.div`
  position: relative;

  img {
    width: 100%;
    display: block;
    border: 2px solid #fff;
    border-radius: 6px;
  }
`;

const FrontImg = styled.img`
  transform: ${(props) => (props.flipped ? `rotateY(0deg)` : `rotateY(90deg)`)};
  position: absolute;
  transition: 0.2s;
`;

const BackImg = styled.img`
  transition: 0.2s;
  visibility: ${(props) => (props.flipped ? `hidden` : `visible`)};
  transition-delay: ${(props) => (props.flipped ? '0s' : '.2s')};
`;

export default SingleCard;
