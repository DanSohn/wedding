import { createTheme, MantineProvider } from '@mantine/core';
import classes from './App.module.css';
import Footer from './components/generic/footer/footer';
import Header from './components/generic/header/header';
import NavBar from './components/generic/navbar/navbar';
import Router from './router';

const theme = createTheme({
  fontFamily: 'Abhaya Libre, serif',
  defaultRadius: 'md',
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div className={classes.headerContainer}>
        {/* <HeaderImage /> */}
        <Header />
        <NavBar />
      </div>
      <Router />
      <Footer />
    </MantineProvider>
  );
}
