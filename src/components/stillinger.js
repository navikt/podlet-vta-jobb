import React from "react";
import StillingsokIkon from "./svg/stillingsok";
import LenkepanelMedIkon from "./lenkepanel-med-ikon";
import { stillingLenke } from "../config";

const StillingSok = () => {
  return (
    <LenkepanelMedIkon href={stillingLenke} alt="" overskrift="Finn ledige stillinger">
      <StillingsokIkon />
    </LenkepanelMedIkon>
  );
};

export default StillingSok;
