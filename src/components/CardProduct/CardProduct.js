import React from "react";
import {
  CardContainer,
  Image,
  Padding,
  TitleName,
  Prices,
  Price,
  Button,
} from "./CardProductStyled";

export default function CardProduct(props) {
  const { product, buy } = props;
  return (
    <CardContainer>
      <Image src={product.url} alt={product.name} />
      <Padding>
        <TitleName>{product.name}</TitleName>
        <p>{product.details}</p>
        <Prices>
          <Price>U${product.price}</Price>
          <Button onClick={() => buy(product.id)}>BUY</Button>
        </Prices>
      </Padding>
    </CardContainer>
  );
}
