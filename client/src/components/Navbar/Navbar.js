import { Link } from "react-router-dom";
import { Typography, AppBar, Toolbar, Avatar, Button } from "@mui/material";

import memories from "./../../images/memories.png";

import "./Navbar.css";

const Navbar = () => {
  const user = null;
  return (
    <AppBar className="appBar" position="static" color="inherit">
      <div className="brandContainer">
        <Typography
          component={Link}
          to="/"
          className="heading"
          variant="h2"
          align="center"
        >
          {" "}
          My stories{" "}
        </Typography>
        <img className="image" src={memories} alt="memories" height="80" />
      </div>
      <Toolbar className="toolbar">
        {user ? (
          <div className="profile">
            <Avatar
              className="purple"
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className="userName" variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" className="logout" color="secondary">
              Logout
            </Button>
          </div>
        ) : (
          <Button component={Link} to="/auth" className="login" color="primary">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
