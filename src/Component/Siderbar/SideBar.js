import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../asset/logo.png";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
import "./SiderBar.css";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { FaDiscord } from "react-icons/fa";
import Deshboard from "../Deshboard/Deshboard";
import StakeNMS from "../Stake NMS/StakeNMS";
import BuyBond from "../Buy Bond/BuyBond";
import { Link, Switch, Route } from "react-router-dom";
import BondPopup from "../Buy Bond/BondPopup";
import BondPopupOne from "../Buy Bond/BondPopupOne";
const drawerWidth = 265;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [show, setShow] = React.useState(false);
  const [showone, setshowone] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [modalShow, setModalShow] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ backgroundColor: "rgb(23,25,27)", color: "white" }}>
      <Toolbar style={{ marginTop: "30px", marginLeft: "30px" }}>
        <img src={logo} width="170px" />
      </Toolbar>
      <br />
      <List>
        <Link to="/" className="linkid">
          <ListItem button href="#deshborad" key="Dashboard">
            <ListItemIcon>
              <TuneIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
        <br />
        <Link to="/StakeNMS" className="linkid">
          <ListItem button key="Stake NMS">
            <ListItemIcon>
              <ArticleOutlinedIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Stake NMS" />
          </ListItem>
        </Link>
        <br />
        <Link to="/BuyBond" className="linkid">
          <ListItem button key="Buy Bond">
            <ListItemIcon>
              <SettingsIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Buy Bond" />
          </ListItem>
        </Link>
        <div>
          <span className="text">with bonus yields</span>
        </div>

        <div style={{ paddingTop: "10px", cursor: "pointer" }}>
          <span onClick={() => setShow(true)}>
            &emsp;&emsp;&emsp; NMS-BUSDLP &emsp; 28.50%
          </span>
        </div>
        <div style={{ paddingTop: "10px", cursor: "pointer" }}>
          <span onClick={() => setshowone(true)}>
            &emsp;&emsp;&emsp; BUSD &emsp;&emsp;&emsp;&emsp;&emsp; 25.78%
          </span>
        </div>
        <br />
        <br />

        <ListItem button key="Buy NMS">
          <ListItemIcon>
            <AttachMoneyIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Buy NMS" />
        </ListItem>
      </List>
      <br />
      <div className="icons">
        <a href="">
          <GitHubIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <TwitterIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <TelegramIcon style={{ color: "white" }} />
        </a>
        <a href="">
          <FaDiscord style={{ color: "white" }} size={24} />
        </a>
      </div>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "rgb(30,35,43)", height: "100px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography style={{ color: "white", display: "flex" }}>
            <div className="container dropdownmenu">
              <div class="dropdown">
                <button class="dropbtn">NMS</button>
                <div class="dropdown-content">
                  <a href="#">NMS</a>
                  <a href="#">SNMS</a>
                </div>
              </div>
              <div>
                <button className="btn btn-secondary mx-3 p-2">
                  <b>Connect To Wallet</b>
                </button>
              </div>
            </div>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        style={{ backgroundColor: "rgb(23,25,27)" }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path="/" component={Deshboard} />
          <Route exact path="/StakeNMS" component={StakeNMS} />
          <Route path="/BuyBond">
            <BuyBond setShow={setShow} setshowone={setshowone} />
          </Route>
        </Switch>
        <BondPopup show={show} setShow={setShow} />
        <BondPopupOne showone={showone} setshowone={setshowone} />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
