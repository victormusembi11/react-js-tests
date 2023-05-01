import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "../../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const header = screen.getByRole("heading");

    const headerText = "Hello, World!";
    expect(header).toHaveTextContent(headerText);
  });
});
