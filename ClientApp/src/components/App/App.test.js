import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App tests", () => {
  test("should render properly", async () => {
    render(<App />);

    const a = await screen.findByText("Minecraft Servers Manager");
    expect(a).toBeInTheDocument();
  });
});
