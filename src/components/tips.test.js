import { render, screen } from "@testing-library/react";
import Tips from "./tips";

describe("Tester komponenten Tips", () => {
  test("Komponenten rendres som default", () => {
    const { container } = render(<Tips />);
    expect(container).not.toBeEmptyDOMElement();
  });

  test("Komponenten viser riktig tekst om man har besvarelse", () => {
    const besvarelse = {
      raad: [],
    };
    render(<Tips besvarelse={besvarelse} />);
    expect(screen.getByText(/dine jobbsøkertips/i)).toBeInTheDocument();
  });

  test("Komponenten viser riktig tekst om man ikke har besvarelse", () => {
    const besvarelse = {};
    render(<Tips besvarelse={besvarelse} />);
    expect(screen.getByText(/få jobbsøkertips/i)).toBeInTheDocument();
  });
});
