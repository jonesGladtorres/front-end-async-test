"use client"

import { StyledLiService, StyledNavHeader } from "@/styles/typography/header"
import Image from "next/image"
import Polygron from "../../../assets/icons/Polygon.svg"
import React from 'react';
import Modal from 'react-modal';
import { ModalSolution } from "./ModalSolution";
import { StyledDivLoginContainer } from "../style";
import { StyledContainerNavSolution } from "./style";
import { Styles } from "../@types";


const customStyles: Styles = {
    overlay: {
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 20
    },
    content: {
      top: '24%',
      left: '35%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      borderRadius: '0.375rem',
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
        <StyledContainerNavSolution>
            <StyledDivLoginContainer>
                <StyledLiService onClick={() => openModal()}>
                            <StyledNavHeader>Soluções</StyledNavHeader>
                            <Image src={Polygron} alt="ícone de um Polygron"/>
                </StyledLiService>
            </StyledDivLoginContainer>
            <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <ModalSolution />
            </Modal>
        </StyledContainerNavSolution>
    )
}