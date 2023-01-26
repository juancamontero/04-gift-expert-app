import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("GifExpertApp.jsx", () => {
  const newCategory = "Hamilton";
  //   test("should snapshot match", () => {
  //     const { container } = render(<GifExpertApp />);
  //     expect(container).toMatchSnapshot();
  //     screen.debug();
  //   });
  test("should add a new Category", () => {
    const categoriesQuantity = 3;
    //renderizo
    render(<GifExpertApp />);

    //defino INPUT y FORM
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    //adiono el número de categorias definidas
    for (let i = 0; i < categoriesQuantity; i++) {
      fireEvent.input(input, { target: { value: `${newCategory}-${i}` } });
      fireEvent.submit(form);
    }
    //debe haber XX h3
    expect(screen.getAllByRole("heading", { level: 3 }).length).toBe(
      categoriesQuantity
    );

    screen.debug();
    // expect(screen.getByRole("heading")).toBeTruthy();
  });
});
