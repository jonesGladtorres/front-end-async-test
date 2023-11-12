import styled from "styled-components";

export const StyleSectionOne = styled.section`
    width: 100vw;
    height: 41rem;
    background: var(--color-bg-primary);
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding: 0 10%;
    @media (max-width: 1290px) {
        padding: 0 30px;
    }
    @media (max-width: 900px) {
        flex-direction: column;
        height: 100vh;
    }
    @media (max-width: 450px) {
        padding: 0 20px;
    }
    @media (max-width: 350px) {
        padding: 0;
    }
`

export const StyledDivLeft = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2.5rem;
    @media (max-width: 1290px) {
        width: 40%;
    }
    @media (max-width: 900px) {
        height: 100vh;
        width: 100%;
        gap: 1rem;
        justify-content: flex-end;
    }
    @media (max-width: 350px) {
        padding: 0 10px;
    }
`

export const StyledDivButtonAndAnchor = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    @media (max-width: 900px) {
        width: 100%;
        justify-content: space-between;
    }
    @media (max-width: 450px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`

export const StyledAnchor = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
`

export const StyledIconsSubHeaderSectionOne = styled.div`
    position: absolute;
    top: 30px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 555px) {
        display: none;
    }
`

export const StyledContainerImageSectionOna = styled.div`
    /* width: 100%; */
    display: flex;
    @media (max-width: 900px) {
            align-items: flex-end;
            height: 90%;
            width: 90%;
        }
    @media (max-width: 555px) {
        width: 100%;
    }
    .mainImage {
        display: flex;
        justify-content: flex-end;
        @media (max-width: 1290px) {
            width: 100%;
        }
        @media (max-width: 900px) {
            height: 100%;
            align-items: flex-end;
            object-fit: cover;
        }
        @media (max-width: 555px) {
            width: 100%;
        }
    }

`