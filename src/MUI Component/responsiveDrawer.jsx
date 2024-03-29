import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Grid } from '@mui/material';
import logo from "../JAVASCRIPT2.png";
import NavigationMenu from "./navigationMenu";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import RouterComponent from "../router";
<<<<<<< HEAD
import { BrowserRouter, Routes } from "react-router-dom";
=======
import { Link } from "react-router-dom";
import "./responsivedrawer.css";
import { useEffect } from 'react';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const BodyContext = React.createContext({});
>>>>>>> 714b651d98a809f523febd1a6de1a17815ec5a00

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const drawerWidth = 240;

const style = {
    logotext: {
        color: "#6F7E8C",
        fontSize: "0.6875rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: ".08rem"
    },
    logosubtext: {
        color: "#009688",
        fontWeight: 700,
        fontSize: "0.6875rem",
        textTransform: "uppercase",
        letterSpacing: ".08rem"
    }
}

var window1 = window;
function ResponsiveDrawer(props) {
    const { window, url } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [menus10, setMenus10] = React.useState([
        { label: "JS Variables", link: "/variables" },
        { label: "JS Operator", link: "/operator" },
        { label: "JS If Else", link: "/ifElse" },
        { label: "JS Function", link: "/functions10" },
        { label: "JS Loop", link: "/loop" },
        { label: "JS String", link: "/string" },
        { label: "JS Array", link: "/array" },
        { label: "Type Conversion", link: "/typeConversion" },
        { label: "JS RegEx", link: "/regex" },
        { label: "JS Integration", link: "/integration" },
        { label: "JS HTML DOM", link: "/HtmlDOM" }
    ]);
    const [menus, setMenus] = React.useState([
        {
            "label": "Introduction to JavaScript",
            "link": "/Introduction%20to%20JavaScript"
        },
        {
            "label": "Variables and Data Types",
            "link": "/Variables%20and%20Data%20Types"
        },
        {
            "label": "Operators",
            "link": "/Operators"
        },
        {
            "label": "Conditionals",
            "link": "/Conditionals"
        },
        {
            "label": "Loops",
            "link": "/Loops"
        }, {
            "label": "Strings",
            "link": "/Strings"
        },
        {
            "label": "Arrays",
            "link": "/Arrays"
        },
        {
            "label": "Functions",
            "link": "/Functions"
        },
        {
            "label": "Recursive",
            "link": "/Recursive"
        },
        {
            "label": "Objects",
            "link": "/Objects"
        },
        {
            "label": "Events",
            "link": "/Events"
        },
        {
            "label": "DOM Manipulation",
            "link": "/DOM%20Manipulation"
        },
        {
            "label": "Debugging Techniques",
            "link": "/Debugging%20Techniques"
        },
        {
            "label": "Error Handling",
            "link": "/Error%20Handling"
        },
        {
            "label": "AJAX",
            "link": "/AJAX"
        },
        {
            "label": "JSON",
            "link": "/JSON"
        },
        {
            "label": "Local Storage",
            "link": "/Local%20Storage"
        },
        {
            "label": "ES6 Features",
            "link": "/ES6%20Features"
        },
        {
            "label": "Regular Expressions",
            "link": "/Regular%20Expressions"
        },
        {
            "label": "Promises",
            "link": "/Promises"
        },
        {
            "label": "Callback Functions",
            "link": "/Callback%20Functions"
        },
        {
            "label": "Higher Order Functions",
            "link": "/Higher%20Order%20Functions"
        },
        {
            "label": "Arrow Functions",
            "link": "/Arrow%20Functions"
        },
        {
            "label": "Spread and Rest Operators",
            "link": "/Spread%20and%20Rest%20Operators"
        },
        {
            "label": "Destructuring",
            "link": "/Destructuring"
        },
        {
            "label": "Template Literals",
            "link": "/Template%20Literals"
        },
        {
            "label": "Classes",
            "link": "/Classes"
        },
        {
            "label": "Inheritance",
            "link": "/Inheritance"
        },
        {
            "label": "Modules",
            "link": "/Modules"
        },
        {
            "label": "Asynchronous Programming",
            "link": "/Asynchronous%20Programming"
        },
        {
            "label": "Web APIs",
            "link": "/Web%20APIs"
        },
        {
            "label": "Third-party Libraries",
            "link": "/Third-party%20Libraries"
        },
        {
            "label": "Generators",
            "link": "/Generators"
        },
        {
            "label": "Symbol",
            "link": "/Symbol"
        },
        {
            "label": "Sets And Maps",
            "link": "/Sets%20And%20Maps"
        }
    ])
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        let baseRoute = true;
        let menu = menus.map(val => {
            if (new RegExp(val.link).test(url)) val["isActive"] = true;
            else val["isActive"] = false;
            if (val["isActive"]) baseRoute = false;
            return val;
        })
        if (baseRoute) menu[0].isActive = true;
        setMenus(menu);
    }, [])
    const handleActiveMenu = (link) => {
        let menu = menus.map(val => {
            if (val.link === link || val.label === link) val["isActive"] = true;
            else val["isActive"] = false;
            return val
        })
        setMenus(menu);
        setMobileOpen(false);
        // scroll to Top of the page
        document.documentElement.scrollTop = 0;
    }
    const [openBasicConcepts, setOpenBasicConcepts] = React.useState(false);
    const [openBasicConcepts10, setOpenBasicConcepts10] = React.useState(false);
    const handleBasicConceptClick = () => {
        setOpenBasicConcepts(!openBasicConcepts);
    };

    const handleBasicConceptClick10 = () => {
        setOpenBasicConcepts10(!openBasicConcepts10);
    };

    const drawer = (
        <div>
            <Toolbar >
            <Link to={"/home"} style={{ textDecoration: "none", width: "100%" }}>
                <Grid container style={{ justifyContent: "space-evenly" }}>
                    
                    <Grid item>
                        <img src={logo} alt="no logo found" height={"40px"} width={"40px"} />
                    </Grid>
                    <Grid item style={{ marginTop: "5px" }}>
                        <Grid style={style.logotext}>Basic Js</Grid>
                        <Grid style={style.logosubtext}>Easy to learn</Grid>
                    </Grid>
                </Grid>
                </Link>
            </Toolbar>
            <Divider />
<<<<<<< HEAD
            <List>
                {["JS HTML DOM"].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} style={{ paddingLeft: "25px" }} />
                        </ListItemButton>
                    </ListItem>
                ))}
