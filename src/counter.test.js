import React from 'react';
import { expect } from 'chai';
import { render } from '@testing-library/react';

import useCount from './counter';

test('debe incrementar el contador', () => {
    const initialCount = 0;
    const { result } = renderHook(() => useCount(initialCount));

    act(() => {
        result.current.Increment();
    });

    expect(result.current.count).toBe(1);
});

test('debe disminuir el contador', () => {
    const initialCount = 0;
    const { result } = renderHook(() => useCount(initialCount));

    act(() => {
        result.current.Decrease();
    });

    expect(result.current.count).toBe(-1);
});
