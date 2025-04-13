import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes/Route";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate(ROUTES.LOGIN, { replace: true });
  };

  return (
    <>
      {/* Header Toolbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            School Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Page Content */}
      <Container style={{ marginTop: "20px" }}>{children}</Container>
    </>
  );
};

export default Layout;
