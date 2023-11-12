import styled from "styled-components";

export const StyledTitleModalSolution = styled.h3`
    color: var(--font-color-2);
    font-family: var(--font-degular);
    font-size: 14px;
    font-weight: var(--font-weight-3);
    line-height: 15px;
    letter-spacing: 0.15em;
`

export const StyledTitleLiModalSolution = styled.h3`
    font-family: var(--font-degular);
    font-size: var(--font-size-1);
    font-weight: var(--font-weight-3);
    line-height: 19px;
    letter-spacing: 0.005em;
    ${({color}) => {
        switch (color) {
            case 'white':
                return 'color: #ffffff;'
            default:
                return 'color: #130C25'
        }
    }}
`

export const StyledParagraphModalSolution = styled.p`
    font-family: var(--font-inter);
    font-size: 13px;
    font-weight: var(--font-weight-1);
    line-height: 20px;
    opacity: 0.9;
    ${({color}) => {
        switch (color) {
            case 'white':
                return 'color: #ffffff;'
            default:
                return 'color: #423D51;'
        }
    }}
`