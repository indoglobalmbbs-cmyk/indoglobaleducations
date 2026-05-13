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
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import CookiePolicy from '../pages/legal/CookiePolicy';
import TermsAndConditions from '../pages/legal/TermsAndConditions';
import Disclaimer from '../pages/legal/Disclaimer';

const MainRoutes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },

      {
        path: 'mbbs-in-russia/mari-state-university',
        element: <MariStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/perm-state-medical-university',
        element: <PermStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/orenburg-state-medical-university',
        element: <OrenburgStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/tver-state-medical-university',
        element: <TverStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/kazan-state-medical-university',
        element: <KazanStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/kazan-federal-university',
        element: <KazanFederalUniversity />,
      },
      {
        path: 'mbbs-in-russia/omsk-state-medical-university',
        element: <OmskStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/altai-state-medical-university',
        element: <AltaiStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/bashkir-state-medical-university',
        element: <BashkirStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/crimea-federal-university',
        element: <CrimeaFederalUniversity />,
      },
      {
        path: 'mbbs-in-russia/samara-state-medical-university',
        element: <SamaraStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/orel-state-university',
        element: <OrelStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/ural-state-medical-university',
        element: <UralStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/pirogov-russian-national-research-medical-university',
        element: <PirogovRussianNationalResearchMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/kursk-state-medical-university',
        element: <KurskStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/northern-state-medical-university',
        element: <NorthernStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/nizhny-novgorod-state-medical-university',
        element: <NizhnyNovgorodStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/volgograd-state-medical-university',
        element: <VolgogradStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/far-eastern-federal-university',
        element: <FarEasternFederalUniversity />,
      },
      {
        path: 'mbbs-in-russia/kirov-state-medical-university',
        element: <KirovStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/kemerovo-state-medical-university',
        element: <KemerovoStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/kabardino-balkarian-state-university',
        element: <KabardinoBalkarianStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/komi',
        element: <Komi />,
      },
      {
        path: 'mbbs-in-russia/pskov-state-university',
        element: <PskovStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/sevastopol-state-university',
        element: <SevastopolStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/immanuel-kant-baltic-federal-university',
        element: <ImmanuelKantBalticFederalUniversity />,
      },
      {
        path: 'mbbs-in-russia/chechen-state-medical-university',
        element: <ChechenStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/murmansk-arctic-university',
        element: <MurmanskArcticUniversity />,
      },
      {
        path: 'mbbs-in-russia/synergy-university',
        element: <SynergyUniversity />,
      },
      {
        path: 'mbbs-in-russia/yaroslavl-state-medical-university',
        element: <YaroslavlStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/ulyanovsk-state-university',
        element: <UlyanovskStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/siberian-state-medical-university',
        element: <SiberianStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/im-sechenov-first-moscow-state-medical-university',
        element: <IMSechenovFirstMoscowStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/south-ural-medical-university',
        element: <SouthUralMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/north-ossetian',
        element: <NorthOssetian />,
      },
      {
        path: 'mbbs-in-russia/north-caucasian',
        element: <NorthCaucasian />,
      },
      {
        path: 'mbbs-in-russia/tula-state-university',
        element: <TulaStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/chita-state-medical-academy',
        element: <ChitaStateMedicalAcademy />,
      },
      {
        path: 'mbbs-in-russia/lobachevsky-state-university',
        element: <LobachevskyStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/chuvash-state-medical-university',
        element: <ChuvashStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/ingush-state-university',
        element: <IngushStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/north-western-state-university',
        element: <NorthWesternStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/astrakhan-state-university',
        element: <AstrakhanStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/kuban-state-medical-university',
        element: <KubanStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/smolensk-state-medical-university',
        element: <SmolenskStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/peoples-friendship-university-of-russia',
        element: <PeoplesFriendshipUniversityofRussia />,
      },
      {
        path: 'mbbs-in-russia/ryazan-state-university',
        element: <RyazanStateUniversity />,
      },
      {
        path: 'mbbs-in-russia/dagestan-state-medical-university',
        element: <DagestanStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/pavlov-first-saint-petersburg-state-medical-university',
        element: <PavlovFirstSaintPetersburgStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-russia/izhevsk-state-medical-academy',
        element: <IzhevskStateMedicalAcademy />,
      },

      {
        path: 'mbbs-in-armenia/progress-medical-university',
        element: <ProgressMedicalUniversity />,
      },
      {
        path: 'mbbs-in-armenia/mkhitar-gosh-armenian-russian-international-university',
        element: <MkhitarGoshArmenianRussianInternationalUniversity />,
      },
      {
        path: 'mbbs-in-armenia/yerevan-state-medical-university',
        element: <YerevanStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-armenia/yerevan-haybusak-university',
        element: <YerevanHaybusakUniversity />,
      },
      {
        path: 'mbbs-in-armenia/university-of-traditional-medicine',
        element: <UniversityTraditionalMedicine />,
      },
      {
        path: 'mbbs-in-armenia/armenian-medical-institute',
        element: <ArmenianMedicalInstitute />,
      },
      {
        path: 'mbbs-in-armenia/tereza-medical-university',
        element: <TerezaMedicalUniversity />,
      },

      {
        path: 'mbbs-in-georgia/georgian-national-university',
        element: <GeorgianNationalUniversity />,
      },
      {
        path: 'mbbs-in-georgia/european-medical-university',
        element: <EuropeanMedicalUniversity />,
      },
      {
        path: 'mbbs-in-georgia/david-tvildiani-medical-university',
        element: <DavidTvildianiMedicalUniversity />,
      },
      {
        path: 'mbbs-in-georgia/east-european-university',
        element: <EastEuropeanUniversity />,
      },
      {
        path: 'mbbs-in-georgia/alte-university',
        element: <AlteUniversity />,
      },
      {
        path: 'mbbs-in-georgia/university-of-georgia',
        element: <UniversityofGeorgia />,
      },
      {
        path: 'mbbs-in-georgia/caucasus-international-university',
        element: <CaucasusInternationalUniversity />,
      },
      {
        path: 'mbbs-in-georgia/tbilisi-state-medical-university',
        element: <TbilisiStateMedicalUniversity />,
      },
      {
        path: 'mbbs-in-georgia/batumi-shota-rustaveli-state-university',
        element: <BatumiShotaRustaveliStateUniversity />,
      },
      {
        path: 'mbbs-in-georgia/bau-international-university-batumi',
        element: <BAUInternationalUniversityBatumi />,
      },
      {
        path: 'mbbs-in-georgia/central-university-of-europe',
        element: <CentralUniversityofEurope />,
      },
      {
        path: 'mbbs-in-georgia/georgian-american-university',
        element: <GeorgianAmericanUniversity />,
      },
      {
        path: 'mbbs-in-georgia/international-black-sea-university',
        element: <InternationalBlackSeaUniversity />,
      },
      {
        path: 'mbbs-in-georgia/east-west-university',
        element: <EastWestUniversity />,
      },
      {
        path: 'mbbs-in-georgia/grigol-robakidze-university',
        element: <GrigolRobakidzeUniversity />,
      },
      {
        path: 'mbbs-in-georgia/ken-walker-international-university',
        element: <KenWalkerInternationalUniversity />,
      },
      {
        path: 'mbbs-in-georgia/new-vision-university',
        element: <NewVisionUniversity />,
      },
      {
        path: 'mbbs-in-georgia/ilia-state-university',
        element: <IliaStateUniversity />,
      },
      {
        path: 'mbbs-in-georgia/university-geomedi-llc',
        element: <UniversityGeomediLLC />,
      },
      {
        path: 'mbbs-in-georgia/avicenna-batumi-medical-university',
        element: <AvicennaBatumiMedicalUniversity />,
      },
      {
        path: 'mbbs-in-georgia/david-aghmashenebeli-university-of-georgia',
        element: <DavidAghmashenebeliUniversityOfGeorgia />,
      },
      {
        path: 'mbbs-in-georgia/akaki-tsereteli-state-university',
        element: <AkakiTsereteliStateUniversity />,
      },

      { path: 'mbbs-in-india', element: <India /> },
      { path: 'mbbs-in-russia', element: <Russia /> },
      { path: 'mbbs-in-armenia', element: <Armenia /> },
      { path: 'mbbs-in-georgia', element: <Georgia /> },
      { path: 'blog', element: <Blog /> },
      { path: 'news', element: <News /> },
      { path: 'faqs', element: <Faqs /> },
      { path: 'photo-gallery', element: <PhotoGallery /> },
      { path: 'video-gallery', element: <VideoGallery /> },
      { path: 'contact-us', element: <Contact /> },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'cookie-policy', element: <CookiePolicy /> },
      { path: 'terms-and-conditions', element: <TermsAndConditions /> },
      { path: 'disclaimer', element: <Disclaimer /> },
    ],
  },
]);

export default MainRoutes;
