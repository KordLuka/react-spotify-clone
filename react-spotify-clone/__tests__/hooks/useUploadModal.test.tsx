import { act, renderHook } from '@testing-library/react';
import useUploadModal from '../../hooks/useUploadModal';

describe('useUploadModal Hook', () => {
    it('should initialize with isOpen as false', () => {
        const { result } = renderHook(() => useUploadModal());
        const { isOpen } = result.current;

        expect(isOpen).toBe(false);
    });

    it('should open the modal', () => {
        const { result } = renderHook(() => useUploadModal());
        const { onOpen } = result.current;

        act(() => {
            onOpen();
        });

        expect(result.current.isOpen).toBe(true);
    });

    it('should close the modal', () => {
        const { result } = renderHook(() => useUploadModal());
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