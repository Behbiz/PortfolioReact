import React, { useState } from "react";
import { i18n } from "./i18n";
import Layout from "./components/Layout";

import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [language, setLanguage] = useState("es");
  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <CommonStyles language={language}>
      <div className="App">
        <Layout handleOnclick={handleOnclick} />
        <ToastContainer />
      </div>
    </CommonStyles>
  );
};

export default App;

const CommonStyles = styled.div`
  

  .nav,
  .menuTM,
  .home h1,
  .btns 

  .nav,
  .home,
  .aboutme,
  .hobbies,
  .resume,
  .portfolio,
  .contact,
  form input,
  form textarea,
  form button {
    font-family: ${(props) =>
      props.language === "br" ? "'Poppins', sans-serif" : ""};
    font-family: ${(props) =>
      props.language === "en" ? "'Poppins', sans-serif" : ""};

    font-family: ${(props) =>
      props.language === "es" ? "'Poppins', sans-serif" : ""};
  }

  .education ul,
  .languages ul {
    border-left: ${(props) =>
      props.language === "" ? "none" : "1px solid #47a3da"};
    
  }


`;
