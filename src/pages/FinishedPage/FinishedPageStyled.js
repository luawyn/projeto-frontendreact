import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 500px;
  align-items: center;
  color: white;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  text-align: center;
  padding: 30px;
  margin-top: 40px;
  background-color: #575757;
  border-radius: 20px;
  border: #47e10c 1px solid;
  a {
    color: inherit;
    transition: 0.3s;
    display: inline-block;
  }
  a:hover {
    transform: translateY(-8px);
  }
  h1,
  h3 {
    color: #47e10c;
  }
  .icon {
    margin: 0 40px;
    font-size: 30px;
    cursor: pointer;
  }
`;
