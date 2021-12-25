import React from "react";
import Screens from "./src/navigation";
import context from "./src/context/context";

const { AppProvider } = context;

export default function App() {
  return (
    <AppProvider>
      <Screens />
    </AppProvider>
  );
}
