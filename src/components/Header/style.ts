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
    z-index: 1;
    @media (max-width: 1300px) {
        padding: 0 30px;
    }
    @media (max-width: 1024px) {
        
    }
`

export const StyledNav = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 3rem;
    transition: transform 0.3s ease 0s;
    @media (max-width: 1024px) {
        display: none;
    }
`

export const StyledDivLogin = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    @media (max-width: 1024px) {
        display: none;
    }
`

export const StyleLiNavHeader = styled.li`
    transition: transform 0.3s ease 0s;
    &:hover{
        transform: translateY(2px);
        transition: transform 0.3s ease 0s;
    }
`

export const StyledDivLoginContainer = styled.div`
    transition: transform 0.3s ease 0s;
    &:hover{
        transform: translateY(2px);
        transition: transform 0.3s ease 0s;
    }
`

export const StyledSpanLogin = styled.span`
    display: flex;
    gap: 1rem;
    cursor: pointer;
`