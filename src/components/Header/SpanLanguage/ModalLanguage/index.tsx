import { StyledLiModalLanguage, StyledModalLanguage, StyledUlModalLangauge } from "./style"
import Image from "next/image"
import brIcon from "../../../../assets/icons/icon-brazil.svg"
import usaIcon from "../../../../assets/icons/icon-usa.svg"
import esIcon from "../../../../assets/icons/icon-spain.svg"

export const ModalLanguage = () => {
    return (
        <div>
            <StyledModalLanguage>
                <StyledUlModalLangauge>
                    <StyledLiModalLanguage>
                        <Image src={brIcon} alt="Bandeira do Brasil"/>
                        <p>PT</p>
                    </StyledLiModalLanguage>
                    <StyledLiModalLanguage>
                        <Image src={usaIcon} alt="Bandeira do Estados Unidos"/>
                        <p>EN</p>
                    </StyledLiModalLanguage>
                    <StyledLiModalLanguage>
                        <Image src={esIcon} alt="Bandeira do Espanha"/>
                        <p>ES</p>
                    </StyledLiModalLanguage>
                </StyledUlModalLangauge>
            </StyledModalLanguage>
        </div>
    )
}