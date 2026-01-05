import { Navigate, Route, Routes } from 'react-router';

import { AboutChiangMaiPage, FaqPage, HomePage, OurStoryPage, RsvpPage } from './pages';

const routes = [
  { path: '/', element: <Navigate to="/home" replace /> },
  { path: '/home', element: <HomePage /> },
  { path: '/our-story', element: <OurStoryPage /> },
  { path: '/rsvp', element: <RsvpPage /> },
  { path: '/faq', element: <FaqPage /> },
  { path: '/about-chiang-mai', element: <AboutChiangMaiPage /> },
  { path: '*', element: <Navigate to="/home" replace /> }, // Redirect any unknown paths to homea
];
export default function Router() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Routes>
  );
}
