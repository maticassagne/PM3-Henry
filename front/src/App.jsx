import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home/Home";
import MyAppointments from "./views/appointments/MyAppointments";
import Register from "./views/register/Register";
import Login from "./views/login/Login";
import Landing from "./views/landing/Landing";
import About from "./views/aboutUs/AboutUs";
import Appointment from "./views/newAppointment/Appointment";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myappointments" element={<MyAppointments />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
