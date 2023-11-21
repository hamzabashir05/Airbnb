import React, { useState } from 'react';

const FavoriteButton = ({ onToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // Pass the current favorite state to a callback function
    onToggle(!isFavorite);
  };

  return (
    <button className={`favorite-button ${isFavorite ? 'favorited' : ''}`} onClick={handleToggleFavorite}>
      ❤️
    </button>
  );
};

export default FavoriteButton;