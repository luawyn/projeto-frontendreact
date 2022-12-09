import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 275px;
  align-items: center;
  justify-content: center;
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  gap: 10px;
  margin-bottom: 250px;
  h1 {
    font-size: 21px;
  }
  p {
    font-size: 14px;
    max-width: 240px;
    text-align: center;
    color: #999999;
  }
  button {
    margin-top: 20px;
    padding: 11px 24px;
    border-radius: 4px;
    font-weight: bold;
    background-color: #47e10c;
    cursor: pointer;
    :hover {
      background-color: #73e161;
    }
  }
`;
