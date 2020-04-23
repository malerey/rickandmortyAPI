import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Banner from './Banner';
import Search from './Search';
import Card from './PersCard';
import Footer from './Footer';

const PersSection = styled.div`
  background: #CCC;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Share Tech', sans-serif;
  .card-container {
    width: 80%;
    margin: 20px 0px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.50), 0 15px 12px rgba(0,0,0,0.40);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

const Personajes = () => {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
  }, []);

  return (
    <PersSection>
      <Nav />
      <Banner />
      <Search />
      <section className='card-container'>
        {personajes.map(personaje => (
          <Card info={personaje} />
        ))}
      </section>
      <Footer />
    </PersSection>
  );
}

export default Personajes;