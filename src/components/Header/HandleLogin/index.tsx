import { StyledLoginHeader } from "@/styles/typography/header"
import { StyledSpanLogin } from "../style"
import Image from "next/image"
import loginIcon from "../../../assets/icons/login-icon.svg"

export const HandleLogin = () => {
    return (
        <StyledSpanLogin>
            <Image src={loginIcon} alt="Icone de perfil para login"/>
            <StyledLoginHeader>Entrar</StyledLoginHeader>
        </StyledSpanLogin>
    )
}