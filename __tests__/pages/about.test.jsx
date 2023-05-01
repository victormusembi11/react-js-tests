import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "../../pages/about";

describe("About", () => {
  it("renders a heading", () => {
    render(<About />);

    const header = screen.getByRole("heading");

    const headerText = "About";
    expect(header).toHaveTextContent(headerText);
  });
});
