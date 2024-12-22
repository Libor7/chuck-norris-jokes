import { render, screen } from "@testing-library/react";
import ButtonComp from "@shared/components/UI/Button";
import "@testing-library/jest-dom";

describe("ButtonComp", () => {
  it('should default to "contained" variant if no variant is passed', () => {
    render(<ButtonComp>Click Me</ButtonComp>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("MuiButton-contained");
  });

  it("should apply the variant prop when passed explicitly", () => {
    render(<ButtonComp variant="outlined">Click Me</ButtonComp>);

    const button = screen.getByRole("button");

    expect(button).toHaveClass("MuiButton-outlined");
  });
});
