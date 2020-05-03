import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Nav from "./Nav";
import Banner from "./Banner";
import Card from "./PersCard";
import Footer from "./Footer";

import rick from "../assets/mini-rick.png";

// Buenisimo el estilado. Hay varias cosas que habras notado que se repiten, como
// las sombras. Para eso es buena idea tener un "theme". No es algo que hayamos visto, 
// pero si te interesa podes explorarlo acá: https://styled-components.com/docs/advanced
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

const PersSection = styled.div`
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

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [pagina, setPagina] = useState("");


  // buscarDato() podria ejecutarse dentro de este useEffect, asi no tenes que usar dos. 

  // Repetis varias veces la URL de la API, asi que es buena idea ponerla dentro de una 
  // variable. 
  // En general a esas variables que se ejecutan en todo el componente las ponemos en mayusculas.
  // Por ejemplo:
  // const API_URL = 'https://rickandmortyapi.com/api/character/'
  // Y luego en el fetch, por ejemplo:
  // fetch(`${API_URL}?page=${pagina}`) 
  useEffect(() => {

    // Fijate que aca estamos diciendole a React que haga este fetch cada vez que se ejecuta el efecto, 
    // y el array de dependencias del efecto esta vacio: eso significa que se va a ejecutar una sola vez. 
    // Ahora bien, si agregaramos "pagina" al array de dependencias, 
    // cada vez que se actualice el estado "pagina", este efecto se ejecutaria, y con el todo el fetch
    // La consecuencia es que no tendrias que escribir el fetch todas las veces en las funciones 
    // handleClick, porque con actualizar la variable pagina ya se te ejecutaria este efecto :) 
    // De paso, te liberas del warning horrible de React
    // (avisame si esto no queda claro)
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
      });
  }, []);

  const buscarDato = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${busqueda}`)
      .then(res => res.json())
      .then(data => setPersonajes(data.results));
  };

  useEffect(buscarDato, []);

  const handleChange = e => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    buscarDato();
  };

  // Para no tener 4 funciones aqui que hacen basicamente lo mismo, 
  // podriamos hacer una sola funcion que reciba parametros. 
  // es el boton el que le indica a la funcion a que pagina tiene que ir
  // Por ejemplo, supongamos este JSX: 

//   <button className="first" onClick={() => handleClick(1)}>
//   {"<"}
// </button>
// <button className="prev" onClick={() => handleClick(pagina - 1)}>
//   PREVIOUS
// </button>
// <button className="next" onClick={() => handleClick(pagina + 1)}>
//   NEXT
// </button>
// <button className="last" onClick={() => handleClick(25)}>
//   {">"}
// </button>

// Ahora podriamos tener una sola funcion:
// const handleClick = page => {
//   fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
//     .then(res => res.json())
//     .then(data => {
//       setPersonajes(data.results);
//       setPagina(page);
//     });
// };

// Y si hacemos lo que te dije de agregar "pagina" en el array de dependencias de useEffect, 
// esta funcion podria quedar mas breve aun:
// const handleClick = page => setPagina(page)


  const handleClickFirst = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=1`)
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
        setPagina(1);
      });
  };

  const handleClickPrev = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina - 1}`)
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
        setPagina(pagina - 1);
      });
  };

  const handleClickNext = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${pagina + 1}`)
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
        setPagina(pagina + 1);
      });
  };

  const handleClickLast = () => {
    fetch(`https://rickandmortyapi.com/api/character/?page=25`)
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results);
        setPagina(data.info.pages);
      });
  };

  return (
    <PersSection>
      <Nav />
      <Banner />

      <SearchBar>
        <form onSubmit={handleSubmit}>
          <label>INICIAR BUSQUEDA</label>
          <input
            value={busqueda}
            placeholder="Buscar personaje..."
            onChange={handleChange}
          />
          <div className="img-rick">
            <img src={rick} alt="Rick observa mientras buscas" />
          </div>
        </form>
      </SearchBar>

      <section className="card-container">
      {/* Excelente usar el id para la key */}
        {personajes.map(personaje => (
          <Card key={personaje.id} info={personaje} />
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
    </PersSection>
  );
};

export default Personajes;
