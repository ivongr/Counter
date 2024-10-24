import { renderHook, act } from '@testing-library/react'
import useCount from './counter';


describe("Counter Hook", () => {
    const initialCount = 0;

    test("debe incrementar el contador", () => {

        const { result } = renderHook(() => useCount(initialCount));
        act(() => {
            result.current.increment();
        });
        expect(result.current.count).toBe(1);
    });

    test("debe de disminuir el contador", () => {

        const { result } = renderHook(() => useCount(initialCount));
        act(() => {
            result.current.decrease();
        });
        expect(result.current.count).toBe(-1);
    });

    
    test("debe establecer el contador al valor ingresado por el usuario", () => {

        const initialCount = 5;
        const { result } = renderHook(() => useCount(initialCount));
        act(() => {
            result.current.handleClick(initialCount);
        });
        expect(result.current.count).toBe(5);
    });
});

