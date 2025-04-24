import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Aside from './Aside';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import ChatWindow from './Components/ChatWindow';
import UserProfile from './Components/UserProfile';
import { fetchLoggedUser } from './reducers/userSlice';

import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLoggedUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Aside />} />
        <Route path="/profile/:userId" element={<UserProfile />} />
      </Routes>
      <Footer />
      <ChatWindow />
    </BrowserRouter>
  );
}

export default App;
