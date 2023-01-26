import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

// 1. Se hace mock del path, y desde acá el TEST espera que se use el hook
jest.mock("../../src/hooks/useFetchGifs");

describe("<GifGrid.jsx />", () => {
  const category = "Garcia";

  test("should the the loading text be rendered at the beginning", () => {
    //1. Que debe devolver el hook
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    //2 se renderiza
    render(<GifGrid category={category} />);

    //3 se prueba
    //Que muestre el is loading..
    expect(screen.getByText("...Loading"));
    //Qye muestra la categoría
    expect(screen.getByText(category));
  });

  test("should shows the IMGs when the useFetchGifs is triggered", () => {
    // 1. se define que debe regresar el hook
    const gifs = [
      { id: "id-1", title: "title-1", url: "https://1.com" },
      { id: "id-2", title: "title-2", url: "https://2.com" },
      { id: "id-3", title: "title-3", url: "https://3.com" },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    //2 se renderiza
    render(<GifGrid category={category} />);

    //espero que reciba 3 ítems
    expect(screen.getAllByRole("img").length).toBe(3);
  });
});
