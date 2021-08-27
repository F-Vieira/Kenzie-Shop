import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

import Header from "./components/Header";
import Routes from "./routes";
import ScrollButton from "./components/ScrollButton";

import GlogalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
      />
      <GlogalStyle />
      <Header />
      <Routes />
      <ScrollButton />
    </>
  );
};

export default App;
