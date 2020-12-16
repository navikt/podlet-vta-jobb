import React from "react";
import CvIkon from "./svg/cv";
import LenkepanelMedIkon from "./lenkepanel-med-ikon";
import { cvUrl } from "../config";

const CV = () => {
  return (
    <LenkepanelMedIkon href={cvUrl} alt="" overskrift="Din CV og jobbprofil">
      <CvIkon />
    </LenkepanelMedIkon>
  );
};

export default CV;
