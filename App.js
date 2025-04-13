import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PlaylistPage from "./pages/PlaylistPage";
import { Container } from "@mui/material";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/playlist/:id" component={PlaylistPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
