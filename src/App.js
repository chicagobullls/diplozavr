import './App.css';
import Header from './components/header/header'
import Global from './components/global/Global';
import HowToGet from './components/howToGet/Howtoget'
import Correspondence from './components/course/Correspondence/Correspondence'
import FullTime from './components/course/FullTime/FullTime'
import Registration from './components/registration/Registration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import FullTimeDocuments from './components/course/FullTime/FullTimeDocuments/FullTimeDocuments';
import CorrespondenceDocuments from './components/course/Correspondence/C_Documents/CorrespondenceDocuments';
import Login from './components/login/Login';
import Switch from './components/switch/Switch';
import RegistrationProf from './components/registration/RegistrationProf/RegistrationProf';
import NewsPage from './components/newsPage/NewsPage';
import EventsPage from './components/eventsPage/EventsPage';
import AdminPanel from './components/adminPanel/AdminPanel';
import CorrespondenceCabinet from './components/correspondenceCabinet/CorrespondenceCabinet';
import ExpertCabinet from './components/expertCabinet/ExpertCabinet';
import ProfessorCabinet from './components/professorCabinet/ProfessorCabinet';
import './components/fonts/fonts.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Global />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/switch" element={<Switch />} />
            <Route path="/registration/proffesors" element={<RegistrationProf />} />
            <Route path="/howToGet" element={<HowToGet />} />
            <Route path="/FullTime" element={<FullTime />} />
            <Route path="/Correspondence" element={<Correspondence />} />
            <Route path="/FullTime/Documents" element={<FullTimeDocuments />} />
            <Route path="/Correspondence/Documents" element={<CorrespondenceDocuments />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newspage/:id" element={<NewsPage />} />
            <Route path="/eventpage/:id" element={<EventsPage />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
            <Route path="/CorrespondenceCabinet" element={<CorrespondenceCabinet />} />
            <Route path="/ProfessorCabinet" element={<ProfessorCabinet />} />
            <Route path="/ExpertCabinet" element={<ExpertCabinet />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter >
  );
}

export default App;
