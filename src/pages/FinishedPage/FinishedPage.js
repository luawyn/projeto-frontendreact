import { FaLinkedin, FaGithub } from "react-icons/fa";

import { Container, Items } from "./FinishedPageStyled";

export default function FinishedPage() {
  const id = Date.now();

  return (
    <Container>
      <Items>
        <h1>Purchase ID: #{id}</h1>
        <h4>
          Thank you for your trust, follow your request by your profile and
          follow us on our social media
        </h4>
        <h3>Luawyn</h3>
        <div>
          <a
            className="icon"
            href="https://www.linkedin.com/in/luawyn/"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            className="icon"
            href="https://github.com/luawyn"
            rel="noreferrer noopener"
            target="_blank"
          >
            <FaGithub />
          </a>
        </div>
      </Items>
    </Container>
  );
}