=======
            <List >
            <Link to={"/home"} style={{ fontWeight: 400,textDecoration: "none", width: "100%",color:"#000000c2" }}>
                    <ListItemButton>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </Link>
            <ListItemButton onClick={handleBasicConceptClick10}>
                    <ListItemText primary="10 Days of JS" style={{ fontWeight: 400, color: "#000000c2" }} />
                    {openBasicConcepts10 ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openBasicConcepts10} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {menus10.map((text, index) => (
                            <ListItem key={text.label + index} disablePadding >
                                <Link to={text.link} style={{ textDecoration: "none", width: "100%" }}>
                                    <ListItemButton style={{ paddingBottom: "0px" }} onClick={() => handleActiveMenu(text.link)}>
                                        <ListItemText className={text.isActive ? 'activeMenu' : 'greyBlack'} primary={text.label} style={{ paddingLeft: "25px" }} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <ListItemButton onClick={handleBasicConceptClick}>
                    <ListItemText primary="25 Days of JS" style={{ fontWeight: 400, color: "#000000c2" }} />
                    {openBasicConcepts ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={openBasicConcepts} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {menus.map((text, index) => (
                            <ListItem key={text.label + index} disablePadding >
                                <Link to={text.link} style={{ textDecoration: "none", width: "100%" }}>
                                    <ListItemButton style={{ paddingBottom: "0px" }} onClick={() => handleActiveMenu(text.link)}>
                                        <ListItemText className={text.isActive ? 'activeMenu' : 'greyBlack'} primary={text.label} style={{ paddingLeft: "25px" }} />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
                <Link to={"/quiz"} style={{ fontWeight: 400,textDecoration: "none", width: "100%",color:"#000000c2" }}>
                    <ListItemButton>
                        <ListItemText primary="Quiz" />
                    </ListItemButton>
                </Link>
                <Link to={"/pattern"} style={{ fontWeight: 400,textDecoration: "none", width: "100%",color:"#000000c2" }}>
                    <ListItemButton>
                        <ListItemText primary="Pattern Excersise" />
                    </ListItemButton>
                </Link>
>>>>>>> 714b651d98a809f523febd1a6de1a17815ec5a00
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

<<<<<<< HEAD
    return (
        <Box sx={{ display: 'flex' }}>
            <BrowserRouter>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        background: "#55ac8f"
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: "100%", justifyContent: "flex-end" }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            {["HOME", "ABOUT", "CONTACT"].map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, width: "100%", justifyContent: "flex-end" }}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <NavigationMenu />
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <RouterComponent />
                </Box>
            </BrowserRouter>
        </Box>
=======
    const handleSearch = (event) => {
        if (event.keyCode === 13 || event.which === 13) {
            window1.location.hash = `#/${menus.map(val => val.label).find(str => RegExp(event.target.value, "i").test(str))}`;
            event.target.value = "";
        }
    }

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', minHeight: "93.3vh" }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                        background: "#009688"
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: "100%", justifyContent: "flex-end" }}>
                            <Search style={{ width: "300px" }}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onKeyDown={handleSearch}
                                />
                            </Search>
                            <NavigationMenu />
                        </Box>
                        <Box sx={{ display: { xs: 'flex', sm: 'none' }, width: "100%", justifyContent: "flex-end" }}>
                            <Search >
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onKeyDown={handleSearch}
                                />
                            </Search>
                            <NavigationMenu />
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: "100vw" }}
                >
                    <Toolbar />
                    <BodyContext.Provider value={{ handleActiveMenu: handleActiveMenu, menus: menus }}>
                        <RouterComponent />
                    </BodyContext.Provider>
                </Box>
            </Box>
            {/* footer */}
            {/*<Grid className='footer' container style={{ justifyContent: "center" }}>
                 <Grid item style={{margin:"0px 20px"}}>
                    <Link key={"contactUs"} to={"/contactUs"} style={{ textDecoration: "none", color: "inherit" }}>Contact Us</Link>
                </Grid> 
                <Grid item style={{margin:"0px 20px"}}>
                    <Link key={"terms"} to={"/terms"} style={{ textDecoration: "none", color: "inherit" }}>Terms of Service</Link>
                </Grid>
                <Grid item style={{margin:"0px 20px"}}>
                    <Link key={"privacyPolicy"} to={"/privacyPolicy"} style={{ textDecoration: "none", color: "inherit" }}>Privacy Policy</Link>
                </Grid>
            </Grid> */}
        </React.Fragment>
>>>>>>> 714b651d98a809f523febd1a6de1a17815ec5a00
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const useBodyContext = () => React.useContext(BodyContext);

export { ResponsiveDrawer, useBodyContext };