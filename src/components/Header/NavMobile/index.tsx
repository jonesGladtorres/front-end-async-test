import { StyledButtonNavMobile, StyledContainerLinesButtonMobile, StyledLinesButtonMobile } from "./style"
import React from 'react';
import Modal from 'react-modal';
import { ModalNavMobile } from "./ModalNavMobile";


const customStyles = {
    overlay: {
        position: 'fixed',
        zIndex: 10
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        borderRadius: '0.5rem',
    },
  };


export const NavMobile = () => {

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
            <StyledButtonNavMobile onClick={() => openModal()}>
                <StyledContainerLinesButtonMobile>
                    <StyledLinesButtonMobile></StyledLinesButtonMobile>
                    <StyledLinesButtonMobile></StyledLinesButtonMobile>
                    <StyledLinesButtonMobile></StyledLinesButtonMobile>
                </StyledContainerLinesButtonMobile>
            </StyledButtonNavMobile>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <ModalNavMobile setIsOpen={setIsOpen} />
            </Modal>
        </>
    )
}