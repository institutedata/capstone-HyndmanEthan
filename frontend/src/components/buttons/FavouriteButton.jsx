import { useState, useEffect } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteButton = ({ isFavorite, onToggle }) => {
  const [favorite, setFavorite] = useState(isFavorite); // Initialize favorite state with prop value

  useEffect(() => {
    setFavorite(isFavorite); // Update favorite state if the prop changes
  }, [isFavorite]);

  const handleToggle = () => {
    const newFavorite = !favorite; // Toggle favorite state
    setFavorite(newFavorite); // Update local state
    onToggle(newFavorite); // Notify parent about the toggle
  };

  return (
    <button
      name="favorite"
      onClick={handleToggle}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      style={{
        backgroundColor: "transparent",
        color: favorite ? "red" : "black", 
        border: "none",
      }}
    >
      {favorite ? <FavoriteIcon style={{ fontSize: 30 }} /> : <FavoriteBorderIcon style={{ fontSize: 30 }} />}
    </button>
  );
};

export default FavoriteButton;
