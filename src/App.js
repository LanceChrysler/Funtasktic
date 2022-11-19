import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing_or_signup';
import LogInPage from './pages/Login';
import MainLayout from './pages/MainLayout';
import Menu from './pages/Menu';
import Profile from './pages/Profile';
import Task from './pages/Task';
import Calendar from './pages/Calendar';

/**
 * 
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="*" element={<NoPage />} />
 */

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/u" element={<MainLayout />}>
            <Route index element={<Menu />} />
            <Route path="profile" element={<Profile />} />
            <Route path="task" element={<Task />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}