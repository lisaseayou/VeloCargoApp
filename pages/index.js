import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import Header from '../sources/layout/Header/Header';
import theme from '../sources/theme';
import Buysell from '../sources/view/home/Buysell';
import CardAdsList from '../sources/view/home/CardAdsList';
import ListArticlesHomePage from '../sources/view/articles/view/ListArticlesHomePage';
import Footer from '../sources/layout/Footer';
import Filter from '../sources/view/marketplace/components/Filter';
import Marketplace from "../sources/view/marketplace/Marketplace";

function index(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <Marketplace />
        {/* <Buysell />
        <CardAdsList />
        <ListArticlesHomePage />
        <Footer/>  */}
        </ThemeProvider>

    </div>
  );
}

export default index;