import styled from "styled-components"

export const StyleSectionTwo = styled.section`
    width: 100vw;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10%;
    justify-content: start;
    margin-top: 7.5rem;
    @media (max-width: 1150px) {
        margin-top: 2rem;
        height: 80vh;
    }
    @media (max-width: 565px) {
        height: 90vh;
    }
    @media (max-width: 405px) {
        height: 100vh;
    }
`

export const StyleDivFirstSectionTwo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
`

export const StyleDivIntoDivFirstSectionTwo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const StyleUlSectionTwo = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    @media (max-width: 1150px) {
        flex-direction: column;
        gap: 4rem;
        margin: 0;
    }
`

export const StyledLiSectionTwo = styled.li`
    width: 19rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    @media (max-width: 350px) {
        width: 14rem;
    }
`

export const StyleDivIconsSectionTwo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1150px) {
        flex-direction: column;
        align-items: end;
        justify-content: space-around;
    }
`

export const StyledContainerIconTextLang = styled.div`
    @media (min-width: 1150px) {
        width: 100%;
    }
    @media (max-width: 1150px) {
        display: flex;
        gap: 1rem;
        margin-top: 50px;
    }
`