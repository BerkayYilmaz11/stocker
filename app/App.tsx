import React from "react";
import Pages from "./src/pages/Pages";
import context from "./src/context/context";

const { AppProvider } = context;

export default function App() {
  return (
    <AppProvider>
      <Pages />
    </AppProvider>
  );
}
