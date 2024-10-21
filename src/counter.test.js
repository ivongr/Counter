import { renderHook, act } from '@testing-library/react' 
import useCount from "./counter";

test("debe incrementar el contador",()=>{
    let initialCount = 0
    const { result } = renderHook(() => useCount(initialCount));
    act(() => {
        result.current.Increment();
    });
    expect(result.current.count).toBe(1);
});

test("debe de disminuir el contador",() =>{
    const {result } = renderHook (() => useCount());
    act(() => {
        result.current.Decrease();
    });
    expect(result.current.count).toBe(-1);
})


