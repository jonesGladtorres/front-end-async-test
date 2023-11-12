import Image from "next/image"
import logo from "../../assets/img/logo.png"
import { StyleLiNavHeader, StyledDivLogin, StyledDivLoginContainer, StyledHeader, StyledNav  } from "./style"
import { StyledNavHeader } from "@/styles/typography/header"
import { StyledButtonContainerScale, StyledButtonHeader } from "@/styles/buttons/style"
import { SpanLanguage } from "./SpanLanguage"
import { NavSolution } from "./NavSolution"
import { NavMobile } from "./NavMobile"
import { HandleLogin } from "./HandleLogin"


export const Header = () => {
    return (
        <StyledHeader>
            <Image src={logo} alt="Logotipo da Ensínio"/>
            <nav>
                <StyledNav>
                    <NavSolution />
                    <StyleLiNavHeader><StyledNavHeader>Preços</StyledNavHeader></StyleLiNavHeader>
                    <StyleLiNavHeader><StyledNavHeader>Carreiras</StyledNavHeader></StyleLiNavHeader>
                    <StyleLiNavHeader><StyledNavHeader>Contato</StyledNavHeader></StyleLiNavHeader>
                </StyledNav>
            </nav>
            <StyledDivLogin>
                <StyledDivLoginContainer>
                    <HandleLogin />
                </StyledDivLoginContainer>
                <StyledButtonContainerScale>
                    <StyledButtonHeader>Começar Agora</StyledButtonHeader>
                </StyledButtonContainerScale>
                <SpanLanguage/>
            </StyledDivLogin>
            <NavMobile />
        </StyledHeader>
    )
}