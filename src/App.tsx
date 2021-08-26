import React from "react";
import Header from "./components/Header";
import Routes from "./routes";
import GlogalStyle from "./styles/global";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";

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
    </>
  );
};

export default App;
