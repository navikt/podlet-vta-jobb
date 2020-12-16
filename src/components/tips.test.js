import { render } from "@testing-library/react";
import Tips from "./tips";

describe("Tester komponenten Tips", () => {
  test("Komponenten rendres som default", () => {
    const { container } = render(<Tips />);
    expect(container).not.toBeEmptyDOMElement();
  });
});
