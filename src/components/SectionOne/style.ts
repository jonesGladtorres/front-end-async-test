import styled from "styled-components";

export const StyleSectionOne = styled.section`
    width: 100vw;
    height: 41rem;
    background: var(--color-bg-primary);
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 0 10%;
`

export const StyledDivLeft = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2.5rem;
`

export const StyledDivButtonAndAnchor = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
`

export const StyledAnchor = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`