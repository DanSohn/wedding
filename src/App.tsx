import { createTheme, MantineProvider } from '@mantine/core';
import NavBar from './components/navbar';
import Router from './router';

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <NavBar />
      <Router />
    </MantineProvider>
  );
}
