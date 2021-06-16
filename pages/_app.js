import React from "react";
import Footer from "../sources/layout/Footer";
import Home from "../sources/view/home/Home";
import "../styles/globals.css";
import ListArticles from "../sources/view/articles/view/ListArticles";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../sources/theme";
import Ads from "../sources/view/ads/view_ads/Ads";
import Login from "../sources/view/connexion/components/Login";

function MyApp() {
  return (
    <>
   
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Login />
    <Home /> 
      {/* <Ads />
      <ListArticles /> */}
     <Footer /> 
    </ThemeProvider> 
    </>
  );
}

export default MyApp;
