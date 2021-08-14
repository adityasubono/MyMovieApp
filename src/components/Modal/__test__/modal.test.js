import { render, screen, cleanup } from '@testing-library/react';
import {create} from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Modal from '../Modal';

describe('Modal Component Test', () => {
    afterEach(cleanup)
    it('should render modal component', () => {
        render(<Modal visible={true}/>);
        const modalElement = screen.getByTestId('modal-1');
        expect(modalElement).toBeTruthy();
        expect(modalElement).toBeInTheDocument();
    });

    it('Modal component should not rendered', () => {
        render(<Modal visible={false}/>);
        const modalElement = screen.queryByTestId('modal-1');
        expect(modalElement).toBeFalsy();
    });

    it('should render modal title component', async () => {
        render(<Modal visible={true} title={"Batman"}/>);
        const modalTitle = await screen.findByText('Batman');
        expect(modalTitle).toBeTruthy();
    });

    it('should render modal body with html element same with content props', async () => {
        render(<Modal visible={true} title={"Batman"} content={<p>Body</p>}/>);
        const modalBody = await screen.findByTestId('modal-body');
        expect(modalBody.childNodes[0] instanceof HTMLParagraphElement).toBeTruthy();
    });
})