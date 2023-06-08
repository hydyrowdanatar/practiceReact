import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./components/MainLayout";
import { Language } from "./core/constant";
import About from "./pages/About";
import Home from "./pages/Home";

export const AppContext = createContext();

function App() {
  const [appLanguage, setAppLanguage] = useState(Language.TURKMEN);
  return (
    <AppContext.Provider
      value={{
        appLanguage,
        setAppLanguage,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
