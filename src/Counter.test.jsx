import { render, screen, fireEvent } from '@testing-library/react';
import useCount from './counter';
import App from './App';

describe("App Componente", () => {
    let numberInput;
    let counterInit;
    let counterUpdate;
    let incrementButton;
    let decreaseButton;

    beforeEach(() => {
        render(<App />);
        numberInput = screen.getByLabelText("Ingresa un número");
        counterInit = parseInt(screen.getByRole("count-indicator").innerText)
        counterUpdate = parseInt(screen.getByRole("count-indicator").innerText)
        incrementButton = screen.getByText("Incrementar");
        decreaseButton = screen.getByText("Disminuir");
    });

    test("el contador empieze desde 0", () => {
        //let conter = parseInt(counterInit)
        expect(counterInit.textContent).toBe("0")
    })
    test("incrementa cuando da click", () => {
        fireEvent.change(numberInput, { target: { value: 5 } })
        //expect(numberInput).toHaveBeenCalledWith(5)
        fireEvent.click(incrementButton);
        expect(counterUpdate).toBe(counterInit + 1)
    });

    test("disminuye cuando da click", () => {
        fireEvent.click(decreaseButton);
        expect(counterUpdate).toBe(counterInit - 1)
    });
});

