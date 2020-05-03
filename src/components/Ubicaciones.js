import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Banner from "./Banner";
import Card from "./UbicCard";
import Footer from "./Footer";

import rick from "../assets/mini-rick.png";

// Mismas observaciones a este componente que a Personajes, especialmente las funciones de paginación

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
`;

const UbicSection = styled.div`
  background: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Share Tech", sans-serif;
  .card-container {
    width: 80%;
    margin: 20px 0px;
    background: #222;
    border-radius: 10px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
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
`;

const PaginationContainer = styled.div`
  width: 400px;
  height: 40px;
  background: #222;
  color: #33ffc4;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  nav {
    button {
      font-family: "Share Tech", sans-serif;
      font-size: 20px;
      font-weight: bold;
      background: #222;
      color: #33ffc4;
      height: 30px;
      border: none;
    }
    .first,
    .last {
      width: 30px;
      height: 30px;
      margin: 5px;
      text-align: center;
    }
    .first:hover,
    .last:hover {
      background-color: #111;
      border-radius: 50%;
    }
    .first:focus,
    .last:focus {
      background-color: #33ffc4bf;
      color: #111;
      border-radius: 50%;
    }
    .prev {
      width: 100px;
      height: 30px;
      text-align: center;
    }
    .next {
      width: 60px;
      height: 30px;
      text-align: center;
    }
    .prev:hover,
    .next:hover {
      background-color: #111;
      border-radius: 5px;
    }
    .prev:focus,
    .next:focus {
      background-color: #33ffc4bf;
      color: #111;
      border-radius: 5px;
    }
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const Ubicaciones = () => {
  const [ubicaciones, setUbicaciones] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location?page=${pagina}`)
      .then(res => res.json())
      .then(data => {
        setUbicaciones(data.results);
        setPagina(1);
      });
  }, []);

  const buscarDato = () => {
    fetch(`https://rickandmortyapi.com/api/location/?name=${busqueda}`)
      .then(res => res.json())
      .then(data => setUbicaciones(data.results));
  };

  useEffect(buscarDato, []);

  const handleChange = e => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    buscarDato();
  };

  const handleClickFirst = () => {
    fetch(`https://rickandmortyapi.com/api/location?page=1`)
      .then(res => res.json())
      .then(data => {
        setUbicaciones(data.results);
        setPagina(1);
      });
  };

  const handleClickPrev = () => {
    fetch(`https://rickandmortyapi.com/api/location?page=${pagina - 1}`)
      .then(res => res.json())
      .then(data => {
        setUbicaciones(data.results);
        setPagina(pagina - 1);
      });
  };

  const handleClickNext = () => {
    fetch(`https://rickandmortyapi.com/api/location?page=${pagina + 1}`)
      .then(res => res.json())
      .then(data => {
        setUbicaciones(data.results);
        setPagina(pagina + 1);
      });
  };

  const handleClickLast = () => {
    fetch(`https://rickandmortyapi.com/api/location?page=4`)
      .then(res => res.json())
      .then(data => {
        setUbicaciones(data.results);
        setPagina(data.info.pages);
      });
  };

  return (
    <UbicSection>
      <Nav />
      <Banner />

      <SearchBar>
        <form onSubmit={handleSubmit}>
          <label>INICIAR BUSQUEDA</label>
          <input
            value={busqueda}
            placeholder="Buscar ubicacion..."
            onChange={handleChange}
          />
          <div className="img-rick">
            <img src={rick} alt="Rick observa mientras buscas" />
          </div>
        </form>
      </SearchBar>

      <section className="card-container">
        {ubicaciones.map(ubicacion => (
          <Card key={ubicacion.id} info={ubicacion} />
        ))}
      </section>

      <PaginationContainer className="pagination">
        <nav className="pagination-navbar">
          <button className="first" onClick={handleClickFirst}>
            {"<"}
          </button>
          <button className="prev" onClick={handleClickPrev}>
            PREVIOUS
          </button>
          <button className="next" onClick={handleClickNext}>
            NEXT
          </button>
          <button className="last" onClick={handleClickLast}>
            {">"}
          </button>
        </nav>
      </PaginationContainer>

      <Footer />
    </UbicSection>
  );
};

export default Ubicaciones;
