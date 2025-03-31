import { Route, Routes } from 'react-router-dom';
import './App.css';
import routes from './routes/routes';
import Footer from './components/layout/Footer';
import Navigationbar from './components/layout/NavigationBar';
import { createContext, useState } from 'react';

export const digitalContext = createContext();

function App() {
  const [color, setColor] = useState("light");
  return (
    <digitalContext.Provider value={{color, setColor}}>
      <Navigationbar />
      <Routes>
        {
          routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))
        }
      </Routes>
      <Footer />
    </digitalContext.Provider>
  );
}

export default App;
