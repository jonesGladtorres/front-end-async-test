import { AppSolution } from "@/components/CardsSolution/AppSolution"
import { EadSolution } from "@/components/CardsSolution/EadSolution"
import { GamingSolution } from "@/components/CardsSolution/GamingSolution"
import { SocialSolution } from "@/components/CardsSolution/SocialSolution"

export const CardsAccordionModalMobile = () => {
    return (
        <>
            <AppSolution color="white"/>
            <EadSolution color="white"/>
            <SocialSolution color="white"/>
            <GamingSolution color="white"/>    
        </>
    )
}