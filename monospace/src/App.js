import React, { useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="false">
        <Typography
          component="div"
          style={{ backgroundColor: "#F8F9FB", height: "100vh" }}
        />
      </Container>
    </>
  );
};

export default App;
