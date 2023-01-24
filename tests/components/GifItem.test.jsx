import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components";

describe("<GifItem /> ", () => {
  const title = "Alfonso Ribeiro Dancing GIF";
  const url =
    "https://media3.giphy.com/media/IGpqj6DMmbeNy/giphy.gif?cid=5538b305w7xkjqdiaqah0n79sexyfrnvgt4qxsklh7crkjwy&rid=giphy.gif&ct=g";

  test("should snapShot match?", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("should the <img> has the correct URl and ALT ", () => {
    render(<GifItem title={title} url={url} />);

    // expect(screen.getByRole("img").src).toBe(url); //manera larga
    // expect(screen.getByRole("img").alt).toBe(title);//manera larga

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("should the TITLE be shown in the component", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
