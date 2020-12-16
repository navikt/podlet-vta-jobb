import get from "./msw-utils";
import oppfolging from "./oppfolging.json";

export const handlers = [get("https://api.nav.no/dittnav-api/oppfolging", oppfolging)];
