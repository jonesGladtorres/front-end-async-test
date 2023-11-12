import styled from "styled-components";

export const StyledContainerModalSolution = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 3rem;
    width: 37.5rem;
    height: 15rem;
    padding: 10px;
`

export const StyledUlModalSolution = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 2rem;
    justify-content: space-between;
    justify-items: start;
    width: 100%;
`

export const StyledLiModalSolution = styled.li`
    cursor: pointer;
    gap: 1rem;
    transition: transform 0.3s ease 0s;
    &:hover{
        transform: translateY(2px);
        transition: transform 0.3s ease 0s;
    }
`

export const StyledDivContainerModalSolution = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`