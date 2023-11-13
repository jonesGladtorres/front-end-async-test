import { render, screen, fireEvent } from '@testing-library/react'
import { Header } from '@/components/Header/index'

describe('NavSolution component', () => {
  it('renders "Soluções" link and opens modal when clicked', () => {
    render(<Header />)

    const solutionButton = screen.getByText('Soluções')
    expect(solutionButton).toBeInTheDocument()

    const modalElement = screen.queryByRole('dialog')
    expect(modalElement).not.toBeInTheDocument()


    fireEvent.click(solutionButton)

    const openModalElement = screen.getByRole('dialog')
    expect(openModalElement).toBeInTheDocument()

    const modalContent = screen.getByText('SOLUÇÕES PRINCIPAIS')
    expect(modalContent).toBeInTheDocument()
  })

  it('render "Language" link and opens modal when clicked', () => {
    render(<Header />)

    const languageButton = screen.getByText('PT' || 'ES' || 'EN')
    expect(languageButton).toBeInTheDocument()

    const modalElement = screen.queryByRole('dialog')
    expect(modalElement).not.toBeInTheDocument()


    fireEvent.click(languageButton)

    const openModalElement = screen.getByRole('dialog')
    expect(openModalElement).toBeInTheDocument()

    const modalContent = screen.getByText('PT' && 'ES' && 'EN')
    expect(modalContent).toBeInTheDocument() 
  })

});

