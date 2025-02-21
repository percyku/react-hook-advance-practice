import "./stylesheets/all.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router-dom";

import FormLayout from "./pages/FormLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormLayout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
      </Routes>
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      {/* <Register></Register> */}
    </div>
  );
}

export default App;
