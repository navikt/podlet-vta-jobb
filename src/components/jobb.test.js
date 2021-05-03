import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Jobb from "./jobb";

describe("tester Jobb komponenten", () => {
  test("komponenten rendres IKKE som default", () => {
    const { container } = render(<Jobb />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten rendres IKKE om man ikke er under oppfølging", () => {
    const { container } = render(<Jobb underOppfolging={false} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten vises IKKE om man IKKE er under oppfølging", () => {
    const underOppfolging = {
      erBrukerUnderOppfolging: false,
    };
    const { container } = render(<Jobb underOppfolging={underOppfolging} />);
    expect(container).toBeEmptyDOMElement();
  });

  test("komponenten VISES om man er under oppfølging", () => {
    const underOppfolging = {
      erBrukerUnderOppfolging: true,
    };
    render(<Jobb underOppfolging={underOppfolging} />);
    expect(screen.getByText(/din cv og jobbønsker/i)).toBeInTheDocument();
  });

  test("komponenten VISES om man er under oppfølging nivå 4", () => {
    const oppfolging = {
      underOppfolging: true,
    };
    render(<Jobb oppfolging={oppfolging} />);
    expect(screen.getByText(/din cv og jobbønsker/i)).toBeInTheDocument();
  });

  test("komponenten vises IKKE om ER under oppfølging og sykmeldt med arbeidsgiver", () => {
    const oppfolging = {
      underOppfolging: true,
      erSykmeldtMedArbeidsgiver: true,
    };
    const { container } = render(<Jobb oppfolging={oppfolging} />);
    expect(container).toBeEmptyDOMElement();
  });
});
