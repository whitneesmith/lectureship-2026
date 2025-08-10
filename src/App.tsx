import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './pages/Home';
import Register from './pages/Register';
import RegisterForm from './pages/RegisterForm';
import Hotel from './pages/Hotel';
import Vendors from './pages/Vendors';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-form" element={<RegisterForm />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/vendors" element={<Vendors />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
