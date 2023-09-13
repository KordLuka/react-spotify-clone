import { render, screen, fireEvent, renderHook } from '@testing-library/react';
import Library from '@/components/Library'
import { useAuthModal } from './../../hooks/useAuthModal'
import { MyUserContextProvider } from '@/hooks/useUser';
import userEvent from '@testing-library/user-event'
import UserProvider from '@/providers/UserProvider';

const onOpen = jest.fn();

jest.mock('./../../hooks/useAuthModal', () => {
    return {
        useAuthModal: () => ({
            isOpen: false,
            onOpen,
            onClose: jest.fn()
        })
    };
});

it('should check if the Plus button triggers the onClick function2', async () => {
    const user = userEvent.setup()

    render(
        <MyUserContextProvider value={{
            accessToken: null,
            user: null,
            userDetails: null,
            isLoading: false,
            subscription: null
        }}>
            <Library />
        </MyUserContextProvider>
    )

    const { result } = renderHook(() => useAuthModal())

    const icon: HTMLElement = screen.getByTestId('cy-library-plus-icon');

    // when  
    await user.click(icon);

    // then
    console.log("2: ", result.current.isOpen)
    expect(result.current.isOpen).toBe(false);
    expect(result.current.onOpen).toHaveBeenCalledTimes(1);
});