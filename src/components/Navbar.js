
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import {
    StyledNavItems,
    StyledNavbar,
    StyledNavBrand,
    StyledLink,
    StyledButtonLink,
    MenuIconContainer,
    StyledNavItemsMobile,
    LiMobile,
} from '../styled/Navbar';
import { Accent } from '../styled/Random';
import { StyledButton } from "../styled/Buttons";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar({ toggleTheme, theme }) {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const [open, setOpen] = useState(false);

    const toggleDrawer = (mode) => (event) => {
        setOpen(mode);
      };
    
    return (
        <StyledNavbar>
            <StyledNavBrand className="nav__brand">
                <Link to="/">
                    Learn.Build.<Accent>Type.</Accent>
                </Link>
            </StyledNavBrand>
            <MenuIconContainer onClick={toggleDrawer(true)}><MenuIcon /></MenuIconContainer>
            <SwipeableDrawer
                anchor="top"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
            >
            <StyledNavItemsMobile>
                <LiMobile>
                    <StyledLink to="/" onClick={toggleDrawer(false)}>Home</StyledLink>
                </LiMobile>
                <LiMobile>
                    <StyledLink to="/highScores" onClick={toggleDrawer(false)}>High Scores</StyledLink>
                </LiMobile>
                {!isAuthenticated && (
                    <LiMobile>
                        <StyledButtonLink onClick={loginWithRedirect}>Login</StyledButtonLink>
                    </LiMobile>
                )}
                {isAuthenticated && (
                    <>
                        <LiMobile>
                            <StyledLink to="/profile" onClick={toggleDrawer(false)}>Profile</StyledLink>
                        </LiMobile>
                        <LiMobile>
                            <StyledButtonLink
                                onClick={() => {
                                    logout();
                                    toggleDrawer(false)
                                }}
                            >
                                Logout
                            </StyledButtonLink>
                        </LiMobile>
                    </>
                )}
                <StyledButton onClick={toggleTheme} variant="contained" color="primary">
                    {theme === 'light' ? 'Light Theme' : 'Dark Theme'}
                </StyledButton>
            </StyledNavItemsMobile>
            </SwipeableDrawer>
            <StyledNavItems>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/highScores">High Scores</StyledLink>
                </li>
                {!isAuthenticated && (
                    <li>
                        <StyledButtonLink onClick={loginWithRedirect}>Login</StyledButtonLink>
                    </li>
                )}
                {isAuthenticated && (
                    <>
                        <li>
                            <StyledLink to="/profile">Profile</StyledLink>
                        </li>
                        <li>
                            <StyledButtonLink onClick={logout}>Logout</StyledButtonLink>
                        </li>
                    </>
                )}
                <StyledButton onClick={toggleTheme} variant="contained" color="primary">
                    {theme === 'light' ? 'Light Theme' : 'Dark Theme'}
                </StyledButton>
            </StyledNavItems>
        </StyledNavbar>
    );
}