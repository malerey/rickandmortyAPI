import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import Banner from './Banner';
import Card from './UbicCard';
import Pagination from './Pagination';
import Footer from './Footer';

import rick from '../assets/mini-rick.png';

const SearchBar = styled.section`
  background: #000;
  color: #33ffc4;
  width: 80%;
  height: 60px;
  margin: 20px 20px;
  padding: 5px 0px;
  border-radius: 10px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
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

  @media (max-width: 800px) {
    width: 90%;
    height: 40px;
    margin: 10px 10px;
    padding: 5px 0px;
    font-size: 18px;
    form {
      label {
        width: 150px;
        margin-left: 15px;
      }
      input {
        width: 240px;
      }
      .img-rick {
        height: 40px;
        width: auto;
        margin: 0px 15px;
      }
    }
  }
`

const UbicSection = styled.div`
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

  @media (max-width: 800px) {
    .card-container {
      width: 90%;
      margin: 10px 10px;
    }
  }
`
const Ubicaciones = () => {

  const [ubicaciones, setUbicaciones] = useState([]);
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location`)
      .then(res => res.json())
      .then(data => setUbicaciones(data.results))
  }, []);

  const buscarDato = () => {
    fetch(`https://rickandmortyapi.com/api/location/?name=${busqueda}`)
      .then(res => res.json())
      .then(data => setUbicaciones(data.results))
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
    <UbicSection>
      <Nav />
      <Banner />
      
      <SearchBar>
        <form onSubmit={handleSubmit}>
          <label>INICIAR BUSQUEDA</label>
          <input value={busqueda} placeholder='Buscar ubicacion...' onChange={handleChange} />
          <div className='img-rick'><img src={rick} alt='Rick observa mientras buscas' /></div>
        </form>
      </SearchBar>
      
      
      <section className='card-container'>
        {ubicaciones.map(ubicacion => <Card key={ubicacion.id} info={ubicacion} />)}
      </section>

      <Pagination />
      <Footer />
    </UbicSection>
  );
}

export default Ubicaciones;