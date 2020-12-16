function getEnvironment() {
  let environment = "development";
  if (process.env.NODE_ENV === "production") {
    environment = "production";
  }
  return environment;
}

const UNDER_OPPFOLGING_URL = {
  development: "https://api.nav.no/dittnav-api/oppfolging",
  production: "https://www.dev.nav.no/person/dittnav-api/oppfolging",
};

const OPPFOLGING_URL = {
  development: "https://api.nav.no/vta-api/oppfolging",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-situasjon/api-oppfolging",
};

const AUTH_URL = {
  development: "https://api.nav.no/innloggingsstatus/auth",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};

export const underOppfolgingUrl = UNDER_OPPFOLGING_URL[getEnvironment()];
export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
export const authUrl = AUTH_URL[getEnvironment()];
export const cvUrl = "https://arbeidsplassen.nav.no/cv";
export const jobbsokerkompetanseUrl = "https://jobbsokerkompetanse.nav.no/";
export const veiviserarbeidssokerUrl = "https://veiviserarbeidssoker.nav.no";
export const stillingLenke = "https://arbeidsplassen.nav.no/stillinger";
