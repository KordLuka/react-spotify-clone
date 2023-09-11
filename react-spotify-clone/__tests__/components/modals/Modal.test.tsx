import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal, { ModalProps } from './../../../components/modals/Modal';

describe('Modal Component', () => {
    const defaultProps: ModalProps = {
        isOpen: true,
        onChange: jest.fn(),
        title: 'Sample Modal',
        description: 'This is a test modal.',
        children: <div>Modal Content</div>,
    };

    it('should render the modal with the provided title and description', () => {
        render(<Modal {...defaultProps} />);
        const titleElement = screen.getByTestId('cy-modal-title');
        const descriptionElement = screen.getByTestId('cy-modal-description');

        expect(titleElement).toHaveTextContent('Sample Modal');
        expect(descriptionElement).toHaveTextContent('This is a test modal.');
    });

    it('should render the modal with custom children', () => {
        render(<Modal {...defaultProps} />);
        const childrenElement = screen.getByTestId('cy-modal-children');

        expect(childrenElement).toHaveTextContent('Modal Content');
    });

    it('should calls the onChange function when the close button is clicked', () => {
        const onChangeMock = jest.fn();
        render(<Modal {...defaultProps} onChange={onChangeMock} />);
        const closeButton = screen.getByTestId('cy-modal-close-button');

        fireEvent.click(closeButton);

        expect(onChangeMock).toHaveBeenCalledWith(false);
    });

    it('shouldnt render a dialog when isOpen is false', () => {
        render(<Modal {...defaultProps} isOpen={false} />);
        const root = screen.queryByTestId('cy-modal-root');

        expect(root).not.toBeInTheDocument();
    });
});