import Image from "next/image"
import logo from "../../assets/img/logo.png"
import { StyledDivLogin, StyledHeader, StyledNav, StyledSpanLogin,  } from "./style"
import loginIcon from "../../assets/icons/login-icon.svg"
import { StyledLoginHeader, StyledNavHeader } from "@/styles/typography/header"
import { StyledButtonHeader } from "@/styles/buttons/style"
import { SpanLanguage } from "./SpanLanguage"
import { NavSolution } from "./NavSolution"


export const Header = () => {
    return (
        <StyledHeader>
            <Image src={logo} alt="Logotipo da Ensínio"/>
            <nav>
                <StyledNav>
                    <NavSolution />
                    <li><StyledNavHeader>Preços</StyledNavHeader></li>
                    <li><StyledNavHeader>Carreiras</StyledNavHeader></li>
                    <li><StyledNavHeader>Contato</StyledNavHeader></li>
                </StyledNav>
            </nav>
            <StyledDivLogin>
                <StyledSpanLogin>
                    <Image src={loginIcon} alt="Icone de perfil para login"/>
                    <StyledLoginHeader>Entrar</StyledLoginHeader>
                </StyledSpanLogin>
                <StyledButtonHeader>Começar Agora</StyledButtonHeader>
                <SpanLanguage/>
            </StyledDivLogin>
        </StyledHeader>
    )
}