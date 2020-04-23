import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const Search = () => {

  const [datoBuscado, setDatoBuscado] = useState({});
  const [busqueda, setBusqueda] = ('');

  const buscarDato = () => {
    fetch(`https://rickandmortyapi.com/api/`)
      .then(res => res.json())
      .then(data => setDatoBuscado(data))
  }

  useEffect(buscarDato, []);

  const handleChange = e => {
    setBusqueda(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    buscarDato();
  }

  console.log(datoBuscado)

  return (
    <SearchBar>
      <form onSubmit={handleSubmit}>
        <label>INICIAR BUSQUEDA</label>
        <input value={busqueda} placeholder='Buscar personaje, ubicacion o episodio' onChange={handleChange} />
        <div className='img-rick'><img src={rick} alt='Rick observa mientras buscas' /></div>
      </form>
    </SearchBar>
  );
}

export default Search;