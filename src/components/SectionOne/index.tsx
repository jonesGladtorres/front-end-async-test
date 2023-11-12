import { StyleSectionOne, StyledAnchor, StyledContainerImageSectionOna, StyledDivButtonAndAnchor, StyledDivLeft, StyledIconsSubHeaderSectionOne } from "./style"
import imageMan from "../../assets/img/homem-segurando-tablet.png"
import Image from "next/image"
import { StyledDivSubTitle, StyledHyperLinkSectionOne, StyledParagraphSectionOne, StyledSubTitleSectionOne, StyledTitleSectionOne } from "@/styles/typography/sectionOne"
import { StyledButtonContainerScale, StyledButtonSectionOne } from "@/styles/buttons/style"
import playIcon from "../../assets/icons/play-icon.svg"
import plataformIcons from "../../assets/icons/plataform-icon.svg"
import { StyledDivLoginContainer } from "../Header/style"
import playlistIcon1 from "../../assets/icons/icon-playlists1.svg"
import playlistIcon2 from "../../assets/icons/icon-playlists2.svg"
import certifiedIcon from "../../assets/icons/icon-certified.svg"

export const SectionOne = () => {
    return(
        <StyleSectionOne>
            <StyledIconsSubHeaderSectionOne>
                <Image src={playlistIcon1} alt="Icone de um playlist"/> 
                <Image src={certifiedIcon} alt="Icone de um certificado" height={100}/> 
                <Image src={playlistIcon2} alt="Icone de um playlist"/> 
            </StyledIconsSubHeaderSectionOne>
            <StyledDivLeft>
                <StyledDivSubTitle>
                    <Image src={plataformIcons} alt="Icone de vários dispositivos eletronicos"/>
                    <StyledSubTitleSectionOne>PLATAFORMA ALL IN ONE</StyledSubTitleSectionOne>
                </StyledDivSubTitle>
                <StyledTitleSectionOne>Sua escola online poderosa e lucrativa</StyledTitleSectionOne>
                <StyledParagraphSectionOne>Tenha sua própria escola online 100% white label com rede social, gamificação, clube de assinaturas, ecommerce e sistema EAD completo.</StyledParagraphSectionOne>
                <StyledDivButtonAndAnchor>
                    <StyledButtonContainerScale>
                        <StyledButtonSectionOne>Começar agora</StyledButtonSectionOne>
                    </StyledButtonContainerScale>
                    <StyledDivLoginContainer>
                        <StyledAnchor>
                            <Image src={playIcon} alt="Icone de um Play"/>
                            <StyledHyperLinkSectionOne>Ver vídeo</StyledHyperLinkSectionOne>
                        </StyledAnchor>
                    </StyledDivLoginContainer>
                </StyledDivButtonAndAnchor>
            </StyledDivLeft>
            <StyledContainerImageSectionOna>
                <Image src={imageMan} alt="Homem sorridente segurando um tablet" className="mainImage"/>
            </StyledContainerImageSectionOna>
        </StyleSectionOne>
    )
}