import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HighScores from './pages/HighScores';
import Home from './pages/Home';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import { GlobalStyle } from './styled/Global';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import { useAuth0 } from '@auth0/auth0-react';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './styled/Themes';


function App() {
  const { loading } = useAuth0();

  return (
    <Router>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Main>
            {loading && <p>Loading...</p>}
            {!loading && (
            <Container>
              <Navbar />
              <Switch>
                <Route path="/game" component={Game} />
                <Route path="/highScores" component={HighScores} />
                <Route path="/gameOver" component={GameOver} />
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile}/>
              </Switch>
            </Container>
            )}
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
