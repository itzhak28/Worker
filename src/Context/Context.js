import { createContext, useEffect, useState } from "react";
export const AppContext = createContext(null);

export default function ContextProvider(props) {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const localFavs = localStorage.getItem("favs");
    if (localFavs) {
      const parsed = JSON.parse(localFavs);
      setFavs(parsed);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(favs));
  }, [favs]);

  const globalValue = {
    favs,
    setFavs,
  };
  return (
    <AppContext.Provider value={globalValue}>
      {props.children}
    </AppContext.Provider>
  );
}
