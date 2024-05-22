import { render, screen } from "@testing-library/react";
import Home from "@/pages";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render the nuclio digital school link", () => {
    render(<Home />);
    const nuclioLink = screen.getByText("Nuclio Digital School");
    expect(nuclioLink).toBeInTheDocument();
  });
});
