import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import { AboutPage, HomePage, OurStoryPage, RsvpPage } from './pages';

const routes = [
  { path: '/', element: <Navigate to="/home" replace /> },
  { path: '/home', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/our-story', element: <OurStoryPage /> },
  { path: '/rsvp', element: <RsvpPage /> },
];
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
