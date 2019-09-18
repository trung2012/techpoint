import { useState } from 'react';

export const useAddToCart = (actions, item) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleButtonClick = () => {
    setAddedToCart(true);
    actions.addItemToCart(item);
    setTimeout(() => {
      setAddedToCart(false);
    }, 350);
  }

  return { addedToCart, handleButtonClick };
}

