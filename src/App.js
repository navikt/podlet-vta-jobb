import React from "react";
import useSWR from "swr";
import "./App.css";
import Jobb from "./components/jobb";
import { oppfolgingUrl } from "./config";

const fetcher = async (url) => {
  const response = await fetch(url, { method: "GET", credentials: "include" });
  const data = await response.json();
  return data;
};

function App() {
  const { data: oppfolging } = useSWR(oppfolgingUrl, fetcher);

  return (
    <div className="podlet-vta-jobb">
      Kan du se meg?
      <Jobb oppfolging={oppfolging} />
    </div>
  );
}

export default App;
