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
import UralStateMedicalUniversity from '../pages/university/russiaUniversities/UralStateMedicalUniversity';
import Pirogov from '../pages/university/russiaUniversities/Pirogov';
import Kursk from '../pages/university/russiaUniversities/Kursk';
import Northern from '../pages/university/russiaUniversities/Northern';
import Novgorod from '../pages/university/russiaUniversities/Novgorod';
import Volgograd from '../pages/university/russiaUniversities/Volgograd';
import FarEastern from '../pages/university/russiaUniversities/FarEastern';
import Kirov from '../pages/university/russiaUniversities/Kirov';
import Kemerovo from '../pages/university/russiaUniversities/Kemerovo';
import KabardinoBalkarian from '../pages/university/russiaUniversities/KabardinoBalkarian';
import Komi from '../pages/university/russiaUniversities/Komi';
import Pskov from '../pages/university/russiaUniversities/Pskov';
import SevastopolStateUniversity from '../pages/university/russiaUniversities/SevastopolStateUniversity';
import ImmanuelKantBalticFederalUniversity from '../pages/university/russiaUniversities/ImmanuelKantBalticFederalUniversity';
import ChechenStateMedicalUniversity from '../pages/university/russiaUniversities/ChechenStateMedicalUniversity';
import MurmanskArctic from '../pages/university/russiaUniversities/MurmanskArctic';
import SynergyUniversity from '../pages/university/russiaUniversities/SynergyUniversity';
import YaroslavlStateMedicalUniversity from '../pages/university/russiaUniversities/YaroslavlStateMedicalUniversity';
import UlyanovskStateUniversity from '../pages/university/russiaUniversities/UlyanovskStateUniversity';
import SiberianStateMedicalUniversity from '../pages/university/russiaUniversities/SiberianStateMedicalUniversity';
import IMSechenov from '../pages/university/russiaUniversities/IMSechenov';
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
import PeopleFriendshipUniversity from '../pages/university/russiaUniversities/PeopleFriendshipUniversity';
import RyazanStateUniversity from '../pages/university/russiaUniversities/RyazanStateUniversity';
import DagestanStateMedicalUniversity from '../pages/university/russiaUniversities/DagestanStateMedicalUniversity';
import SaintPetersburgMedicalUniversity from '../pages/university/russiaUniversities/SaintPetersburgMedicalUniversity';
import IzhevskStateMedicalUniversity from '../pages/university/russiaUniversities/IzhevskStateMedicalUniversity';

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
        path: 'uralStateMedicalUniversity',
        element: <UralStateMedicalUniversity />,
      },
      {
        path: 'pirogov',
        element: <Pirogov />,
      },
      {
        path: 'kursk',
        element: <Kursk />,
      },
      {
        path: 'northern',
        element: <Northern />,
      },
      {
        path: 'novgorod',
        element: <Novgorod />,
      },
      {
        path: 'volgograd',
        element: <Volgograd />,
      },
      {
        path: 'farEastern',
        element: <FarEastern />,
      },
      {
        path: 'kirov',
        element: <Kirov />,
      },
      {
        path: 'kemerovo',
        element: <Kemerovo />,
      },
      {
        path: 'kabardinoBalkarian',
        element: <KabardinoBalkarian />,
      },
      {
        path: 'komi',
        element: <Komi />,
      },
      {
        path: 'pskov',
        element: <Pskov />,
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
        path: 'murmanskArctic',
        element: <MurmanskArctic />,
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
        path: 'iMSechenov',
        element: <IMSechenov />,
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
        path: 'peopleFriendshipUniversity',
        element: <PeopleFriendshipUniversity />,
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
        path: 'saintPetersburgMedicalUniversity',
        element: <SaintPetersburgMedicalUniversity />,
      },
      {
        path: 'izhevskStateMedicalUniversity',
        element: <IzhevskStateMedicalUniversity />,
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

      { path: 'russia', element: <Russia /> },
      { path: 'armenia', element: <Armenia /> },
      { path: 'georgia', element: <Georgia /> },
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
