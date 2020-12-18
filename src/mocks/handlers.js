import get from "./msw-utils";
import underOppfolging from "./under-oppfolging.json";
import oppfolging from "./oppfolging.json";
import auth from "./auth.json";
import jobbsokerbesvarelse from "./jobbsokerbesvarelse.json";

export const handlers = [
  get("https://api.nav.no/dittnav-api/oppfolging", underOppfolging),
  get("https://api.nav.no/vta-api/oppfolging", oppfolging),
  get("https://api.nav.no/vta-api/jobbsokerbesvarelse", jobbsokerbesvarelse),
  get("https://api.nav.no/innloggingsstatus/auth", auth),
  get("https://api.nav.no/innloggingsstatus/auth", auth),
];
