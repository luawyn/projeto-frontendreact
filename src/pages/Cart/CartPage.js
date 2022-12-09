import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Cart from "./Cart";
import EmptyCart from "./EmptyCart";

export default function CartPage() {
  const context = useContext(GlobalContext);

  const { cart } = context;
  let totalAmount = 0;
  cart.map((item) => (totalAmount = totalAmount + item.amount));
  return <div>{totalAmount === 0 ? <EmptyCart /> : <Cart />}</div>;
}
