import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import University from '../pages/university/University';
import Countries from '../pages/countries/Countries';
import Resources from '../pages/resources/Resources';
import Gallery from '../pages/gallery/Gallery';
import Contact from '../pages/contact/Contact';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'university',
        element: <University />,
      },
      {
        path: 'countries',
        element: <Countries />,
      },
      {
        path: 'resources',
        element: <Resources />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

export default MainRoutes;
