import { useState, useEffect } from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const SubscribeButton = ({ isSubscribed, onToggle }) => {
  const [subscribed, setSubscribed] = useState(isSubscribed); // Initialize subscribed state with prop value

  useEffect(() => {
    setSubscribed(isSubscribed); // Update subscribed state if the prop changes
  }, [isSubscribed]);

  const handleToggle = () => {
    const newSubscribed = !subscribed; // Toggle subscribed state
    setSubscribed(newSubscribed); // Update local state
    onToggle(newSubscribed); // Notify parent about the toggle
  };

  return (
    <button
      name="subscribe"
      onClick={handleToggle}
      aria-label={subscribed ? "Unsubscribe" : "Subscribe"}
      style={{
        backgroundColor: "transparent",
        border: "black",
        color: subscribed ? "yellow" : "black",
      }}
    >
      {subscribed ? <StarIcon style={{ fontSize: 30 }}/> : <StarBorderIcon style={{ fontSize: 30 }} />}
    </button>
  );
};

export default SubscribeButton;
