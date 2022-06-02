import * as React from "react"
import styled from "styled-components"

const HeaderPage = styled.div`
    display: flex
`

const Logo = styled.div`
    font-size: 25px
`

const Header = () => {
    return (
        <HeaderPage>
            <Logo>Nathan Nguyen</Logo>
        </HeaderPage>
    )
};

export default Header