import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Users from "./components/Users";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false">
        <div style={{ backgroundColor: "#F8F9FB", height: "100vh" }}>
          <Users />
        </div>
      </Container>
    </>
  );
};

export default App;
