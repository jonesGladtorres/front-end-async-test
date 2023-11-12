import { StyledDivContainerModalSolution } from "@/components/Header/NavSolution/ModalSolution/style"
import { StyledParagraphModalSolution, StyledTitleLiModalSolution } from "@/styles/typography/modalSolution"
import Image from "next/image"
import eadIcon from "@/assets/icons/icon-ead.svg"

type CardsSolutionProps = {
    color?: string
}

export const EadSolution = ({color}: CardsSolutionProps) => {
    return(
        <>
            <StyledDivContainerModalSolution>
                <Image src={eadIcon} alt="Icone simbolizando metodo de estudo EAD"/>
                <div>
                    <StyledTitleLiModalSolution color={color}>Crie uma Escola Online</StyledTitleLiModalSolution>
                    <StyledParagraphModalSolution color={color}>Lorem ipsum dolor sit amet</StyledParagraphModalSolution>
                </div>
            </StyledDivContainerModalSolution>
        </>
    )
}