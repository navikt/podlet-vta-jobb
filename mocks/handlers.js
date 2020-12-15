const { get } = require("./msw-utils");
const oppfolging = require("./oppfolging.json");
const meldekortinfo = require("./meldekortinfo.json");
const auth = require("./auth.json");

module.exports.handlers = [
  get("https://api.nav.no/vta-api/oppfolging", oppfolging),
  get("https://api.nav.no/dittnav-api/meldekortinfo", meldekortinfo),
  get("https://api.nav.no/innloggingsstatus/auth", auth),
];
