import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Header/Footer";
import Header from "./components/Header/Header";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Header>
      <Footer />
    </>
  );
}

export default App;
