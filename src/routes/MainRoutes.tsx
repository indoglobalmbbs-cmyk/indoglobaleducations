import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';

import MariStateUniversity from '../pages/university/russiaUniversities/MariStateUniversity';
import PermStateMedicalUniversity from '../pages/university/russiaUniversities/PermStateMedicalUniversity';
import OrenburgStateMedicalUniversity from '../pages/university/russiaUniversities/OrenburgStateMedicalUniversity';
import TverStateMedicalUniversity from '../pages/university/russiaUniversities/TverStateMedicalUniversity';
import KazanStateMedicalUniversity from '../pages/university/russiaUniversities/KazanStateMedicalUniversity';
import KazanFederalUniversity from '../pages/university/russiaUniversities/KazanFederalUniversity';
import OmskStateMedicalUniversity from '../pages/university/russiaUniversities/OmskStateMedicalUniversity';
import AltaiStateMedicalUniversity from '../pages/university/russiaUniversities/AltaiStateMedicalUniversity';
import BashkirStateMedicalUniversity from '../pages/university/russiaUniversities/BashkirStateMedicalUniversity';
import CrimeaFederalUniversity from '../pages/university/russiaUniversities/CrimeaFederalUniversity';
import SamaraStateMedicalUniversity from '../pages/university/russiaUniversities/SamaraStateMedicalUniversity';
import OrelStateUniversity from '../pages/university/russiaUniversities/OrelStateUniversity';
import UralStateMedicalUniversity from '../pages/university/russiaUniversities/UralStateMedicalUniversity';
import PirogovRussianNationalResearchMedicalUniversity from '../pages/university/russiaUniversities/PirogovRussianNationalResearchMedicalUniversity';
import KurskStateMedicalUniversity from '../pages/university/russiaUniversities/KurskStateMedicalUniversity';
import NorthernStateMedicalUniversity from '../pages/university/russiaUniversities/NorthernStateMedicalUniversity';
import NizhnyNovgorodStateMedicalUniversity from '../pages/university/russiaUniversities/NizhnyNovgorodStateMedicalUniversity';
import VolgogradStateMedicalUniversity from '../pages/university/russiaUniversities/VolgogradStateMedicalUniversity';
import FarEasternFederalUniversity from '../pages/university/russiaUniversities/FarEasternFederalUniversity';
import KirovStateMedicalUniversity from '../pages/university/russiaUniversities/KirovStateMedicalUniversity';
import KemerovoStateMedicalUniversity from '../pages/university/russiaUniversities/KemerovoStateMedicalUniversity';
import KabardinoBalkarianStateUniversity from '../pages/university/russiaUniversities/KabardinoBalkarianStateUniversity';
import Komi from '../pages/university/russiaUniversities/Komi';
import PskovStateUniversity from '../pages/university/russiaUniversities/PskovStateUniversity';
import SevastopolStateUniversity from '../pages/university/russiaUniversities/SevastopolStateUniversity';
import ImmanuelKantBalticFederalUniversity from '../pages/university/russiaUniversities/ImmanuelKantBalticFederalUniversity';
import ChechenStateMedicalUniversity from '../pages/university/russiaUniversities/ChechenStateMedicalUniversity';
import MurmanskArcticUniversity from '../pages/university/russiaUniversities/MurmanskArcticUniversity';
import SynergyUniversity from '../pages/university/russiaUniversities/SynergyUniversity';
import YaroslavlStateMedicalUniversity from '../pages/university/russiaUniversities/YaroslavlStateMedicalUniversity';
import UlyanovskStateUniversity from '../pages/university/russiaUniversities/UlyanovskStateUniversity';
import SiberianStateMedicalUniversity from '../pages/university/russiaUniversities/SiberianStateMedicalUniversity';
import IMSechenovFirstMoscowStateMedicalUniversity from '../pages/university/russiaUniversities/IMSechenovFirstMoscowStateMedicalUniversity';
import SouthUralMedicalUniversity from '../pages/university/russiaUniversities/SouthUralMedicalUniversity';
import NorthOssetian from '../pages/university/russiaUniversities/NorthOssetian';
import NorthCaucasian from '../pages/university/russiaUniversities/NorthCaucasian';
import TulaStateUniversity from '../pages/university/russiaUniversities/TulaStateUniversity';
import ChitaStateMedicalAcademy from '../pages/university/russiaUniversities/ChitaStateMedicalAcademy';
import LobachevskyStateUniversity from '../pages/university/russiaUniversities/LobachevskyStateUniversity';
import ChuvashStateMedicalUniversity from '../pages/university/russiaUniversities/ChuvashStateMedicalUniversity';
import IngushStateUniversity from '../pages/university/russiaUniversities/IngushStateUniversity';
import NorthWesternStateUniversity from '../pages/university/russiaUniversities/NorthWesternStateUniversity';
import AstrakhanStateUniversity from '../pages/university/russiaUniversities/AstrakhanStateUniversity';
import KubanStateMedicalUniversity from '../pages/university/russiaUniversities/KubanStateMedicalUniversity';
import SmolenskStateMedicalUniversity from '../pages/university/russiaUniversities/SmolenskStateMedicalUniversity';
import PeoplesFriendshipUniversityofRussia from '../pages/university/russiaUniversities/PeoplesFriendshipUniversityofRussia';
import RyazanStateUniversity from '../pages/university/russiaUniversities/RyazanStateUniversity';
import DagestanStateMedicalUniversity from '../pages/university/russiaUniversities/DagestanStateMedicalUniversity';
import PavlovFirstSaintPetersburgStateMedicalUniversity from '../pages/university/russiaUniversities/PavlovFirstSaintPetersburgStateMedicalUniversity';
import IzhevskStateMedicalAcademy from '../pages/university/russiaUniversities/IzhevskStateMedicalAcademy';

