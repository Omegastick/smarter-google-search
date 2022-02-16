import { getQuery, setQuery } from "./query";

if (
  window.location.hostname === "www.google.com" &&
  window.location.pathname === "/search"
) {
  if (getQuery() != ":)") {
    setQuery(":)");
  }
}
