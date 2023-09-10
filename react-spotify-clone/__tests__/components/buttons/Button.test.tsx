import Button from '@/components/buttons/Button';
import { render, screen, fireEvent } from '@testing-library/react';

it('shoud render a button with provided text', () => {
    render(<Button>Button</Button>);
    const button: HTMLButtonElement = screen.getByTestId('cy-button');
    expect(button).toBeInTheDocument();
});

it('should render a disabled button', () => {
    render(<Button disabled>Disabled button</Button>);
    const button: HTMLButtonElement = screen.getByTestId('cy-button');

    expect(button).toBeDisabled();
});

it('should emit a method on click', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Button</Button>);
    const button: HTMLButtonElement = screen.getByTestId('cy-button');

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
});

it('should render a button with CSS classes', () => {
    render(<Button className="custom-class">Button</Button>);
    const button: HTMLButtonElement = screen.getByTestId('cy-button');

    expect(button).toHaveClass('w-full');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('bg-green-500');
    expect(button).toHaveClass('custom-class')
});

it('should render a button with corrent attributes', () => {
    render(<Button id="my-button" data-testid="cy-button" type="button">Button</Button>);
    const button: HTMLButtonElement = screen.getByTestId('cy-button');

    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('id', 'my-button');
    expect(button).toHaveAttribute('data-testid', 'cy-button');
});

