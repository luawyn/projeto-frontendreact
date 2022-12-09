import styled from "styled-components";

export const Background = styled.div`
  background-color: #1c1c1b;
  width: 2000px;
`;

export const Background2 = styled.div`
  background-color: #222;
  width: 2000px;
  .teste {
    margin-top: 30px;
    border-top: solid 1px #292929;
    padding-bottom: 50px;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  color: #eeeeee;
  max-width: 1200px;
  margin: 0 auto;
  p {
    font-size: 14px;
  }
`;

export const Title = styled.span`
  font-size: 21px;
`;

export const Items = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #999999;
  max-width: 940px;
  margin: 0 auto;
  margin-left: 670px;
  padding-top: 40px;
  align-items: center;
  p {
    font-size: 14px;
  }
  h5 {
    font-size: 14px;
    font-weight: normal;
    text-align: right;
  }
  h2 {
    font-size: 18px;
    color: #fff;
    font-weight: normal;
  }
`;

export const Buttons = styled.div`
  .button {
    background-color: #47e10c;
    padding: 11px 28px;
    height: 40px;
    border: #47e10c 2px solid;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    :hover {
      background-color: #73e161;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 390px;
  padding-bottom: 40px;
`;
