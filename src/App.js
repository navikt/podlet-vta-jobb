import React from "react";
import useSWR from "swr";
import "./App.css";
import Jobb from "./components/jobb";
import { authUrl, oppfolgingUrl, underOppfolgingUrl } from "./config";

const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const { data: auth } = useSWR(authUrl, fetcher);
  const { data: oppfolging } = useSWR(auth && auth.securityLevel === "4" ? oppfolgingUrl : null, fetcher);
  const { data: underOppfolging } = useSWR(auth && auth.securityLevel === "3" ? underOppfolgingUrl : null, fetcher);

  return (
    <div className="podlet-vta-jobb">
      Kan du se meg?
      <Jobb underOppfolging={underOppfolging} oppfolging={oppfolging} />
    </div>
  );
}

export default App;
