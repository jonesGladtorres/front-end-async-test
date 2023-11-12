import styled from "styled-components"


export const StyledTitleSectionTwo = styled.h2`
    width: 100%;
    font-family: var(--font-degular);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-4);
    color: var(--font-color-4);
    display: flex;
    justify-content: start;
    margin-top: 1.5625rem;
`

export const StyledSubTitleSectionTwo = styled.span`
    font-family: var(--font-degular);
    font-weight: var(--font-weight-2);
    font-size: var(--font-size-2);
    color: var(--font-color-3);
    line-height: 105%;
    letter-spacing: 2.4px;
`

export const StyledParagraphSectionTwo = styled.p`
    font-family: var(--font-inter);
    font-weight: var(--font-weight-1);
    font-size: var(--font-size-2);
    color: var(--font-color-5);
    @media (max-width: 375px) {
        font-size: var(--font-size-1);
    }
`

export const StyledTitleList = styled.h3`
    font-family: var(--font-degular);
    font-weight: var(--font-weight-3);
    font-size: var(--font-size-3);
    color: var(--font-color-4);
`

export const StyledDivIconsSectionTwo = styled.div`
    width: 19rem;
    margin-top: 5rem;
    @media (max-width: 1150px) {
        display: flex;
        margin-top: 10px;
        justify-content: flex-end;
        width: 3rem;
    }
`