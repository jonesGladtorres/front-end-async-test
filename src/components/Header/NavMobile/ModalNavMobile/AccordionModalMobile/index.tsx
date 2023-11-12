import styled from "styled-components";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import chevronDown from "../../../../../assets/icons/Polygon.svg";
import Image from "next/image";
import { CardsAccordionModalMobile } from "./CardsAccordionModalMobile";
import { StyledAnchorAccordion, StyledParagraphAccordion } from "@/styles/typography/Accordion";

const Wrapper = styled.div`
  font-family: sans-serif;
  margin-top: 1rem;
  border-top: 1px solid #ccc;
`;

const ItemWithChevron = ({ header, ...rest }: any) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <Image className="chevron-down" src={chevronDown} alt="Chevron Down" />
      </>
    }
  />
);

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = styled(ItemWithChevron)`
  border-bottom: 1px solid #ccc;
  .szh-accordion__item {
    &-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 1rem;
      font-size: var(--font-size-3);
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      background-color: transparent;
      border: none;
      height: 5rem;
      &:hover {
        background-color: #f3f3f3;
      }
    }

    &-content {
      transition: height 0.25s cubic-bezier(0, 0, 0, 1);
    }

    &-panel {
      padding: 1rem;
    }
  }

  .chevron-down {
    margin-left: auto;
    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
  }

  &.szh-accordion__item--expanded {
    .szh-accordion__item-btn {
      background-color: transparent;
    }
    .chevron-down {
      transform: rotate(180deg);
    }
    .szh-accordion__item-panel{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }
`;

export const AccordionModalMobile = () => {
  return (
    <Wrapper>
      <Accordion transition transitionTimeout={250}>
        <AccordionItem header="Soluções" initialEntered>
          <CardsAccordionModalMobile />
        </AccordionItem>
        <AccordionItem header="Preços">
          <StyledParagraphAccordion>Para consultar preços <StyledAnchorAccordion href="https://ensinio.com" target="_blank">Clique Aqui</StyledAnchorAccordion></StyledParagraphAccordion>
        </AccordionItem>
        <AccordionItem header="Carreiras">
        <StyledParagraphAccordion>Trabalhe conosco <StyledAnchorAccordion href="https://get.ensinio.com/careers" target="_blank">Clicando Aqui</StyledAnchorAccordion></StyledParagraphAccordion>
        </AccordionItem>
        <AccordionItem header="Contato">
          <StyledParagraphAccordion>Converse com um de nossos especialistas: <StyledAnchorAccordion href="https://api.whatsapp.com/send/?phone=556131420779&text=Olá">Entrar em contato</StyledAnchorAccordion></StyledParagraphAccordion>
        </AccordionItem>
      </Accordion>
    </Wrapper>
  );
}
