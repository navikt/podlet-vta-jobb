import React from "react";
import "./jobb.less";
import Rad from "./rad";
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
    <Rad>
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
    </Rad>
  );
}

export default Jobb;
