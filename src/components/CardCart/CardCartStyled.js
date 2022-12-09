import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 170px;
  }
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 30px;
  border-bottom: solid 0.1px #292929;
  color: #999999;
  .cartbutton,
  .remove {
    cursor: pointer;
  }
  .cartbutton {
    font-weight: bold;
    color: #fff;
  }
`;

export const Details = styled.div`
  width: 560px;
  p {
    margin-bottom: 15px;
    color: #fff;
    font-size: 18px;
  }
  ul {
    margin-left: 20px;
    line-height: 20px;
    font-size: 14px;
    margin-bottom: 25px;
  }
  h6 {
    font-size: 14px;
    font-weight: normal;
  }
  h5 {
    font-size: 14px;
    font-weight: normal;
    margin-left: 20px;
  }
`;
