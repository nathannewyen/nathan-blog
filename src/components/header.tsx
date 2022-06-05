import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Icons
import { MoonIcon } from "./icons/moon-icon";
import { SunIcon } from "./icons/sun-icon";

const Head = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Logo = styled.div`
  font-size: var(--fz-h2);
  font-weight: 600;
  color: var(--color-white);
`;

const MenuBar = styled.div`
  color: var(--color-blueGray);
`;

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Item = styled.li`
  font-size: var(--fz-xl);
  font-weight: 600;
  padding: 0 1rem;

  a {
    &:hover {
      color: var(--color-white);
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: var(--color-white);
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  }
`;

const Switch = styled.div`
  display: flex;
  justify-content: center;
`;

const ToggleWrapper = styled.div`
  margin: 0 10px;
`;

const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  position: absolute;
  &:checked + label {
    background: var(--color-green);
  }
  &:checked + label:after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;

const Label = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 45px;
  height: 25px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
  &:after {
    @include transition;
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 19px;
    height: 19px;
    background: #fff;
    border-radius: 100%;
  }
`;

const LINKS = [
  { name: "Blog", to: "/blog" },
  { name: "Work", to: "/work" },
  { name: "Call", to: "/call" },
  { name: "About", to: "/about" },
];

const Header = () => {
  return (
    <Head>
      <Logo>Nathan Nguyen</Logo>
      <MenuBar>
        <List>
          {LINKS.map((link) => (
            <Item key={link.to}>
              <Link to={link.to}>{link.name}</Link>
            </Item>
          ))}
        </List>
      </MenuBar>
      <Switch>
        <SunIcon />
        <ToggleWrapper>
          <Input type="checkbox" />
          <Label htmlFor="switch">Toggle</Label>
        </ToggleWrapper>
        <MoonIcon />
      </Switch>
    </Head>
  );
};

export default Header;
