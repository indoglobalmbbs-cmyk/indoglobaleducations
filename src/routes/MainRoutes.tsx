import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

import MariStateMedicalUniversity from '../pages/university/russiaUniversities/MariStateMedicalUniversity';
import PermStateMedicalUniversity from '../pages/university/russiaUniversities/PermStateMedicalUniversity';
import OrenburgMedicalUniversity from '../pages/university/russiaUniversities/OrenburgMedicalUniversity';
import TverMedicalUniversity from '../pages/university/russiaUniversities/TverMedicalUniversity';
import KazanStateMedicalUniversity from '../pages/university/russiaUniversities/KazanStateMedicalUniversity';
import KazanFederalUniversity from '../pages/university/russiaUniversities/KazanFederalUniversity';
import Omsk from '../pages/university/russiaUniversities/Omsk';
import Altai from '../pages/university/russiaUniversities/Altai';
import Bashkir from '../pages/university/russiaUniversities/Bashkir';
import CrimeaFederalUniversity from '../pages/university/russiaUniversities/CrimeaFederalUniversity';
import Samara from '../pages/university/russiaUniversities/Samara';
import Orel from '../pages/university/russiaUniversities/Orel';

import ProgressStateMedicalUniversity from '../pages/university/armeniaUniversities/ProgressStateMedicalUniversity';
import MkhitarGoshArmenianUniversity from '../pages/university/armeniaUniversities/MkhitarGoshArmenianUniversity';
import YerevanStateMedicalUniversity from '../pages/university/armeniaUniversities/YerevanStateMedicalUniversity';
import HaybusakMedicalUniversity from '../pages/university/armeniaUniversities/HaybusakMedicalUniversity';

import Countries from '../pages/countries/Countries';
import Blog from '../pages/blog/Blog';
import News from '../pages/news/News';
import Faqs from '../pages/faqs/Faqs';
import PhotoGallery from '../pages/photoGallery/PhotoGallery';
import VideoGallery from '../pages/videoGallery/VideoGallery';
import Contact from '../pages/contact/Contact';
import GeorgianNationalUniversity from '../pages/university/georgiaUniversities/GeorgianNationalUniversity';
import EuropeanMedicalUniversity from '../pages/university/georgiaUniversities/EuropeanMedicalUniversity';
import DavidTvildianiMedicalUniversity from '../pages/university/georgiaUniversities/DavidTvildianiMedicalUniversity';
import EastEuropeanMedicalUniversity from '../pages/university/georgiaUniversities/EastEuropeanMedicalUniversity';
import AlteUniversity from '../pages/university/georgiaUniversities/AlteUniversity';
import UniversityofGeorgia from '../pages/university/georgiaUniversities/UniversityofGeorgia';
import CaucasusInternationalUniversity from '../pages/university/georgiaUniversities/CaucasusInternationalUniversity';
import TbilisiStateMedicalUniversity from '../pages/university/georgiaUniversities/TbilisiStateMedicalUniversity';
import BatumiShotaRustaveliStateUniversity from '../pages/university/georgiaUniversities/BatumiShotaRustaveliStateUniversity';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },

      {
        path: 'mariStateMedicalUniversity',
        element: <MariStateMedicalUniversity />,
      },
      {
        path: 'permStateMedicalUniversity',
        element: <PermStateMedicalUniversity />,
      },
      {
        path: 'orenburgMedicalUniversity',
        element: <OrenburgMedicalUniversity />,
      },
      {
        path: 'tverMedicalUniversity',
        element: <TverMedicalUniversity />,
      },
      {
        path: 'kazanStateMedicalUniversity',
        element: <KazanStateMedicalUniversity />,
      },
      {
        path: 'kazanFederalUniversity',
        element: <KazanFederalUniversity />,
      },
      {
        path: 'omsk',
        element: <Omsk />,
      },
      {
        path: 'altai',
        element: <Altai />,
      },
      {
        path: 'bashkir',
        element: <Bashkir />,
      },
      {
        path: 'crimeaFederalUniversity',
        element: <CrimeaFederalUniversity />,
      },
      {
        path: 'samara',
        element: <Samara />,
      },
      {
        path: 'orel',
        element: <Orel />,
      },

      {
        path: 'progressStateMedicalUniversity',
        element: <ProgressStateMedicalUniversity />,
      },
      {
        path: 'mkhitarGoshArmenianUniversity',
        element: <MkhitarGoshArmenianUniversity />,
      },
      {
        path: 'yerevanStateMedicalUniversity',
        element: <YerevanStateMedicalUniversity />,
      },
      {
        path: 'haybusakMedicalUniversity',
        element: <HaybusakMedicalUniversity />,
      },

      {
        path: 'georgianNationalUniversity',
        element: <GeorgianNationalUniversity />,
      },
      {
        path: 'europeanMedicalUniversity',
        element: <EuropeanMedicalUniversity />,
      },
      {
        path: 'davidTvildianiMedicalUniversity',
        element: <DavidTvildianiMedicalUniversity />,
      },
      {
        path: 'eastEuropeanMedicalUniversity',
        element: <EastEuropeanMedicalUniversity />,
      },
      {
        path: 'alteUniversity',
        element: <AlteUniversity />,
      },
      {
        path: 'universityofGeorgia',
        element: <UniversityofGeorgia />,
      },
      {
        path: 'caucasusInternationalUniversity',
        element: <CaucasusInternationalUniversity />,
      },
      {
        path: 'tbilisiStateMedicalUniversity',
        element: <TbilisiStateMedicalUniversity />,
      },
      {
        path: 'batumiShotaRustaveliStateUniversity',
        element: <BatumiShotaRustaveliStateUniversity />,
      },

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
