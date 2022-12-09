import styled from "styled-components";

export const Image = styled.img`
  width: 300px;
  background-color: #222;
`;

export const CardContainer = styled.div`
  background-color: #3b3b3b;
  max-width: 300px;
  margin: 20px;
`;

export const TitleName = styled.div`
  color: #fff;
  font-size: 18px;
`;

export const Padding = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 200px;
  justify-content: space-between;
  color: #888888;
  font-size: 14px;
`;

export const Prices = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div`
  color: #eeeeee;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  background-color: #47e10c;
  color: #000000;
  padding: 5px 10px;
  border: #47e10c 2px solid;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #73e161;
  }
`;
