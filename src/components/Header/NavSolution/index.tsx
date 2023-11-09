import { StyledLiService, StyledNavHeader } from "@/styles/typography/header"
import Image from "next/image"
import Polygron from "../../../assets/icons/Polygon.svg"
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { ModalSolution } from "./ModalSolution";

const customStyles = {
    overlay: {
        backgroundColor: 'transparent',
    },
    content: {
      top: '13%',
      left: '32%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export const NavSolution = () => {

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
            <StyledLiService onClick={() => openModal()}>
                        <StyledNavHeader>Soluções</StyledNavHeader>
                        <Image src={Polygron} alt="ícone de um Polygron"/>
            </StyledLiService>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <ModalSolution />
            </Modal>
        </>
    )
}