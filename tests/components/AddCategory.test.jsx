import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("AddCategory.jsx", () => {
  const inputValue = "Hamilton";

  test("should the value of the input change", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    // screen.debug();
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
  });

  test("should call the onNewCategory func. if input has a string >1", () => {
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //1o escribir
    fireEvent.input(input, { target: { value: inputValue } });
    //2o enviar
    fireEvent.submit(form);

    expect(input.value).toBe(""); //verifico que se borre el input depués del submit
    
  });
});
