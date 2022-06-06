import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";
// Icons
import { SunIcon, MoonIcon } from "./icons";

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

  .switch {
    width: 55px;
    height: 25px;
    background-color: var(--color-lightGray);
    display: flex;
    justify-content: flex-start;
    border-radius: 50px;
    padding: 0.2rem 0.3rem;
    cursor: pointer;

    &[data-isOn="true"] {
      background-color: var(--color-lightGreen);
    }
  }

  .switch[data-isOn="true"] {
    justify-content: flex-end;
  }

  .handle {
    width: 18px;
    height: 18px;
    background-color: white;
    border-radius: 40px;
  }
`;

const LINKS = [
  { name: "Blog", to: "/blog" },
  { name: "Work", to: "/work" },
  { name: "Call", to: "/call" },
  { name: "About", to: "/about" },
];

const Header = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

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
          <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </ToggleWrapper>
        <MoonIcon />
      </Switch>
    </Head>
  );
};

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};

export default Header;
