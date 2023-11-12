import { StyledContainerModalSolution, StyledLiModalSolution, StyledUlModalSolution } from "./style"
import { StyledTitleModalSolution } from "@/styles/typography/modalSolution"
import { EadSolution } from "@/components/CardsSolution/EadSolution"
import { SocialSolution } from "@/components/CardsSolution/SocialSolution"
import { GamingSolution } from "@/components/CardsSolution/GamingSolution"
import { AppSolution } from "@/components/CardsSolution/AppSolution"


export const ModalSolution = () => {
    return (
        <div>
            <StyledContainerModalSolution>
                <StyledTitleModalSolution>SOLUÇÕES PRINCIPAIS</StyledTitleModalSolution>
                <StyledUlModalSolution>
                    <StyledLiModalSolution>
                        <EadSolution />
                    </StyledLiModalSolution>
                    <StyledLiModalSolution>
                       <SocialSolution />
                    </StyledLiModalSolution>
                    <StyledLiModalSolution>
                        <GamingSolution />
                    </StyledLiModalSolution>
                    <StyledLiModalSolution>
                        <AppSolution />
                    </StyledLiModalSolution>
                </StyledUlModalSolution>
            </StyledContainerModalSolution>
        </div>
    )
}