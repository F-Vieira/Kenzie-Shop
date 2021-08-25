import React from "react";
import Header from "./components/Header";
import Routes from "./routes";
import GlogalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlogalStyle />
      <Header />
      <Routes />
    </>
  );
};

export default App;
