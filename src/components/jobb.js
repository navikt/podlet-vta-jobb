import React from "react";
import { Systemtittel } from "nav-frontend-typografi";
import CV from "./cv";
import Stillinger from "./stillinger";
import Tips from "./tips";

function Jobb(props) {
  const { oppfolging, underOppfolging } = props;

  const kanViseKomponent = () => {
    let kanVise = false;
    if (oppfolging && oppfolging.underOppfolging && !oppfolging.erSykmeldtMedArbeidsgiver) {
      kanVise = true;
    }
    if (underOppfolging && underOppfolging.erBrukerUnderOppfolging) {
      kanVise = true;
    }
    return kanVise;
  };

  if (!kanViseKomponent()) return null;

  return (
    <section className="ressurslenker">
      <Systemtittel tag="h2" className="ressurslenker__heading blokk-s">
        Når du søker jobb
      </Systemtittel>
      <div className="tokol">
        <Stillinger />
        <CV />
      </div>
      <div className="tokol">
        <Tips />
      </div>
    </section>
  );
}

export default Jobb;
