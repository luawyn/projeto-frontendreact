import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;

export const Margin = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleGreen = styled.p`
  color: #47e10c;
  font-size: 40px;
  font-weight: bold;
`;

export const SubtitleGreen = styled.p`
  color: #eeeeee;
  font-size: 21px;
`;

export const Title = styled.p`
  color: #eeeeee;
  font-size: 28px;
  font-weight: bold;
  margin: 40px 0 0 0;
`;

export const Subtitle = styled.p`
  color: #eeeeee;
  font-size: 21px;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexRowItems = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  p {
    color: #47e10c;
  }
  select:focus {
    outline: none !important;
    border: 1px solid #47e10c;
    background-color: black;
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  color: #eeeeee;
  margin-top: 80px;
`;

export const NavbarProducts = styled.div`
  display: flex;
  list-style: none;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  img {
    max-height: 75px;
    margin-bottom: 10px;
  }
  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
