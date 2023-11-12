"use client"

import { StyledParagraphSectionTwo, StyledTitleList } from "@/styles/typography/sectionTwo"
import { StyledLiSectionTwo } from "../../style"
import { useEffect, useState } from "react"
import { useAtomValue } from "jotai"
import { languagemAtom } from "@/atoms/Language"

export const Card = ({title, description}: any) => {
    const [currentTitle, setCurrentTitle] = useState<string>('')
    const [currentDescription, setCurrentDescription] = useState<string>('')
    
    const language = useAtomValue(languagemAtom)

    useEffect(() => {
        if(language){
            setCurrentTitle(title[language])
            setCurrentDescription(description[language])
        }
    }, [language])

    return (
        <StyledLiSectionTwo>
            <StyledTitleList>{currentTitle}</StyledTitleList>
            <StyledParagraphSectionTwo>{currentDescription}</StyledParagraphSectionTwo>
        </StyledLiSectionTwo>
    )
}