import { Route, Routes } from 'react-router-dom';
import AdminNotifications from './pages/AdminNotifications';
import AccountPreference from './pages/AccountPreferences';
import Navbar from './pages/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/AdminNotifications" element={<AdminNotifications />} />
        <Route path="/AccountPreference" element={<AccountPreference />} />
      </Routes>
    </>
  );
}

export default App;
