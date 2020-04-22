import React from 'react';
import styled from 'styled-components';

import Nav from './components/Nav';
import Main from './components/Main';
import Search from './components/Search';
import Cards from './components/CardsContainer';

const Body = styled.body`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Share Tech', sans-serif;
`
const App = () => {

  return (
    <Body>

      <Nav />
      <Main />
      <Search />
      <Cards />

    </Body>
  );

}

export default App;