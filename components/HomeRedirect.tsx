import { useEffect } from "react";

export function HomeRedirect() {
  useEffect(() => {
    window.location.replace("/introduction");
  }, []);

  return <span></span>;
}
