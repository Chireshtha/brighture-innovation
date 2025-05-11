import { Outlet, ScrollRestoration } from 'react-router-dom';
import './fixLeafletIcons'
import './App.css';
import Footer from './components/layout/Footer';
import Navigationbar from './components/layout/NavigationBar';
import { createContext, useState } from 'react';

export const digitalContext = createContext();

function App() {
  const [color, setColor] = useState("light");

  return (
    <digitalContext.Provider value={{color, setColor}}>
      <Navigationbar />
      <Outlet />
      {/* <Routes>
        {
          routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))
        }
      </Routes> */}
      <ScrollRestoration />
      <Footer />
    </digitalContext.Provider>
  );
}

export default App;
