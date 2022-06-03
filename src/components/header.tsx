import * as React from "react"
import styled from "styled-components"
import { theme } from "@styles"
const { fontSizes }  = theme;

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around
`

const Logo = styled.div`
    font-size: ${fontSizes.xxl}
`

const MenuBar = styled.div`
    color: var(--color-blueGray-500);
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-around
`

const Item = styled.li`
    font-size: ${fontSizes.lg};
    font-weight: 500;
    padding: 0 1rem;
`

const Switch = styled.div``

const Header = () => {
    return (
        <Head>
            <Logo>Nathan Nguyen</Logo>
            <MenuBar>
                <List>
                    <Item>Blog</Item>
                    <Item>Call</Item>
                    <Item>About</Item>
                </List>
            </MenuBar>
            <Switch>Dark Mode</Switch>
        </Head>
    )
};

export default Header