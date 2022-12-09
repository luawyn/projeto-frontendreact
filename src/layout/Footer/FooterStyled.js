import styled from "styled-components";

export const Background = styled.div`
  background-color: #111111;
  width: 2000px;
`;

export const Container = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
  gap: 4rem;
  font-size: 12px;
  width: 1200px;
  margin: 0 auto;
  padding-top: 25px;
  padding-right: 30px;
  li {
    line-height: 30px;
    color: #999999;
  }
`;

export const Items = styled.ul`
  list-style: none;
`;

export const Color = styled.li`
  color: #ffffff !important;
`;

export const ColorGreen = styled.li`
  color: #47e10c !important;
  font-size: 14.4px !important;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  margin: 0 auto;
`;

export const Divider = styled.div`
  padding-top: 30px;
  border-bottom: #999999 solid 1px;
  width: 1200px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
  margin: 0 auto;
  width: 1200px;
  color: #999999;
  font-size: 12px;
  margin-top: 20px;
  span {
    color: #ffffff !important;
  }
  div {
    display: flex;
    gap: 20px;
    margin-right: 300px;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  width: 1200px;
  color: #999999;
  font-size: 12px;
  margin-top: 20px;
  a {
    text-decoration: none;
    color: #47e10c;
  }
  p {
    text-align: center;
    line-height: 30px;
  }
`;
