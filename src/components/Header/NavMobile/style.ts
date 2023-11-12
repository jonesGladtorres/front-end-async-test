import styled from "styled-components";

export const StyledButtonNavMobile = styled.button`
    width: 32px;
    height: 20px;
    border: none;
    display: flex;
    cursor: pointer;
    background: none;
    position: relative;
    @media (min-width: 1025px) {
        display: none;
    }
`

export const StyledLinesButtonMobile = styled.span`
    width: 35px;
    display: block;
    border-radius: 1.875rem;
    background: white;
    border: 1px solid white;
`

export const StyledContainerLinesButtonMobile = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`