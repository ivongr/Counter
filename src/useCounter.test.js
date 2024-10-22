import { renderHook, act } from '@testing-library/react' 
import useCount from './counter';

const initialCount = 2;
test("debe incrementar el contador",()=>{
 
    const { result } = renderHook(() => useCount(initialCount));
    act(() => {
        result.current.Increment();
    });
    expect(result.current.count).toBe(3);
});

test("debe de disminuir el contador",() =>{
    
    const {result } = renderHook (() => useCount(initialCount));
    act(() => {
        result.current.Decrease();
    });
    expect(result.current.count).toBe(1);
})


