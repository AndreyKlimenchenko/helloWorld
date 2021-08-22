
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';

export const StyledNavbar = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
    background-color: var(--header-color);
    width: 100%;
`;

export const StyledNavBrand = styled.div`
    font-size: 24px;
    text-align: left;
    & > a {
        text-decoration: none;
    }
`;

export const StyledNavItems = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
    align-items: center;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const LiMobile = styled.li`
    margin: 20px 0px;
`;

export const StyledNavItemsMobile = styled.ul`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 24px 0px;
        align-items: center;
        background-color: var(--header-color);
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1.2rem;
    transition: 200ms;

    &:hover {
        color: var(--accent-color);
    }
`;

export const StyledButtonLink = styled.button`
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    background: none;

    &:hover {
        color: var(--accent-color);
    }
`;

export const MenuIconContainer = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: block;
        cursor: pointer;
        &:hover {
            color: var(--accent-color);
        }
    }
`;