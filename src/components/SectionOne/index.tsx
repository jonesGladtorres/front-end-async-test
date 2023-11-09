import { StyleSectionOne, StyledAnchor, StyledDivButtonAndAnchor, StyledDivLeft } from "./style"
import imageMan from "../../assets/img/homem-segurando-tablet.png"
import Image from "next/image"
import { StyledDivSubTitle, StyledHyperLinkSectionOne, StyledParagraphSectionOne, StyledSubTitleSectionOne, StyledTitleSectionOne } from "@/styles/typography/sectionOne"
import { StyledButtonSectionOne } from "@/styles/buttons/style"
import playIcon from "../../assets/icons/play-icon.svg"
import plataformIcons from "../../assets/icons/plataform-icon.svg"

export const SectionOne = () => {
    return(
        <StyleSectionOne>
            <StyledDivLeft>
                <StyledDivSubTitle>
                    <Image src={plataformIcons} alt="Icone de vários dispositivos eletronicos"/>
                    <StyledSubTitleSectionOne>PLATAFORMA ALL IN ONE</StyledSubTitleSectionOne>
                </StyledDivSubTitle>
                <StyledTitleSectionOne>Sua escola online poderosa e lucrativa</StyledTitleSectionOne>
                <StyledParagraphSectionOne>Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.</StyledParagraphSectionOne>
                <StyledDivButtonAndAnchor>
                    <StyledButtonSectionOne>Começar agora</StyledButtonSectionOne>
                    <StyledAnchor>
                        <Image src={playIcon} alt="Icone de um Play"/>
                        <StyledHyperLinkSectionOne>Ver vídeo</StyledHyperLinkSectionOne>
                    </StyledAnchor>
                </StyledDivButtonAndAnchor>
            </StyledDivLeft>
            <Image src={imageMan} alt="Homem sorridente segurando um tablet"/>
        </StyleSectionOne>
    )
}