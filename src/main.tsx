import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import NavBar from './components/navbar';
import './index.css';
import { AboutPage, HomePage, OurStoryPage, RsvpPage } from './pages';

const root = document.getElementById('root')!;

const theme = createTheme({
  fontFamily: 'Montserrat, sans-serif',
  defaultRadius: 'md',
});

createRoot(root).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/rsvp" element={<RsvpPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
