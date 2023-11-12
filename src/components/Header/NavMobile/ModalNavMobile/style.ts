import styled from "styled-components";

export const StyledContainerNavMobileModal = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient( 60deg,#16d4d9 -10%,#5f41d9 70% );
    padding: 20px 5%;
`

export const StyledHeaderNavMobileModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
`

export const StyledContainerSolutionNavMobileModal = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    border-top: 1px solid rgb(90, 147, 224);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 6.25rem;
`

export const StyledUlNavMobileModal = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 50%;
    margin-top: 40px;
`

export const StyledLiNavMobileModal = styled.div`
    height: 6.25rem;
    width: 100%;
    border-top: 1px solid rgb(90, 147, 224);
    display: flex;
    align-items: center;
    justify-content: center;
    &.endLi{
        border-bottom: 1px solid rgb(90, 147, 224);
    }
`

export const StyledParagraphNavMobileModal = styled.p`
    font-family: var(--font-inter);
    font-size: var(--font-size-3);
    font-weight: var(--font-weight-2);
    color: var(--color-bg-secondary);
`

export const StyledDivCloseModal = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const StyledCloseModal = styled.span`
    border-left: 1px solid white;
    padding-left: 20px;
    opacity: 0.9;
`