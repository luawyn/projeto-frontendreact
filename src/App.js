import { Main } from "./AppStyled";
import { GlobalContext } from "./context/GlobalContext";
import data from "./data.json";
import { useEffect, useState } from "react";
import Router from "./routes/Router";

export default function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(data.list);
  const [order, setOrder] = useState("");

  useEffect(() => {
    if (cart.length > 0) {
      const listCart = JSON.stringify(cart);
      localStorage.setItem("cart", listCart);
    }
  }, [cart]);

  useEffect(() => {
    const newCart = JSON.parse(localStorage.getItem("cart"));
    if (newCart !== null) {
      setCart(newCart);
    }
  }, []);

  const buy = (id) => {
    const i = cart.findIndex((item) => item.id === id);
    if (i !== -1) {
      const newCart = [...cart];
      newCart[i] = {
        ...newCart[i],
        amount: newCart[i].amount + 1,
      };
      setCart(newCart);
    } else {
      const productFound = products.find((product) => product.id === id);
      const newProduct = { ...productFound, amount: 1 };
      const newList = [...cart, newProduct];
      setCart(newList);
    }
  };

  const subtract = (id) => {
    const product = cart && cart.find((item) => item.id === id);
    if (product.amount > 1) {
      const newCart = cart.map((item) => {
        if (product.id === item.id && item.amount >= 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      const emptyCart = cart.filter((item) => item.id !== id);
      setCart(emptyCart);
      localStorage.clear();
    }
  };

  const remove = (id) => {
    const emptyCart = cart.filter((item) => item.id !== id);
    setCart(emptyCart);
    localStorage.clear();
  };

  const context = {
    cart,
    setCart,
    products,
    setProducts,
    buy,
    remove,
    order,
    setOrder,
    subtract,
  };

  return (
    <Main>
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </Main>
  );
}
