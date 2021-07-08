import { createGlobalStyle } from 'styled-components';

const isDarkThemeEnabled = false;
export const GlobalStyle = createGlobalStyle`
:root {
    --main-bg-color: ${(props) => props.theme.mainBgColor};
    --main-text-color: ${isDarkThemeEnabled ? '#f9f9f9' : '#333'};
    --accent-color: #e16365;
}
* {
    box-sizing: border-box;
    color: var(--main-text-color);
    margin: 0;
    font-family: sans-serif;
    font-weight: 300;
}
h1, h2 {
    margin-bottom: 2rem;
}
`;

