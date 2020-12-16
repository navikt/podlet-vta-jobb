import React from "react";
import JobbsokertipsIkon from "./svg/jobbsokertips";
import LenkepanelMedIkon from "./lenkepanel-med-ikon";
import { jobbsokerkompetanseUrl, veiviserarbeidssokerUrl } from "../config";
const jobbsokerbesvarelseData = {};

const Jobbsokertips = () => {
  const harJobbbsokerbesvarelse = !!jobbsokerbesvarelseData?.raad;

  const URL = harJobbbsokerbesvarelse ? jobbsokerkompetanseUrl : veiviserarbeidssokerUrl;

  const lenketekst = harJobbbsokerbesvarelse
    ? "jobbsokertips-overskrift-har-besvarelse"
    : "jobbsokertips-overskrift-har-ikke-besvarelse";

  return (
    <LenkepanelMedIkon href={URL} alt="" overskrift={lenketekst}>
      <JobbsokertipsIkon />
    </LenkepanelMedIkon>
  );
};

export default Jobbsokertips;
