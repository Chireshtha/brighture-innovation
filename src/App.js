import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import Footer from './components/layout/Footer';
import Navigationbar from './components/layout/NavigationBar';

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        {
          routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))
        }
      </Routes>
      <Footer />
    </>
  );
}

export default App;
