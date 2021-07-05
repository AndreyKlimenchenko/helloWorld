import React from 'react';
import {Link} from "react-router-dom";
import {
    StyledNavbar,
    StyledNavBrand,
    StyledNavItems,
    StyledLink
} from '../styled/Navbar';
import { Accent } from '../styled/Random';
import { useAuth0 } from "@auth0/auth0-react";

export default function Navbar() {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
    const LoginButton = () => {
        return <button onClick={() => loginWithRedirect()}>Log In</button>;
      };
    const LogoutButton = () => {
    return (
        <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
        </button>
    );
    };
    return (
        <StyledNavbar>
            <StyledNavBrand>
                <Link to="/">
                    Learn.Build.<Accent>Type.</Accent>
                </Link>
            </StyledNavBrand>
            <StyledNavItems>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/highScores">HighScores</StyledLink>
                </li>
                {!isAuthenticated && (
                    <li>
                        <LoginButton></LoginButton>
                    </li>
                )}
                {isAuthenticated && (
                    <>
                        <li>
                            <StyledLink to="/profile">Profile</StyledLink>
                        </li>
                        <li>
                            <LogoutButton></LogoutButton>
                        </li>
                    </>
                )}
            </StyledNavItems>
        </StyledNavbar>
    );
}