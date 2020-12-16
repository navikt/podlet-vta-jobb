import React from "react";
import { Sidetittel } from "nav-frontend-typografi";

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

  return <Sidetittel>Her kommer det masse jobbers</Sidetittel>;
}

export default Jobb;
