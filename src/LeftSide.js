import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useHistory } from "react-router-dom";
import { useState } from "react";


export function LeftSide() {
    const history = useHistory();

  const [openthree, setOpenthree] = useState(false);

  const handleClickthree = () => {
    setOpenthree(!openthree);
  };
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
        </div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading text-uppercase">INTERFACE</div>
     
      <List>
        <ListItemButton onClick={handleClickthree}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText className="pagetext" primary="Components" />
          {openthree ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse
          className="custombtns"
          in={openthree}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
             <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/buttons")}
                primary="Buttons"
              />
            </ListItemButton>
                           
          </List>
        </Collapse>
      </List>
     


      <List>
        <ListItemButton onClick={handleClickthree}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText className="pagetext" primary="Utilities" />
          {openthree ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse
          className="custombtns"
          in={openthree}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
             <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/colors")}
                primary="Colors"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/borders")}
                primary="Borders"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/animations")}
                primary="Animations"
              />
            </ListItemButton>
                
          </List>
        </Collapse>
      </List>



        <List>
        <ListItemButton onClick={handleClickthree}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText className="pagetext" primary="Pages" />
          {openthree ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>

        <Collapse
          className="custombtns"
          in={openthree}
          timeout="auto"
          unmountOnExit
        >
          <List component="div" disablePadding>
            <ListSubheader component="div" id="nested-list-subheader">
              Login screens
            </ListSubheader>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/login")}
                primary="Login"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/register")}
                primary="Register"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/forgotpassword")}
                primary="ForgotPassword"
              />
            </ListItemButton>
            <ListSubheader component="div" id="nested-list-subheader">
              Other pages
            </ListSubheader>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/404")}
                primary="Error404"
              />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText
                className="buttons"
                onClick={() => history.push("/blank-page")}
                primary="Blank"
              />
            </ListItemButton>
           
          </List>
        </Collapse>
      </List>

      <li className="nav-item">
        <Link className="nav-link" to="/charts">
          <i className="fas fa-fw fa-user"></i>
          <span>Charts</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/tables">
          <i className="fas fa-fw fa-mobile"></i>
          <span>Tables</span>
        </Link>
      </li>

      <hr className="sidebar-divider" />
    </ul>
  );
}
