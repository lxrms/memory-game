import { useState } from "react";
import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  const [clicked, setClicked] = useState(false)
  
  const handleClick = () => {
    if (!disabled && !clicked) {
      setClicked(true)
      handleChoice(card);
      setTimeout(() => setClicked(false), 500)
    }
    
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
