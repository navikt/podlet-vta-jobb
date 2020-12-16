import React from "react";
import useSWR from "swr";
import JobbsokertipsIkon from "./svg/jobbsokertips";
import LenkepanelMedIkon from "./lenkepanel-med-ikon";
import { jobbsokerkompetanseUrl, veiviserarbeidssokerUrl, besvarelseUrl } from "../config";

const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

const Jobbsokertips = () => {
  const { data } = useSWR(besvarelseUrl, fetcher);
  const harJobbbsokerbesvarelse = data && data.raad;

  const URL = harJobbbsokerbesvarelse ? jobbsokerkompetanseUrl : veiviserarbeidssokerUrl;
  const lenketekst = harJobbbsokerbesvarelse ? "Dine jobbsøkertips" : "Få jobbsøkertips";

  return (
    <LenkepanelMedIkon href={URL} alt="" overskrift={lenketekst}>
      <JobbsokertipsIkon />
    </LenkepanelMedIkon>
  );
};

export default Jobbsokertips;
