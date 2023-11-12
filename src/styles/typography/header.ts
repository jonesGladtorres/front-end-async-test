import styled from "styled-components"

export const StyledNavHeader = styled.a`
    font-family: var(--font-inter);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-1);
    color: var(--font-color-1);
    cursor: pointer;
    opacity: 0.9;
    line-height: 105%;
    
`

export const StyledLoginHeader = styled.span`
    font-family: var(--font-inter);
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-1);
    color: var(--font-color-1);
`

export const StyledSpanLang = styled.span`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    position: relative;
`

export const StyledLiService = styled.li`
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    cursor: pointer;
    height: 10px;
    transition: transform 0.3s ease 0s;
`