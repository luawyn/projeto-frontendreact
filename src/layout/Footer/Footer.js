import {
  Background,
  Container,
  Items,
  Color,
  ColorGreen,
  Links,
  Divider,
  Row,
  Contact,
} from "./FooterStyled";

function Footer() {
  return (
    <Background>
      <Container>
        <Items>
          <Color>Shop</Color>
          <li>RazerStores</li>
          <li>RazerCafe</li>
          <li>Store Locator</li>
          <li>Purchase Programs</li>
          <li>Education</li>
          <li>Exclusives</li>
          <li>RazerStore Rewards</li>
          <li>Newsletter</li>
        </Items>
        <Items>
          <Color>Explore</Color>
          <li>Technology</li>
          <li>Chroma RGB</li>
          <li>Concepts</li>
          <li> Esports</li>
          <li>Collabs</li>
        </Items>
        <Items>
          <Color>Support</Color>
          <li>Get Help</li>
          <li>Registration & Warranty</li>
          <li>RazerStore Support</li>
          <li>RazerCare</li>
          <li>Manage Razer ID</li>
          <li>Support Videos</li>
          <li>Accessibility Statement</li>
        </Items>
        <Items>
          <Color>Company</Color>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Room</li>
          <li>zVentures</li>
          <li>Contact Us</li>
        </Items>
        <Items>
          <ColorGreen>FOR GAMERS. BY GAMERS.™</ColorGreen>
          <Links>
            <li>
              <a
                href="https://www.facebook.com/razer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://assets2.razerzone.com/images/phoenix/SM0001-facebook.svg"
                  alt="instagram"
                  width={30}
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/razer/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://assets2.razerzone.com/images/phoenix/SM0003-instagram.svg"
                  alt="instagram"
                  width={30}
                />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Razer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://assets2.razerzone.com/images/phoenix/SM0005-twitter.svg"
                  alt="instagram"
                  width={30}
                />
              </a>
            </li>
          </Links>
        </Items>
      </Container>
      <Divider> </Divider>
      <Row>
        <li>Copyright © 2022 Razer Inc. All rights reserved.</li>
        <div>
          <li>Site Map</li>
          <li>|</li>
          <li>Legal Terms</li>
          <li>|</li>
          <li>Privacy Policy </li>
          <li>|</li>
          <li>Cookie Policy</li>
        </div>
        <li>
          <span>United States</span> | Change Location >
        </li>
      </Row>
      <Contact>
        <p>
          Razer Store by{" "}
          <a
            href="https://github.com/luawyn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Luawyn
          </a>
        </p>
        <p>
          This website is not produced, endorsed, supported, or affiliated with
          Razer.
        </p>
      </Contact>
    </Background>
  );
}

export default Footer;
