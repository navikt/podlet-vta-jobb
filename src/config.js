function getEnvironment() {
  let environment = "development";
  if (process.env.NODE_ENV === "production") {
    environment = "production";
  }
  return environment;
}

const OPPFOLGING_URL = {
  development: "https://api.nav.no/dittnav-api/oppfolging",
  production: "https://www.dev.nav.no/person/dittnav-api/oppfolging",
};

export const oppfolgingUrl = OPPFOLGING_URL[getEnvironment()];