import ProgressMedicalUniversity from '../pages/university/armeniaUniversities/ProgressMedicalUniversity';
import MkhitarGoshArmenianRussianInternationalUniversity from '../pages/university/armeniaUniversities/MkhitarGoshArmenianRussianInternationalUniversity';
import YerevanStateMedicalUniversity from '../pages/university/armeniaUniversities/YerevanStateMedicalUniversity';
import YerevanHaybusakUniversity from '../pages/university/armeniaUniversities/YerevanHaybusakUniversity';
import UniversityTraditionalMedicine from '../pages/university/armeniaUniversities/UniversityTraditionalMedicine';
import ArmenianMedicalInstitute from '../pages/university/armeniaUniversities/ArmenianMedicalInstitute';
import TerezaMedicalUniversity from '../pages/university/armeniaUniversities/TerezaMedicalUniversity';

import GeorgianNationalUniversity from '../pages/university/georgiaUniversities/GeorgianNationalUniversity';
import EuropeanMedicalUniversity from '../pages/university/georgiaUniversities/EuropeanMedicalUniversity';
import DavidTvildianiMedicalUniversity from '../pages/university/georgiaUniversities/DavidTvildianiMedicalUniversity';
import EastEuropeanUniversity from '../pages/university/georgiaUniversities/EastEuropeanUniversity';
import AlteUniversity from '../pages/university/georgiaUniversities/AlteUniversity';
import UniversityofGeorgia from '../pages/university/georgiaUniversities/UniversityofGeorgia';
import CaucasusInternationalUniversity from '../pages/university/georgiaUniversities/CaucasusInternationalUniversity';
import TbilisiStateMedicalUniversity from '../pages/university/georgiaUniversities/TbilisiStateMedicalUniversity';
import BatumiShotaRustaveliStateUniversity from '../pages/university/georgiaUniversities/BatumiShotaRustaveliStateUniversity';
import BAUInternationalUniversityBatumi from '../pages/university/georgiaUniversities/BAUInternationalUniversityBatumi';
import CentralUniversityofEurope from '../pages/university/georgiaUniversities/CentralUniversityofEurope';
import GeorgianAmericanUniversity from '../pages/university/georgiaUniversities/GeorgianAmericanUniversity';
import InternationalBlackSeaUniversity from '../pages/university/georgiaUniversities/InternationalBlackSeaUniversity';
import EastWestUniversity from '../pages/university/georgiaUniversities/EastWestUniversity';
import GrigolRobakidzeUniversity from '../pages/university/georgiaUniversities/GrigolRobakidzeUniversity';
import KenWalkerInternationalUniversity from '../pages/university/georgiaUniversities/KenWalkerInternationalUniversity';
import NewVisionUniversity from '../pages/university/georgiaUniversities/NewVisionUniversity';
import IliaStateUniversity from '../pages/university/georgiaUniversities/IliaStateUniversity';
import UniversityGeomediLLC from '../pages/university/georgiaUniversities/UniversityGeomediLLC';
import AvicennaBatumiMedicalUniversity from '../pages/university/georgiaUniversities/AvicennaBatumiMedicalUniversity';
import DavidAghmashenebeliUniversityOfGeorgia from '../pages/university/georgiaUniversities/DavidAghmashenebeliUniversityofGeorgia';
import AkakiTsereteliStateUniversity from '../pages/university/georgiaUniversities/AkakiTsereteliStateUniversity';

