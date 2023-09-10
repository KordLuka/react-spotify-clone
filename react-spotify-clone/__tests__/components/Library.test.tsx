import { render, screen, fireEvent } from '@testing-library/react';
import Library from '@/components/Library'

it('should render the Library component with the correct title', () => {
    // given
    render(<Library />);
    const libraryTitle = screen.getByTestId('cy-library-plus-button');

    // when

    // then
    expect(libraryTitle).toBeInTheDocument();
});

it('should check if the Plus button triggers the onClick function', () => {
    // given
    const onClickMock = jest.fn();
    render(<Library />);
    const button: HTMLButtonElement = screen.getByTestId('cy-library-plus-button');

    // when  
    fireEvent.click(button);

    // then
    expect(onClickMock).toHaveBeenCalledTimes(1);
});

it('should render the Library component with a list of songs', () => {
    // given
    render(<Library />);
    const container: HTMLDivElement = screen.getByTestId('cy-library-liked-songs-container');

    // when

    // then
    expect(container).toBeInTheDocument();
});