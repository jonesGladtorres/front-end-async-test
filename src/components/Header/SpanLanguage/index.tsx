import { StyledNavHeader, StyledSpanLang } from "@/styles/typography/header"
import Image from "next/image"
import Polygron from "../../../assets/icons/Polygon.svg"
import React from 'react';
import Modal from 'react-modal';
import { ModalLanguage } from "./ModalLanguage";

const customStyles = {
    overlay: {
        backgroundColor: 'transparent',
    },
    content: {
        top: '15%',
        left: '87%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '15px',
    },
  };



export const SpanLanguage = () => {

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
            <StyledSpanLang onClick={() => openModal()}>
                    <StyledNavHeader>PT</StyledNavHeader>
                    <Image src={Polygron} alt="ícone de um Polygron"/>
            </StyledSpanLang>
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