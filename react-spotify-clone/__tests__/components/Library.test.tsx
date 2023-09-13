

import { render, screen, fireEvent, } from '@testing-library/react';
import Library from '@/components/Library'
import UserProvider from '@/providers/UserProvider';

it('should render the Library component with the correct title', () => {
    // given
    render(<UserProvider><Library /></UserProvider>);
    const libraryTitle = screen.getByTestId('cy-library-title');

    // when

    // then
    expect(libraryTitle).toBeInTheDocument();
    expect(libraryTitle).toHaveTextContent('Your Library')
});

it('should check if the Plus button triggers the onClick function', () => {
    // given
    const onClickMock = jest.fn();
    render(<UserProvider><Library /></UserProvider>);
    const icon: HTMLElement = screen.getByTestId('cy-library-plus-icon');
    icon.onclick = onClickMock;

    // when
    fireEvent.click(icon);

    // then
    expect(onClickMock).toHaveBeenCalledTimes(1);
});

it('should render the Library component with a list of songs', () => {
    // given
    render(<UserProvider><Library /></UserProvider>);
    const container: HTMLDivElement = screen.getByTestId('cy-library-liked-songs-container');

    // when

    // then
    expect(container).toBeInTheDocument();
});


