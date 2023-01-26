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
    const onNewCategoryMock = jest.fn();

    render(<AddCategory onNewCategory={onNewCategoryMock} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //1o escribir
    fireEvent.input(input, { target: { value: inputValue } });
    //2o enviar
    fireEvent.submit(form);

    //verifico que se borre el input depués del submit
    expect(input.value).toBe("");
    expect(onNewCategoryMock).toHaveBeenCalled(); // se llamó la función
    expect(onNewCategoryMock).toHaveBeenCalledTimes(1); // se llamó la función 1 vez
    expect(onNewCategoryMock).toHaveBeenCalledWith(inputValue); // se llamó la función con el parámetro precisado
  });

  test("should not the onNewCategory fn be called if the input is <=1", () => {
    const onNewCategoryMock = jest.fn();

    render(<AddCategory onNewCategory={onNewCategoryMock} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    const inputValueEmpty = "a";

    //1o escribir
    fireEvent.input(input, { target: { value: inputValueEmpty } });
    //2o enviar
    fireEvent.submit(form);

    //Que NO se llame la función
    expect(onNewCategoryMock).not.toHaveBeenCalled();
  });

  test(" 2 should not the onNewCategory fn be called if the input is <=1", () => {
    const onNewCategoryMock = jest.fn();

    render(<AddCategory onNewCategory={onNewCategoryMock} />);

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    //Que NO se llame la función
    expect(onNewCategoryMock).not.toHaveBeenCalled();
  });
});
