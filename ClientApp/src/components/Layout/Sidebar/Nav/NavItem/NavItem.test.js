import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavItem from "./NavItem";

describe("NavItem tests", () => {
  test("should render properly", () => {
    render(
      <MemoryRouter>
        <NavItem to="/test">Test</NavItem>
      </MemoryRouter>
    );

    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
