import React from "react";
import ReactDOM from "react-dom/client";
import { RouterManager } from "./routes/RouterManager.tsx";
import { PokemonPageContextProvider } from "./context/PagePokemonContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PokemonPageContextProvider>
      <RouterManager />
    </PokemonPageContextProvider>
  </React.StrictMode>
);
