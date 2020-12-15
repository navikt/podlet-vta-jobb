function getEnvironment() {
  let environment = "development";
  if (process.env.NODE_ENV === "production") {
    environment = "production";
  }
  return environment;
}

const MELDEKORTINFO_URL = {
  development: "https://api.nav.no/dittnav-api/meldekortinfo",
  production: "https://www.dev.nav.no/person/dittnav-api/meldekortinfo",
};

const OPPFOLGING_URL = {
  development: "https://api.nav.no/vta-api/oppfolging",
  production: "/person/layout-dittnav/podium-resource/podlet-vta-situasjon/api-oppfolging",
};

const AUTH_URL = {
  development: "https://api.nav.no/innloggingsstatus/auth",
  production: "https://innloggingsstatus.dev.nav.no/person/innloggingsstatus/auth",
};

module.exports.meldekortinfoUrl = MELDEKORTINFO_URL[getEnvironment()];
module.exports.oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
module.exports.authUrl = AUTH_URL[getEnvironment()];
