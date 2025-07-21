import NavBar from "./components/NavBar/NavBar";
import Home from "./views/home/Home";
import MyAppointments from "./views/Appointments/MyAppointments";
import MyPets from "./views/Pets/MyPets";

function App() {
  return (
    <div>
      <NavBar />
      {/* <Home /> */}
      <MyAppointments />
      {/* <MyPets /> */}
    </div>
  );
}

export default App;
