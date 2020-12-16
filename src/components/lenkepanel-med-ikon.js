import * as React from "react";
import { Normaltekst, Undertittel } from "nav-frontend-typografi";
import LenkepanelBase from "nav-frontend-lenkepanel";

function LenkepanelMedIkon(props) {
  const { href, onClick, className, overskrift, ingress, children } = props;

  const linkCreator = (props) => {
    /* eslint-disable jsx-a11y/anchor-has-content */
    /* eslint-disable jsx-a11y/click-events-have-key-events */
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return <a onClick={onClick} {...props} />;
  };

  return (
    <LenkepanelBase className={className} href={href} tittelProps="undertittel" linkCreator={linkCreator} border={true}>
      <div className="lenkepanel__innhold">
        <div className="lenkepanel__ikon">{children}</div>
        <div>
          <Undertittel>{overskrift}</Undertittel>
          {ingress ? <Normaltekst>{ingress}</Normaltekst> : ""}
        </div>
      </div>
    </LenkepanelBase>
  );
}

export default LenkepanelMedIkon;
