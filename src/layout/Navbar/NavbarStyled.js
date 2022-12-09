import styled from "styled-components";

export const Border = styled.div`
  border-bottom: #47e10c solid 1px;
  width: 2000px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  width: 1200px;
  margin: 0 auto;
  color: #888888;
  height: 70px;
  .cart {
    position: relative;
    width: 30px;
  }
  .cartAmount {
    font-size: 11px;
    background-color: #47e10c;
    color: black;
    font-weight: bold;
    border-radius: 100%;
    text-align: center;
    position: absolute;
    width: 16px;
    top: -10px;
    right: 0;
  }
`;

export const Links = styled.a`
  text-decoration: none;
  color: #ffffff;
  cursor: pointer;
  svg {
    color: #888888;
    font-size: 20px;
  }
  svg:hover {
    color: #ffffff;
  }
`;

export const LogoRazer = styled.a`
  font-size: 40px;
  color: #47e10c;
  cursor: pointer;
`;

export const Ad = styled.p`
  background-color: #555555;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #eeeeee;
  width: 2000px;
`;
