import CircleButton from '@/components/buttons/CircleButton';
import { render, screen } from '@testing-library/react';
import { AiFillAlipayCircle } from 'react-icons/ai'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import { shallow, configure } from 'enzyme';

it('should render a box component with children', () => {
    // given
    render(<CircleButton
        type='button'
        icon={AiFillAlipayCircle}
    />)

    // when
    const button: HTMLButtonElement = screen.getByTestId('cy-circle-button');
    const icon: HTMLOrSVGElement = screen.getByTestId('cy-circle-button-icon');

    // then
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button')
    expect(icon).toBeInTheDocument();
})



configure({ adapter: new Adapter() });
it('should call the onClick method', () => {
    // given
    const mockCallBack = jest.fn();
    const button = shallow((<CircleButton type='button'
        icon={AiFillAlipayCircle} onClick={mockCallBack} />));

    // when
    button.find('button').simulate('click');

    // then
    expect(mockCallBack.mock.calls.length).toEqual(1);
})

it('shouldnt call the onClick method when there is no provided method', () => {
    // given
    const mockCallBack = jest.fn();
    const button = shallow((<CircleButton type='button'
        icon={AiFillAlipayCircle} />));

    // when
    button.find('button').simulate('click');

    // then
    expect(mockCallBack.mock.calls.length).toEqual(0);
})
