import { render, screen, waitFor } from '@testing-library/react';
import { getItems } from '@/services/request';
import { Card } from '@/components/SectionTwo/CardsList/Card';


describe('SectionTwo component', () => {
    it('renders section with title, icons, and CardList', async () => {
        render(<Card />);

        // Wait for the async data fetching in CardList to complete
        await waitFor(() => expect(getItems).toHaveBeenCalled());
    
    });
});