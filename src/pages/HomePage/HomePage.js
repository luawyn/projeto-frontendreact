import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import {
  FlexRow,
  FlexRowItems,
  Items,
  Margin,
  Subtitle,
  SubtitleGreen,
  Texts,
  Title,
  TitleGreen,
  Container,
  NavbarProducts,
} from "./HomePageStyled";
import CardProduct from "../../components/CardProduct/CardProduct";
import laptop from "../../assets/laptops.png";
import components from "../../assets/components.png";
import mice from "../../assets/mouse.png";
import keyboard from "../../assets/keyboard.png";
import audio from "../../assets/headset.png";
import streaming from "../../assets/streaming.png";
import chair from "../../assets/chairs.png";
import console from "../../assets/console.png";
import mobile from "../../assets/mobile.png";
import gear from "../../assets/gear.png";

function HomePage() {
  const context = useContext(GlobalContext);
  const { products, buy, order, setOrder } = context;

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  return (
    <>
      <Margin>
        <Container>
          <NavbarProducts>
            <li>
              <img src={laptop} alt="Laptops" />
              <p>Laptops</p>
            </li>
            <li>
              <img src={components} alt="Components" />
              <p>Components</p>
            </li>
            <li>
              <img src={mice} alt="Mice" />
              <p>Mice</p>
            </li>
            <li>
              <img src={keyboard} alt="" />
              <p>Keyboards</p>
            </li>
            <li>
              <img src={audio} alt="" />
              <p>Audio</p>
            </li>
            <li>
              <img src={streaming} alt="" />
              <p>Streaming</p>
            </li>
            <li>
              <img src={chair} alt="" />
              <p>Chairs</p>
            </li>
            <li>
              <img src={console} alt="" />
              <p>Console</p>
            </li>
            <li>
              <img src={mobile} alt="" />
              <p>Mobile</p>
            </li>
            <li>
              <img src={gear} alt="" />
              <p>Gear</p>
            </li>
          </NavbarProducts>
        </Container>
        <Texts>
          <div>
            <TitleGreen>THE LATEST AND GREATEST GAMING GEAR</TitleGreen>
            <SubtitleGreen>
              RAZER MICE, KEYBOARDS, HEADSETS, LAPTOPS & MORE
            </SubtitleGreen>
          </div>
          <div>
            <Title>FRESH OFF THE LINE</Title>
            <FlexRow>
              <Subtitle>
                Check out our latest releases to secure the most up-to-date
                upgrades for your setup
              </Subtitle>
              <FlexRowItems>
                <p>Sort by: </p>
                <select onChange={handleOrder}>
                  <option value="Filter">Recommended</option>
                  <option value="Crescent">A-Z</option>
                  <option value="Descending">Z-A</option>
                  <option value="Lowest Price">Lowest Price</option>
                  <option value="Higher Price">Higher Price</option>
                </select>
              </FlexRowItems>
            </FlexRow>
          </div>
        </Texts>
      </Margin>
      <Items>
        {products
          .sort((productA, productB) => {
            if (order === "Lowest Price") {
              if (productA.price > productB.price) return 1;
              if (productA.price < productB.price) return -1;
            } else if (order === "Higher Price") {
              if (productA.price < productB.price) return 1;
              if (productA.price > productB.price) return -1;
            } else if (order === "Crescent") {
              if (productA.name < productB.name) return -1;
              if (productA.name > productB.name) return 1;
            } else if (order === "Descending") {
              if (productA.name > productB.name) return -1;
              if (productA.name < productB.name) return 1;
            } else {
              return 0;
            }
          })
          .map((product) => {
            return <CardProduct product={product} key={product.id} buy={buy} />;
          })}
      </Items>
    </>
  );
}

export default HomePage;
