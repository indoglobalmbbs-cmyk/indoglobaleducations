import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import University from '../pages/university/University';
import Countries from '../pages/countries/Countries';
import Blog from '../pages/blog/Blog';
import News from '../pages/news/News';
import Faqs from '../pages/faqs/Faqs';
import PhotoGallery from '../pages/photoGallery/PhotoGallery';
import VideoGallery from '../pages/videoGallery/VideoGallery';
import Contact from '../pages/contact/Contact';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'university', element: <University /> },
      { path: 'countries', element: <Countries /> },
      { path: 'blog', element: <Blog /> },
      { path: 'news', element: <News /> },
      { path: 'faqs', element: <Faqs /> },
      { path: 'photosGallery', element: <PhotoGallery /> },
      { path: 'videosGallery', element: <VideoGallery /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

export default MainRoutes;
