import styled from "styled-components"

export const StyledParagraphFooter = styled.p`
    font-family: var(--font-inter);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-2);
    color: var(--font-color-5);
    @media (max-width: 375px) {
        font-size: 14px;
    }
`

export const StyledHyperLinkFooter = styled.a`
    font-family: var(--font-inter);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-2);
    color: var(--font-color-2);
    text-decoration: none;
`