import { Card } from '@/components/SectionTwo/CardsList/Card';
import { render, screen } from '@testing-library/react';


const mockData = {
  title: {
    en: 'English Title',
    pt: 'Título em Português',
    es: 'Título en español',
  },
  description: {
    en: 'English Description',
    pt: 'Descrição em Português',
    es: 'Descripción en español',
  },
};

test('updates content based on language change', () => {
  const { rerender } = render(<Card title={mockData.title} description={mockData.description} />);

  rerender(<Card title={mockData.title} description={mockData.description} />);

  const titlePortuguese = screen.getByText(/Título em Português/i);
  expect(titlePortuguese).toBeInTheDocument();

  const descriptionPortuguese = screen.getByText(/Descrição em Português/i);
  expect(descriptionPortuguese).toBeInTheDocument();
});