import { SiRazer } from "react-icons/si";
import { BsCart2 } from "react-icons/bs";
import { Ad, Border, Links, List, LogoRazer } from "./NavbarStyled";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

export default function Navbar() {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();
  const { cart } = context;
  function handleHome(navigate) {
    navigate("/");
  }

  function handleCart(navigate) {
    navigate("/cart");
  }
  let totalAmount = 0;
  cart.map((item) => (totalAmount = totalAmount + item.amount));

  return (
    <>
      <Border id="navbar">
        <List>
          <li>
            <LogoRazer onClick={() => handleHome(navigate)}>
              <SiRazer />
            </LogoRazer>
          </li>
          <li>PC</li>
          <li>Console</li>
          <li>Mobile</li>
          <li>Lifestyle</li>
          <li>Services</li>
          <li>Community</li>
          <li>Support</li>
          <li>
            <Links onClick={() => handleHome(navigate)}>Store</Links>
          </li>
          <li className="cart">
            <Links onClick={() => handleCart(navigate)}>
              <BsCart2 />
              {totalAmount !== 0 ? (
                <div className="cartAmount">{totalAmount}</div>
              ) : (
                ""
              )}
            </Links>
          </li>
        </List>
      </Border>
      <Ad>
        All orders over US$49 will enjoy free standard shipping to the United
        States.
      </Ad>
    </>
  );
}
