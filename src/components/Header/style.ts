import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 5.5rem;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    background: rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(15px);
`

export const StyledNav = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 3rem;
`

export const StyledDivLogin = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
`

export const StyledSpanLogin = styled.span`
    display: flex;
    gap: 1rem;
    cursor: pointer;
`