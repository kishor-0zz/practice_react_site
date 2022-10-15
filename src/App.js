import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from './Component/Head/Head';
import PageNotFound from './Component/Head/PageNotFound/PageNotFound';
import Navbar from './Component/Head/NavBar/Navbar';
import Topbar from './Component/Head/NavBar/Navbar';
import Services from './Component/Head/Services/Services';
import Appointment from './Component/Head/Appointment/Appointment';
import 'react-day-picker/dist/style.css';

function App() {
  return (
    <div>
      <Topbar></Topbar>
      <Routes>
        <Route path="/" element={<Head></Head>} ></Route>
        <Route path="/services" element={<Services></Services>} ></Route>
        <Route path="/appointment" element={<Appointment></Appointment>} ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
