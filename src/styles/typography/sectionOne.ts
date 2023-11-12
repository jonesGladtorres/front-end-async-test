import styled from "styled-components";

export const StyledTitleSectionOne = styled.h1`
    font-family: var(--font-inter);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-5);
    color: var(--font-color-1);
    width: 31.25rem;
    @media (max-width: 900px) {
        width: 100%;
    }
    @media (max-width: 450px) {
        font-size: 39px;
        text-align: center;
    }
    @media (max-width: 392px) {
        font-size: 35px;
    }
`

export const StyledParagraphSectionOne = styled.p`
    font-family: var(--font-inter);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
    color: var(--font-color-1);
    width: 26.25rem;
    line-height: 150%;
    opacity: 0.9;
    @media (max-width: 900px) {
        width: 100%;
    }
    @media (max-width: 450px) {
        font-size: 14px;
        text-align: center;
    }
`

export const StyledSubTitleSectionOne = styled.h3`
    font-family: var(--font-degular);
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-2);
    color: var(--font-color-1);
    line-height: 105%;
    letter-spacing: 2.4px;
    opacity: 0.75;
    @media (max-width: 450px) {
        font-size: 16px;
        text-align: center;
    }
`

export const StyledHyperLinkSectionOne = styled.span`
    font-family: var(--font-inter);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
    color: var(--font-color-1);
`

export const StyledDivSubTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: 450px) {
        justify-content: center;
        width: 100%;
    }
`