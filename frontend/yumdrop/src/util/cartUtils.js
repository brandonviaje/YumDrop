export const calculateCartTotal = (cartItems, quantities) => {
  //Calculations
  const subTotal = cartItems.reduce(
    (acc, food) => acc + food.price * quantities[food.id],
    0
  );
  const shipping = subTotal === 0 ? 0.0 : 5;
  const tax = subTotal * 0.13; //13% tax
  const total = subTotal + shipping + tax;

  return { subTotal, shipping, tax, total };
};
