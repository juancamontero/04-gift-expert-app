import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("useFetchGifs.js TESTS", () => {
  const category = "Senna";
  test("should the hook return the initial state", () => {
    //renderizamos el hook así para que mp se bloque el test al usar el hook fuera de un functional component

    //devuelve un objeto
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, isLoading } = result.current; //Acá retorna el estado iniciql , no se han cargado iméganes ni disparado el hook

    expect(images.length).toBe(0); //no hay imágenes
    expect(isLoading).toBeTruthy(); //no está cargando
  });

  //debe ser async
  test("should return an images array and isloading false", async () => {
    //1 renderizo el hook
    const { result } = renderHook(() => useFetchGifs(category));

    //2 pero ahora pongo una condición para generar el resultado

    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );
    
    const { images, isLoading } = result.current;
    //3 pruebo    
    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();
  });
});
