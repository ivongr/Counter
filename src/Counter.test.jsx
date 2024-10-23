import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from './App';


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

    test("debe de empezar en 0 el contador", () => {
        expect(counterInit).toHaveTextContent("0")
    });
    
    test("debe de incrementar el contador", () => {
        fireEvent.click(incrementButton);
        const counterUpdate = screen.getByRole("count-indicator");
        expect(counterUpdate).toHaveTextContent("1")
    });

    test("debe de disminuir el contador", () => {
        fireEvent.click(decreaseButton);
        const counterUpdate = screen.getByRole("count-indicator");
        expect(counterUpdate).toHaveTextContent("-1")
    });

    test("debe de comenzar el contador con el valor inicial establecido por el usuario e incrementar el contador", () => {
        fireEvent.change(numberInput, { target: { value: "10" } });
        fireEvent.click(incrementButton);
        const counterUpdate = screen.getByRole("count-indicator");
        expect(counterUpdate).toHaveTextContent("11");
    });

    test("debe de comenzar el contador con el valor inicial establecido por el usuario e disminuir el contador", () => {
        fireEvent.change(numberInput, { target: { value: "11" } });
        fireEvent.click(decreaseButton);
        const counterUpdate = screen.getByRole("count-indicator");
        expect(counterUpdate).toHaveTextContent("10");
    });


});

