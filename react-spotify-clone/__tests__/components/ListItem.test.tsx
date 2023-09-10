import { screen } from '@testing-library/react';
import ListItem from '@/components/ListItem'
import { AppRouterContextProviderMock } from './../../__utils__/app-router-context-provider-mock';
import { render, fireEvent } from '@testing-library/react';

const props = {
    href: "liked",
    image: 'http://localhost:3000/images/liked.png',
    name: 'Liked songs',
}

it('should render a button', () => {
    const push = jest.fn();
    render(<AppRouterContextProviderMock router={{ push }}><ListItem {...props} /> </AppRouterContextProviderMock>);

    // when
    const button: HTMLButtonElement = screen.getByTestId('cy-list-item-button');

    // then
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button')
})

it('should render an image', () => {
    const push = jest.fn();
    render(<AppRouterContextProviderMock router={{ push }}><ListItem {...props} /> </AppRouterContextProviderMock>);

    // when
    const image: HTMLImageElement = screen.getByTestId('cy-list-item-image');

    // then
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("liked.png"));
})

it('should push the provided href to router after click', () => {
    const push = jest.fn();
    render(<AppRouterContextProviderMock router={{ push }}><ListItem {...props} /> </AppRouterContextProviderMock>);

    // when
    const button: HTMLButtonElement = screen.getByTestId('cy-list-item-button');
    fireEvent.click(button);

    // then
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith(props.href)
})
