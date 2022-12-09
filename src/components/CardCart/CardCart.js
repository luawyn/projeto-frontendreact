import React from "react";
import { Container, Details } from "./CardCartStyled";

export function CardCart({
  id,
  url,
  name,
  amount,
  price,
  details1,
  details2,
  details3,
  deleteItem,
  addItem,
  subtractItem,
}) {
  const multiplier = price * amount;
  return (
    <Container>
      <img src={url} alt={name} />
      <Details>
        <p>{name}</p>
        <ul>
          <li>{details1}</li>
          <li>{details2}</li>
          <li>{details3}</li>
        </ul>

        <h6>Delivers</h6>
        <h5>Dec 08 - Dec 12 — US$10.00</h5>
        <h5>Dec 12 - Dec 14 — Free</h5>
      </Details>
      <div onClick={() => subtractItem(id)} className="cartbutton">
        -
      </div>
      <p>
        Qty <b>{amount}</b>
      </p>
      <div onClick={() => addItem(id)} className="cartbutton">
        +
      </div>
      <p>U${multiplier.toFixed(2)}</p>
      <div onClick={() => deleteItem(id)} className="remove">
        Remove
      </div>
    </Container>
  );
}
