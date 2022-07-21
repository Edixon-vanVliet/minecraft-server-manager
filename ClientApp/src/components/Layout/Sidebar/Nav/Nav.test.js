import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Nav from "./Nav";

describe("Nav tests", () => {
  test("should render properly", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );

    expect(screen.getByText("Servers")).toBeInTheDocument();
  });
});
