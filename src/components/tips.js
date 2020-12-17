import React from "react";
import JobbsokertipsIkon from "./svg/jobbsokertips";
import LenkepanelMedIkon from "./lenkepanel-med-ikon";
import { jobbsokerkompetanseUrl, veiviserarbeidssokerUrl } from "../config";

const Jobbsokertips = (props) => {
  const { besvarelse } = props;
  const harJobbbsokerbesvarelse = besvarelse && besvarelse.raad;

  const URL = harJobbbsokerbesvarelse ? jobbsokerkompetanseUrl : veiviserarbeidssokerUrl;
  const lenketekst = harJobbbsokerbesvarelse ? "Dine jobbsøkertips" : "Få jobbsøkertips";

  return (
    <LenkepanelMedIkon href={URL} alt="" overskrift={lenketekst}>
      <JobbsokertipsIkon />
    </LenkepanelMedIkon>
  );
};

export default Jobbsokertips;
