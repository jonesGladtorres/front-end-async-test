import { StyledDivContainerModalSolution } from "@/components/Header/NavSolution/ModalSolution/style"
import { StyledParagraphModalSolution, StyledTitleLiModalSolution } from "@/styles/typography/modalSolution"
import Image from "next/image"
import socialIcon from "@/assets/icons/icon-social.svg"

type CardsSolutionProps = {
    color?: string
}

export const SocialSolution = ({color}: CardsSolutionProps) => {
    return(
        <>
            <StyledDivContainerModalSolution>
                <Image src={socialIcon} alt="Icone de mídias sociais"/>
                <div>
                    <StyledTitleLiModalSolution color={color}>Comunidade e rede social</StyledTitleLiModalSolution>
                    <StyledParagraphModalSolution color={color}>Lorem ipsum dolor sit amet</StyledParagraphModalSolution>
                </div>
            </StyledDivContainerModalSolution>
        </>
    )
}