import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 0 10%;
    height: 10rem;
    display: flex;
    justify-content: space-between;
    margin-top: 1.800rem;
    align-items: start;
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export const StyleLineFooter = styled.hr`
    margin: 0 10%;
    background-color: #E7E7E9;
`

export const StyleDivIntoFooterLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    @media (max-width: 768px) {
        width: 70%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }
`

export const StyleDivIntoFooterRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    cursor: pointer;
    transition: transform 0.3s ease 0s;
`

export const StuledContainerTranslate = styled.div`
    transition: transform 0.3s ease 0s;
    &:hover{
        transform: translateX(5px);
        transition: transform 0.3s ease 0s;
    }
`