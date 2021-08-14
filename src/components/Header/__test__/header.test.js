import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom/extend-expect';

import Header from '../Header';

describe('Header Component Test', () => {
    let headerComp;
    afterEach(cleanup);
    beforeEach(() => {
        headerComp = render(<BrowserRouter>
            <Header />
        </BrowserRouter>);
    });
    test('Should render header component', () => {
        const headerElement = screen.getByTestId('header-1');
        expect(headerElement).toBeTruthy();
        expect(headerElement).toBeInTheDocument();
    });

    test('Should have root path as a href props value', async () => {
        const link = await headerComp.findByTestId('header-2')
        expect(link.href).toEqual(window.location.href);
    });
});