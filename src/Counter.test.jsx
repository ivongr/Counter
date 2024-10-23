import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Asegúrate de importar esto
import App from './App';
import { expect } from 'vitest';

describe("App Componente", () => {
    let numberInput;
    let counterInit;
    let incrementButton;
    let decreaseButton;

    beforeEach(() => {
        render(<App />);
        numberInput = screen.getByLabelText("Ingresa un número");
        incrementButton = screen.getByText("Incrementar");
        decreaseButton = screen.getByText("Disminuir");
        counterInit = screen.getByRole("count-indicator");
    });

    test("el contador empieze desde 0", () => {
        //let conter = parseInt(counterInit)
        expect(counterInit).toHaveTextContent("0")
    })
    test("incrementa cuando da click", () => {
        // fireEvent.change(numberInput, { target: { value: 5 } })
        //expect(numberInput).toHaveBeenCalledWith(5)
        fireEvent.click(incrementButton);
        const counterUpdate = screen.getByRole("count-indicator");
        expect(counterUpdate).toHaveTextContent("1")
    });

    test("disminuye cuando da click", () => {
        fireEvent.click(decreaseButton);
        const counterUpdate = screen.getByRole("count-indicator");
        expect(counterUpdate).toHaveTextContent("-1")
    });

    test("el contador comienza con el valor inicial establecido por el usuario", () => {
        fireEvent.change(numberInput, { target: { value: '10' } });
        fireEvent.click(incrementButton);
        const counterUpdate = screen.getByRole("count-indicator");
        expect(counterUpdate).toHaveTextContent("11");
    });

    test("el contador comienza con el valor inicial establecido por el usuario", () => {
        fireEvent.change(numberInput, { target: { value: '10' } });
        fireEvent.click(decreaseButton);
        const counterUpdate = screen.getByRole("count-indicator");
        expect(counterUpdate).toHaveTextContent("9");
    });

    test("validar estilos", () => {
        expect(incrementButton).toHaveClass("success")
    })

});

