export const generateCartAfterAddingItem = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => cartItem._id === item._id)

  if (existingItem) {
    return cartItems.map(cartItem => {
      return cartItem._id === item._id ? { ...item, quantity: cartItem.quantity + 1 } : cartItem
    })
  }

  return [...cartItems, { ...item, quantity: 1 }]
}

export const generateCartAfterRemovingItem = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => cartItem._id === item._id)

  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem._id !== item._id)
  }

  return cartItems.map(cartItem => {
    return cartItem._id === item._id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
  })
}

export const generateUserCartBeforeMerge = (stateCart, userCart) => {
  userCart.forEach(userCartItem => {
    const existingStateCartItem = stateCart.find(stateCartItem => stateCartItem._id === userCartItem._id)
    if (existingStateCartItem) {
      userCartItem.quantity += existingStateCartItem.quantity
      stateCart = stateCart.filter(stateCartItem => stateCartItem._id !== existingStateCartItem._id)
    }
  })

  return [...userCart, ...stateCart];
}