import { render, screen } from '@testing-library/react';
import Box from '@/components/Box'

it('should render a box component with children', () => {
    // given
    render(<Box>Hi box</Box>)

    // when
    const myElem: HTMLDivElement = screen.getByTestId('cy-box');

    // then
    expect(myElem).toBeInTheDocument();
    expect(myElem).toHaveTextContent('Hi box')
})

it('should render a box component with extra classes', () => {
    // given
    render(<Box className='example-class'>Hi box</Box>)

    // when
    const myElem: HTMLDivElement = screen.getByTestId('cy-box');

    // then
    expect(myElem).toBeInTheDocument();
    expect(myElem).toHaveClass('example-class')
})