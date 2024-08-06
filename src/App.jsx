import "./assets/app.css";
import "./assets/card.css";
import "./assets/details.css";
import "./assets/global.css";
import "./assets/login.css";
import "./assets/navbar.css";
import "./assets/upsert.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login_main from "./pages/Login/Login_main";
import routes from "./routes/routes_main";

function App() {
  const routes_ = routes;
  return (
    <BrowserRouter>
      <Routes>
        {routes_.map((item, index) => {
          return <Route path={item.path} element={item.element} key={index} />;
        })}
        <Route path={"Login"} element={<Login_main />} />
        <Route path={"/"} element={<Navigate to={"/Login"} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
