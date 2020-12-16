import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Jobb from "./jobb";

describe("tester Jobb komponenten", () => {
  test("komponenten rendres IKKE som default", () => {
    const { container } = render(<Jobb />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten rendres IKKE om man ikke er under oppfølging", () => {
    const { container } = render(<Jobb oppfolging={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten vises IKKE om man IKKE er under oppfølging", () => {
    const oppfolging = {
      erBrukerUnderOppfolging: false,
    };
    const { container } = render(<Jobb oppfolging={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten VISES om man er under oppfølging", () => {
    const oppfolging = {
      erBrukerUnderOppfolging: true,
    };
    render(<Jobb oppfolging={oppfolging} />);
    expect(screen.getByText(/jobbers/i)).toBeInTheDocument();
  });
});
