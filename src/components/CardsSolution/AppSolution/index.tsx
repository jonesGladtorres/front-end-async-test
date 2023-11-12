import { StyledDivContainerModalSolution } from "@/components/Header/NavSolution/ModalSolution/style"
import { StyledParagraphModalSolution, StyledTitleLiModalSolution } from "@/styles/typography/modalSolution"
import Image from "next/image"
import appIcon from "@/assets/icons/icon-app.svg"

type CardsSolutionProps = {
    color?: string
}

export const AppSolution = ({color}: CardsSolutionProps) => {
    return(
        <>
            <StyledDivContainerModalSolution>
                <Image src={appIcon} alt="Icone de vários dispositivos moveis"/>
                <div>
                    <StyledTitleLiModalSolution color={color}>Aplicativo Mobile</StyledTitleLiModalSolution>
                    <StyledParagraphModalSolution color={color}>Lorem ipsum dolor sit amet</StyledParagraphModalSolution>
                </div>
            </StyledDivContainerModalSolution>
        </>
    )
}