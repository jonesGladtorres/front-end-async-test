"use client"

import { StyledNavHeader, StyledSpanLang } from "@/styles/typography/header"
import Image from "next/image"
import Polygron from "../../../assets/icons/Polygon.svg"
import React from 'react';
import Modal from 'react-modal';
import { ModalLanguage } from "./ModalLanguage";
import { StyledDivLoginContainer } from "../style";
import { useAtomValue } from "jotai";
import { languagemAtom } from "@/atoms/Language";
import { Styles } from "../@types";

const customStyles: Styles = {
    overlay: {
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 20
    },
    content: {
        top: '17%',
        left: '88%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        borderRadius: '0.5rem',
    },
  };



export const SpanLanguage = () => {

    const language = useAtomValue(languagemAtom)

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }
    
    return (
        <>
            <StyledDivLoginContainer>
                <StyledSpanLang onClick={() => openModal()}>
                        <StyledNavHeader>{language.toUpperCase()}</StyledNavHeader>
                        <Image src={Polygron} alt="ícone de um Polygron"/>
                </StyledSpanLang>
            </StyledDivLoginContainer>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ModalLanguage/>    
            </Modal>
        </>
    )
}