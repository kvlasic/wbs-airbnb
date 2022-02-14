import { Container } from "@mui/material";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SpacesList from "./pages/SpacesList";
import WelcomePage from "./pages/WelcomePage";

const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <Container sx={{ mt: 6 }} maxWidth="xl">
          <Routes>
            <Route path="/places" element={<SpacesList />} />
            <Route path="/" element={<WelcomePage />} />
          </Routes>
        </Container>
      </Router>
    </Fragment>
  );
};

export default App;
