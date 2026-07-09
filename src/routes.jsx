import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import CharacterPage from "./pages/CharacterPage";
import PlanetPage from "./pages/PlanetPage";
import VehiclePage from "./pages/VehiclePage";

export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >
      <Route path="/" element={<Home />} />
      <Route path="/characters/:id" element={<CharacterPage />}/>
      <Route path="/planets/:id" element={<PlanetPage />} />
      <Route path="/vehicles/:id" element={<VehiclePage />} />
    </Route>
  )
);