import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Homepage from './views/homepage.jsx';
import Home from './views/home.jsx';
import Form from './views/form.jsx';
import Coursepage from './views/coursepage.jsx';
import AvailableCourse from './views/availableCourse.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/form" element={<Form />} />
        <Route exact path="/homepage" element={<Homepage />} />
        <Route path="/courses/*" element={<Coursepage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
