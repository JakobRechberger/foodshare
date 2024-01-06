import './App.css';
import MainPage from "./mainpage/mainpage";
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import Profile from './authentication/profile.js';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <section>
            <Routes>
              <Route path="/" element={<MainPage/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/profile" element={<Profile/>}/>
            </Routes>
          </section>
        </div>
      </Router>

  );
}

export default App;
