import get from "./msw-utils";
import underOppfolging from "./under-oppfolging.json";

export const handlers = [get("https://api.nav.no/dittnav-api/oppfolging", underOppfolging)];
