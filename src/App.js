import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom"; //v6

function App() {
  const [userMode, setUserMode] = useState("light");
  const switchMode = () => {
    if (userMode === "dark") {
      setUserMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#212529";
    } else {
      setUserMode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "#fff";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          about="About"
          mode={userMode}
          switch={switchMode}
        />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<TextForm heading="Analyse Text" mode={userMode} />}
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
