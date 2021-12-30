import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Header from "./components/header/Header";
import Home from './pages/Home';
import Footer from "./components/footer/Footer";
import Blog from './pages/Blog';
import Contacto from './pages/Contacto';

const App = () => {

    return (
      <Router>
        <main className="container-fluid">
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/formulario" element={<Contacto/>} />
          </Routes>
          <Footer />
        </main>
      </Router>
    );
  
}

export default App;
