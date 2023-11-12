import { HandleLogin } from "../../HandleLogin"
import { SpanLanguage } from "../../SpanLanguage"
import Image from "next/image"
import { StyledCloseModal, StyledContainerNavMobileModal, StyledDivCloseModal, StyledHeaderNavMobileModal } from "./style"
import closeIcon from "../../../../assets/icons/close-icon.svg"
import { AccordionModalMobile } from "./AccordionModalMobile"


export const ModalNavMobile = ({ setIsOpen }: any) => {
    return(
        <div>
            <StyledContainerNavMobileModal>
                <StyledHeaderNavMobileModal>
                    <HandleLogin />
                    <StyledDivCloseModal>
                        <SpanLanguage />
                        <StyledCloseModal onClick={() => setIsOpen(false)}>
                            <Image src={closeIcon} alt="um X que simboliza o botão para fechar" height={30}/>
                        </StyledCloseModal>
                    </StyledDivCloseModal>
                </StyledHeaderNavMobileModal>

                <AccordionModalMobile />
            </StyledContainerNavMobileModal>
        </div>
    )
}