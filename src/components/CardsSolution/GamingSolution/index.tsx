import { StyledDivContainerModalSolution } from "@/components/Header/NavSolution/ModalSolution/style"
import { StyledParagraphModalSolution, StyledTitleLiModalSolution } from "@/styles/typography/modalSolution"
import Image from "next/image"
import gamingIcon from "@/assets/icons/icon-gamification.svg"

type CardsSolutionProps = {
    color?: string
}

export const GamingSolution = ({color}: CardsSolutionProps) => {
    return(
        <>
            <StyledDivContainerModalSolution>
                <Image src={gamingIcon} alt="Icone de uma medalha de jogos diversos"/>
                <div>
                    <StyledTitleLiModalSolution color={color}>Gamificação</StyledTitleLiModalSolution>
                    <StyledParagraphModalSolution color={color}>Lorem ipsum dolor sit amet</StyledParagraphModalSolution>
                </div>
            </StyledDivContainerModalSolution>
        </>
    )
}