import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Banner from './Banner';
import Search from './Search';
import Card from './EpisCard';
import Footer from './Footer';

const EpisSection = styled.div`
  background-color: #bbb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Share Tech', sans-serif;
  .card-container {
    width: 80%;
    background: #222;
    margin: 20px 0px;
    border-radius: 10px;
    box-shadow: 0 19px 38px rgba(0,0,0,0.50), 0 15px 12px rgba(0,0,0,0.40);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

const Episodios = () => {

  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode`)
      .then(res => res.json())
      .then(data => setEpisodios(data.results))
  }, []);

  return (
    <EpisSection>
      <Nav />
      <Banner />
      <Search />
      <section className='card-container'>
        {episodios.map(episodio => (
          <Card info={episodio} />
        ))}
      </section>
      <Footer />
    </EpisSection>
  );
}

export default Episodios;