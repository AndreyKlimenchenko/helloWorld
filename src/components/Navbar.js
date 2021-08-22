
import React from 'react';
import { Link } from 'react-router-dom';
import {
    StyledNavItems,
    StyledNavbar,
    StyledNavBrand,
    StyledLink,
    StyledButtonLink,
} from '../styled/Navbar';
import { Accent } from '../styled/Random';
import { StyledButton } from "../styled/Buttons";
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar({ toggleTheme, theme }) {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    return (
        <StyledNavbar>
            <StyledNavBrand className="nav__brand">
                <Link to="/">
                    Learn.Build.<Accent>Type.</Accent>
                </Link>
            </StyledNavBrand>
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