import React from "react";
import { Sidetittel } from "nav-frontend-typografi";

function Jobb(props) {
  const { oppfolging } = props;

  if (!oppfolging || (oppfolging && !oppfolging.erBrukerUnderOppfolging)) return null;

  return <Sidetittel>Her kommer det masse jobbers</Sidetittel>;
}

export default Jobb;