import India from '../pages/countries/india/India';
import Russia from '../pages/countries/russia/Russia';
import Armenia from '../pages/countries/armenia/Armenia';
import Georgia from '../pages/countries/georgia/Georgia';
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

      {
        path: 'mariStateUniversity',
        element: <MariStateUniversity />,
      },
      {
        path: 'permStateMedicalUniversity',
        element: <PermStateMedicalUniversity />,
      },
      {
        path: 'orenburgStateMedicalUniversity',
        element: <OrenburgStateMedicalUniversity />,
      },
      {
        path: 'tverstateMedicalUniversity',
        element: <TverStateMedicalUniversity />,
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
        path: 'omskStateMedicalUniversity',
        element: <OmskStateMedicalUniversity />,
      },
      {
        path: 'altaiStateMedicalUniversity',
        element: <AltaiStateMedicalUniversity />,
      },
      {
        path: 'bashkirStateMedicalUniversity',
        element: <BashkirStateMedicalUniversity />,
      },
      {
        path: 'crimeaFederalUniversity',
        element: <CrimeaFederalUniversity />,
      },
      {
        path: 'samaraStateMedicalUniversity',
        element: <SamaraStateMedicalUniversity />,
      },
      {
        path: 'orelStateUniversity',
        element: <OrelStateUniversity />,
      },
      {
        path: 'uralStateMedicalUniversity',
        element: <UralStateMedicalUniversity />,
      },
      {
        path: 'pirogovRussianNationalResearchMedicalUniversity',
        element: <PirogovRussianNationalResearchMedicalUniversity />,
      },
      {
        path: 'kurskStateMedicalUniversity',
        element: <KurskStateMedicalUniversity />,
      },
      {
        path: 'northernStateMedicalUniversity',
        element: <NorthernStateMedicalUniversity />,
      },
      {
        path: 'nizhnyNovgorodStateMedicalUniversity',
        element: <NizhnyNovgorodStateMedicalUniversity />,
      },
      {
        path: 'volgogradStateMedicalUniversity',
        element: <VolgogradStateMedicalUniversity />,
      },
      {
        path: 'farEasternFederalUniversity',
        element: <FarEasternFederalUniversity />,
      },
      {
        path: 'kirovStateMedicalUniversity',
        element: <KirovStateMedicalUniversity />,
      },
      {
        path: 'kemerovoStateMedicalUniversity',
        element: <KemerovoStateMedicalUniversity />,
      },
      {
        path: 'kabardinoBalkarianStateUniversity',
        element: <KabardinoBalkarianStateUniversity />,
      },
      {
        path: 'komi',
        element: <Komi />,
      },
      {
        path: 'pskovStateUniversity',
        element: <PskovStateUniversity />,
      },
      {
        path: 'sevastopolStateUniversity',
        element: <SevastopolStateUniversity />,
      },
      {
        path: 'immanuelKantBalticFederalUniversity',
        element: <ImmanuelKantBalticFederalUniversity />,
      },
      {
        path: 'chechenStateMedicalUniversity',
        element: <ChechenStateMedicalUniversity />,
      },
      {
        path: 'murmanskArcticUniversity',
        element: <MurmanskArcticUniversity />,
      },
      {
        path: 'synergyUniversity',
        element: <SynergyUniversity />,
      },
      {
        path: 'yaroslavlStateMedicalUniversity',
        element: <YaroslavlStateMedicalUniversity />,
      },
      {
        path: 'ulyanovskStateUniversity',
        element: <UlyanovskStateUniversity />,
      },
      {
        path: 'siberianStateMedicalUniversity',
        element: <SiberianStateMedicalUniversity />,
      },
      {
        path: 'iMSechenovFirstMoscowStateMedicalUniversity',
        element: <IMSechenovFirstMoscowStateMedicalUniversity />,
      },
      {
        path: 'southUralMedicalUniversity',
        element: <SouthUralMedicalUniversity />,
      },
      {
        path: 'northOssetian',
        element: <NorthOssetian />,
      },
      {
        path: 'northCaucasian',
        element: <NorthCaucasian />,
      },
      {
        path: 'tulaStateUniversity',
        element: <TulaStateUniversity />,
      },
      {
        path: 'chitaStateMedicalAcademy',
        element: <ChitaStateMedicalAcademy />,
      },
      {
        path: 'lobachevskyStateUniversity',
        element: <LobachevskyStateUniversity />,
      },
      {
        path: 'chuvashStateMedicalUniversity',
        element: <ChuvashStateMedicalUniversity />,
      },
      {
        path: 'ingushStateUniversity',
        element: <IngushStateUniversity />,
      },
      {
        path: 'northWesternStateUniversity',
        element: <NorthWesternStateUniversity />,
      },
      {
        path: 'astrakhanStateUniversity',
        element: <AstrakhanStateUniversity />,
      },
      {
        path: 'kubanStateMedicalUniversity',
        element: <KubanStateMedicalUniversity />,
      },
      {
        path: 'smolenskStateMedicalUniversity',
        element: <SmolenskStateMedicalUniversity />,
      },
      {
        path: 'peoplesFriendshipUniversityofRussia',
        element: <PeoplesFriendshipUniversityofRussia />,
      },
      {
        path: 'ryazanStateUniversity',
        element: <RyazanStateUniversity />,
      },
      {
        path: 'dagestanStateMedicalUniversity',
        element: <DagestanStateMedicalUniversity />,
      },
      {
        path: 'pavlovFirstSaintPetersburgStateMedicalUniversity',
        element: <PavlovFirstSaintPetersburgStateMedicalUniversity />,
      },
      {
        path: 'izhevskStateMedicalAcademy',
        element: <IzhevskStateMedicalAcademy />,
      },

      {
        path: 'progressMedicalUniversity',
        element: <ProgressMedicalUniversity />,
      },
      {
        path: 'mkhitarGoshArmenianRussianInternationalUniversity',
        element: <MkhitarGoshArmenianRussianInternationalUniversity />,
      },
      {
        path: 'yerevanStateMedicalUniversity',
        element: <YerevanStateMedicalUniversity />,
      },
      {
        path: 'yerevanHaybusakUniversity',
        element: <YerevanHaybusakUniversity />,
      },
      {
        path: 'universityTraditionalMedicine',
        element: <UniversityTraditionalMedicine />,
      },
      {
        path: 'armenianMedicalInstitute',
        element: <ArmenianMedicalInstitute />,
      },
      {
        path: 'terezamedicaluniversity',
        element: <TerezaMedicalUniversity />,
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
        path: 'eastEuropeanUniversity',
        element: <EastEuropeanUniversity />,
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
      {
        path: 'bauInternationalUniversityBatumi',
        element: <BAUInternationalUniversityBatumi />,
      },
      {
        path: 'centralUniversityofEurope',
        element: <CentralUniversityofEurope />,
      },
      {
        path: 'georgianAmericanUniversity',
        element: <GeorgianAmericanUniversity />,
      },
      {
        path: 'internationalBlackSeaUniversity',
        element: <InternationalBlackSeaUniversity />,
      },
      {
        path: 'eastWestUniversity',
        element: <EastWestUniversity />,
      },
      {
        path: 'grigolRobakidzeUniversity',
        element: <GrigolRobakidzeUniversity />,
      },
      {
        path: 'kenWalkerInternationalUniversity',
        element: <KenWalkerInternationalUniversity />,
      },
      {
        path: 'newVisionUniversity',
        element: <NewVisionUniversity />,
      },
      {
        path: 'iliaStateUniversity',
        element: <IliaStateUniversity />,
      },
      {
        path: 'universityGeomediLLC',
        element: <UniversityGeomediLLC />,
      },
      {
        path: 'avicennaBatumiMedicalUniversity',
        element: <AvicennaBatumiMedicalUniversity />,
      },
      {
        path: 'davidAghmashenebeliUniversityOfGeorgia',
        element: <DavidAghmashenebeliUniversityOfGeorgia />,
      },
      {
        path: 'akakiTsereteliStateUniversity',
        element: <AkakiTsereteliStateUniversity />,
      },

      { path: 'mbbs-in-india', element: <India /> },
      { path: 'mbbs-in-russia', element: <Russia /> },
      { path: 'mbbs-in-armenia', element: <Armenia /> },
      { path: 'mbbs-in-georgia', element: <Georgia /> },
      { path: 'blog', element: <Blog /> },
      { path: 'news', element: <News /> },
      { path: 'faqs', element: <Faqs /> },
      { path: 'photosGallery', element: <PhotoGallery /> },
      { path: 'videosGallery', element: <VideoGallery /> },
      { path: 'contact-us', element: <Contact /> },
    ],
  },
]);

export default MainRoutes;
