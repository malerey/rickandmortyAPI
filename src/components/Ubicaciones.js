import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Banner from './Banner';
import Search from './Search';
import Card from './UbicCard';
import Footer from './Footer';

const UbicSection = styled.div`
  background-color: #CCC;

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
const Ubicaciones = () => {

  const [ubicaciones, setUbicaciones] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location`)
      .then(res => res.json())
      .then(data => setUbicaciones(data.results))
  }, []);

  return (
    <UbicSection>
      <Nav />
      <Banner />
      <Search />
      <section className='card-container'>
      {ubicaciones.map(ubicacion => (
        <Card info={ubicacion} />
      ))}
      </section>
      <Footer />
    </UbicSection>
  );
}

export default Ubicaciones;