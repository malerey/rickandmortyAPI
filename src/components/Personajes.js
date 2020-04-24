import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Banner from './Banner';
import Card from './PersCard';
import Footer from './Footer';

import rick from '../assets/mini-rick.png';

const SearchBar = styled.section`
  background: #000;
  color: #33FFC4;
  width: 80%;
  height: 60px;
  margin: 20px 20px;
  padding: 5px 0px;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.50), 0 15px 12px rgba(0,0,0,0.40);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  font-size: 20px;
  form {
    width: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    input {
      width: 300px;
    }
  }
  .img-rick {
    height: 60px;
    width: auto;
    img {
      height: 100%;
    }
  }
`

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
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
  }, []);

  const buscarDato = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then(res => res.json())
      .then(data => setPersonajes(data.results))
  }

  useEffect(buscarDato, []);

  const handleChange = e => {
    setBusqueda(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    buscarDato();
  }

  return (
    <PersSection>
      <Nav />
      <Banner />

      <SearchBar>
        <form onSubmit={handleSubmit}>
          <label>INICIAR BUSQUEDA</label>
          <input value={busqueda} placeholder='Buscar personaje...' onChange={handleChange} />
          <div className='img-rick'><img src={rick} alt='Rick observa mientras buscas' /></div>
        </form>
      </SearchBar>

      <section className='card-container'>
        {personajes.map(personaje => <Card key={personaje.id} info={personaje} />)}
      </section>

      <Footer />
    </PersSection>
  );
}

export default Personajes;