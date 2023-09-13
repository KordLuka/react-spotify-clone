import { act, renderHook } from '@testing-library/react';
import { useAuthModal } from './../../hooks/useAuthModal';

describe('useAuthModal Hook', () => {
    it('should initialize with isOpen as false', () => {
        const { result } = renderHook(() => useAuthModal());
        const { isOpen } = result.current;

        expect(isOpen).toBe(false);
    });

    it('should open the modal', () => {
        const { result } = renderHook(() => useAuthModal());
        const { onOpen } = result.current;

        act(() => {
            onOpen();
        });

        expect(result.current.isOpen).toBe(true);
    });

    it('should close the modal', () => {
        const { result } = renderHook(() => useAuthModal());
        const { onOpen, onClose } = result.current;

        act(() => {
            onOpen();
        });

        act(() => {
            onClose();
        });

        expect(result.current.isOpen).toBe(false);
    });
});