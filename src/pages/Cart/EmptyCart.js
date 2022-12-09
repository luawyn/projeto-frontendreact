import { useNavigate } from "react-router-dom";
import { Container } from "./EmptyCartStyled";

export default function EmptyCart() {
  const navigate = useNavigate();
  function handleHome(navigate) {
    navigate("/");
  }
  return (
    <>
      <Container>
        <h1>Your cart is empty</h1>
        <p>Fear not, have a look at our latest products and start shopping.</p>
        <button onClick={() => handleHome(navigate)}>SHOP RAZER.COM</button>
      </Container>
    </>
  );
}
