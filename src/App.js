import "./App.css";
import ContextProvider from "./Context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "./Pages/Page404";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Favorite from "./Pages/Favorite";
import EmployeeInfo from "./Components/EmployeeInfo";
function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"/favourites"} element={<Favorite />} />
            <Route path={"/employee"} element={<EmployeeInfo />} />
            <Route path={"favourites/employee"} element={<EmployeeInfo />} />
            <Route path="/error" element={<Page404 />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
