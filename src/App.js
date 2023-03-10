import { Route, Routes } from 'react-router-dom';
import AdminNotifications from './pages/AdminNotifications';
import AccountPreference from './pages/AccountPreferences';
import Navbar from './pages/Navbar';
import PriceForm from './pages/PriceForm';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/AdminNotifications" element={<AdminNotifications />} />
        <Route path="/AccountPreference" element={<AccountPreference />} />
        <Route path="/PriceForm" element={<PriceForm />} />
      </Routes>
    </>
  );
}

export default App;
