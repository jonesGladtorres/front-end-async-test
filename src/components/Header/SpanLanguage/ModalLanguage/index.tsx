"use client"

import { StyledLiModalLanguage, StyledModalLanguage, StyledUlModalLangauge } from "./style"
import Image from "next/image"
import brIcon from "../../../../assets/icons/icon-brazil.svg"
import usaIcon from "../../../../assets/icons/icon-usa.svg"
import esIcon from "../../../../assets/icons/icon-spain.svg"
import { StyledParagraphModalLanguage } from "@/styles/typography/modalLanguage"
import { useState } from "react"
import checkIcon from "../../../../assets/icons/icon-checkmark.svg"
import { useAtom } from "jotai"
import { languagemAtom } from "@/atoms/Language"

export const ModalLanguage = () => {
    let currentLanguage = localStorage.getItem('@language') || 'pt'

    // const [selectedLanguage, setSelectedLanguage] = useState<string | null>(currentLanguage)
    const [language, setLanguage] = useAtom(languagemAtom)

    setLanguage(currentLanguage)

    const handleLanguageChange = (language: string) => {
        localStorage.removeItem('language')
        localStorage.setItem('@language', language)
        setLanguage(language)
    }

    return (
        <div>
            <StyledModalLanguage>
                <StyledUlModalLangauge>
                    <StyledLiModalLanguage onClick={() => handleLanguageChange('pt')}>
                        <Image src={brIcon} alt="Bandeira do Brasil"/>
                        <StyledParagraphModalLanguage>PT</StyledParagraphModalLanguage>
                        <span>
                            {language == 'pt' ? <Image src={checkIcon} alt="icone de um check"/> : ''}
                        </span>
                    </StyledLiModalLanguage>
                    <StyledLiModalLanguage onClick={() => handleLanguageChange('en')}>
                        <Image src={usaIcon} alt="Bandeira do Estados Unidos"/>
                        <StyledParagraphModalLanguage>EN</StyledParagraphModalLanguage>
                        <span>
                            {language == 'en' ? <Image src={checkIcon} alt="icone de um check"/> : ''}
                        </span>
                    </StyledLiModalLanguage>
                    <StyledLiModalLanguage onClick={() => handleLanguageChange('es')}>
                        <Image src={esIcon} alt="Bandeira do Espanha"/>
                        <StyledParagraphModalLanguage>ES</StyledParagraphModalLanguage>
                        <span>
                            {language == 'es' ? <Image src={checkIcon} alt="icone de um check"/> : ''}
                        </span>
                    </StyledLiModalLanguage>
                </StyledUlModalLangauge>
            </StyledModalLanguage>
        </div>
    )
}