import { createTheme, MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router';
import classes from './App.module.css';
import Footer from './components/generic/footer/footer';
import Header from './components/generic/header/header';
import LogoHeader from './components/generic/logo-header/logo-header';
import NavBar from './components/generic/navbar/navbar';
import Router from './router';

const theme = createTheme({
  fontFamily: 'Abhaya Libre, serif',
  defaultRadius: 'md',
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <div className={classes.wrapper}>
          <LogoHeader />
          <div className={classes.headerContainer}>
            <Header />
            <NavBar />
          </div>
          <div className={classes.content}>
            <Router />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}
