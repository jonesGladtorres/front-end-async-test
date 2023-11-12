import styled from "styled-components";

export const StyledModalLanguage = styled.div`
    border-radius: 0.5rem;
`

export const StyledLiModalLanguage = styled.button`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 3rem;
    width: 8.625rem;
    border: none;
    padding-left: 1.5625rem;
    background: var(--color-bg-secondary);
    cursor: pointer;
    &:hover{
        background: linear-gradient(90deg, #5F41D9 -880.48%, rgba(95, 65, 217, 0) 100%);
    }   
`

export const StyledUlModalLangauge = styled.div`
    display: flex;
    flex-direction: column;
`

export const CustomModal = styled.div`
    @media (max-width: 766px) {
        .ReactModal__Content {
            top: 17%;
            left: 70%;
        }
    }
`