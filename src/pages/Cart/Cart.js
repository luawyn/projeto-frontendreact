import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardCart } from "../../components/CardCart/CardCart";
import { GlobalContext } from "../../context/GlobalContext";
import {
  Container,
  Title,
  Background,
  Items,
  FlexRow,
  Background2,
  Buttons,
  Button,
} from "./CartStyled";

function Cart() {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);

  const { cart, remove, buy, subtract } = context;

  function handleCheckout(navigate) {
    localStorage.clear();
    navigate("/checkout");
  }

  let totalPrice = 0;
  cart.map((item) => (totalPrice = totalPrice + item.price * item.amount));

  let totalAmount = 0;
  cart.map((item) => (totalAmount = totalAmount + item.amount));

  return (
    <Buttons>
      <Background>
        <Container>
          <span>
            <Title>Cart</Title> ({totalAmount} items)
          </span>
          <Items>
            US${totalPrice.toFixed(2)}
            <button className="button" onClick={() => handleCheckout(navigate)}>
              CHECKOUT
            </button>
          </Items>
        </Container>
      </Background>
      {cart.map((product, pos) => {
        return (
          <CardCart
            key={pos}
            id={product.id}
            url={product.url}
            name={product.name}
            amount={product.amount}
            price={product.price}
            details1={product.details1}
            details2={product.details2}
            details3={product.details3}
            details4={product.details4}
            details5={product.details5}
            deleteItem={remove}
            addItem={buy}
            subtractItem={subtract}
          />
        );
      })}
      <Background2>
        <FlexRow>
          <div>
            <p>Subtotal</p>
            <p>(Excludes local taxes)</p>
          </div>
          <p>US${totalPrice.toFixed(2)}</p>
        </FlexRow>
        <FlexRow>
          <p>Shipping</p>
          <div>
            <h5>To be calculated</h5>
            <h5>after address entry</h5>
          </div>
        </FlexRow>
        <FlexRow className="teste">
          <div>
            <h2>Estimated Total</h2>
            <p>
              Actual sales tax will be calculated later upon entry of your
              billing/shipping address.
            </p>
          </div>
          <div>
            <h2>US${totalPrice.toFixed(2)}</h2>
          </div>
        </FlexRow>
        <Button>
          <button className="button" onClick={() => handleCheckout(navigate)}>
            CHECKOUT
          </button>
        </Button>
      </Background2>
    </Buttons>
  );
}

export default Cart;
