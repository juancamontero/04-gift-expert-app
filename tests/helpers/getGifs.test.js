import { getGifs } from "../../src/helpers/getGifs";

describe("getGifs tests", () => {
  test("should return a GIF Array", async () => {
    const gifs = await getGifs("homer");

    expect(gifs.length).toBeGreaterThan(0); //1ero chequeo que el array tenga tamaño mayor a cero que existe
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    }); //asi chqueo que tenga la estructura esperada
  });
});
