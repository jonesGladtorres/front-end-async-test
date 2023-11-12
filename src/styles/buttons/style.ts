import styled from "styled-components";

export const StyledButtonHeader = styled.button`
    border: 1px solid #FFF;
    border-radius: 80px;
    background-color: transparent;
    width: 10.5rem;
    height: 2.5rem;
    font-family: var(--font-inter);
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-1);
    color: var(--font-color-1);
    cursor: pointer;
    line-height: 105%;
    transition: transform 0.3s ease;
`

export const StyledButtonSectionOne = styled.button`
    border: 1px solid transparent;
    border-radius: 80px;
    background-color: var(--color-bg-button);
    width: 11.5rem;
    height: 3.5rem;
    font-size: var(--font-size-2);
    font-weight: var(--font-weight-3);
    color: var(--font-color-4);
    cursor: pointer;
    transition: transform 0.3s ease;
`

export const StyledButtonContainerScale = styled.div`
    transition: transform 0.3s ease;
    :hover{
        transform: perspective(1px) scale(1.0388);
    }
`