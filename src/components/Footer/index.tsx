import { StyledHyperLinkFooter, StyledParagraphFooter } from "@/styles/typography/footer"
import { StuledContainerTranslate, StyleDivIntoFooterLeft, StyleDivIntoFooterRight, StyleLineFooter, StyledFooter } from "./style"
import shipIcon from "../../assets/icons/ship-icon.svg"
import leftArrow from "../../assets/icons/left-arrow.svg"
import Image from "next/image"

export const Footer = () => {
    return(
        <>
            <StyleLineFooter />
            <StyledFooter>
                <StyleDivIntoFooterLeft>
                    <Image src={shipIcon} alt="Icone de uma nave espacial"/>
                    <StyledParagraphFooter>Veja todos os outros recursos disponíveis para te ajudar </StyledParagraphFooter>
                </StyleDivIntoFooterLeft>
                <StuledContainerTranslate>
                    <StyleDivIntoFooterRight>
                        <StyledHyperLinkFooter>Ver mais</StyledHyperLinkFooter>
                        <Image src={leftArrow} alt="Icone de uma seta para esquerda"/>
                    </StyleDivIntoFooterRight>
                </StuledContainerTranslate>
            </StyledFooter>
        </>
    )
}