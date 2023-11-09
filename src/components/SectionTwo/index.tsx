import Image from "next/image"
import { StyleDivFirstSectionTwo, StyleDivIconsSectionTwo, StyleDivIntoDivFirstSectionTwo, StyleSectionTwo, StyleUlSectionTwo, StyledLiSectionTwo } from "./style"
import verticalLine from "../../assets/icons/vertical-line.svg"
import { StyledDivIconsSectionTwo, StyledParagraphSectionTwo, StyledSubTitleSectionTwo, StyledTitleList, StyledTitleSectionTwo } from "@/styles/typography/sectionTwo"
import iconFold from "../../assets/icons/icon-folder.svg"
import iconPlaylist from "../../assets/icons/icon-playlists.svg"
import iconTrilher from "../../assets/icons/icon-trilhas.svg"


export const SectionTwo = () => {
    return(
        <StyleSectionTwo>
            <StyleDivFirstSectionTwo>
                <StyleDivIntoDivFirstSectionTwo>
                    <Image src={verticalLine} alt="Um icone de linha vertical"/>
                    <StyledSubTitleSectionTwo>PENSAMOS EM CADA DETALHE</StyledSubTitleSectionTwo>
                </StyleDivIntoDivFirstSectionTwo>
                <StyledParagraphSectionTwo>Conheça alguns dos nossos recursos  ⚡️</StyledParagraphSectionTwo>
            </StyleDivFirstSectionTwo>
            <StyledTitleSectionTwo>Queremos que o aluno se sinta confortável enquanto aprende</StyledTitleSectionTwo>
            <StyleDivIconsSectionTwo>
                <StyledDivIconsSectionTwo>
                    <Image src={iconFold}  alt={"Icone de uma pasta"}/>
                </StyledDivIconsSectionTwo>
                <StyledDivIconsSectionTwo>
                    <Image src={iconPlaylist} alt={"Icone de um play"}/>
                </StyledDivIconsSectionTwo>
                <StyledDivIconsSectionTwo>
                    <Image src={iconTrilher} alt={"Icone de uns documentos"}/>
                </StyledDivIconsSectionTwo>
            </StyleDivIconsSectionTwo>
            <StyleUlSectionTwo>
                <StyledLiSectionTwo>
                    <StyledTitleList>Trilhas de etapas</StyledTitleList>
                    <StyledParagraphSectionTwo>Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.</StyledParagraphSectionTwo>
                </StyledLiSectionTwo>
                <StyledLiSectionTwo>
                    <StyledTitleList>Trilhas de etapas</StyledTitleList>
                    <StyledParagraphSectionTwo>Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.</StyledParagraphSectionTwo>
                </StyledLiSectionTwo>
                <StyledLiSectionTwo>
                    <StyledTitleList>Trilhas de etapas</StyledTitleList>
                    <StyledParagraphSectionTwo>Crie planos de estudos especificando aulas e/ou cursos e definindo a ordem que seus alunos devem estudar.</StyledParagraphSectionTwo>
                </StyledLiSectionTwo>
            </StyleUlSectionTwo>
        </StyleSectionTwo>
    )
}