import SocialIcons from './SocialIcons';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul className="first-col">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
              aut numquam fugiat excepturi.
            </li>
            <li>+1-543-123-4567</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What we do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; Copywright 2018 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
