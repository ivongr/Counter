import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';


function setup() {
    const utils = render(<App />);
    const numberInput = screen.getByLabelText("Ingresa un número");
    const incrementButton = screen.getByText("Incrementar");
    const decreaseButton = screen.getByText("Disminuir");
    const counterInit = screen.getByRole("count-indicator");

    return {
        ...utils,
        user: userEvent.setup(),
        numberInput,
        counterInit,
        incrementButton,
        decreaseButton,
    };
}
describe("App Componente", () => {


    test("debe de empezar en 0 el contador", () => {
        const { counterInit } = setup();
        expect(counterInit.textContent).toBe("0")
    });

    test("debe de incrementar el contador", async () => {
        const { incrementButton, counterInit, user } = setup();
        await user.click(incrementButton);
        //const counterUpdate = screen.getByRole("count-indicator");
        expect(counterInit.textContent).toBe("1")
    });

    test("debe de disminuir el contador", async () => {
        const { decreaseButton, counterInit, user } = setup();
       await user.click(decreaseButton);
        expect(counterInit.textContent).toBe("-1")
    });

    test("debe de comenzar el contador con el valor inicial establecido por el usuario e incrementar el contador", async () => {
        const { numberInput, incrementButton, counterInit, user } = setup();
        user.type(numberInput, "10");
       await user.click(incrementButton);
        expect(counterInit.textContent).toBe("11");
    });

    test("debe de comenzar el contador con el valor inicial establecido por el usuario e disminuir el contador", async () => {
        const { numberInput, decreaseButton, counterInit, user } = setup();
        user.type(numberInput, "11");
       await user.click(decreaseButton);
        expect(counterInit.textContent.trim()).toBe("10");
    });


});

