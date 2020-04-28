import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";

import styled from "styled-components";

const PaginationContainer = styled.div`
  background: #222;
  color: #33ffc4;
  margin: 20px;
  border-radius: 5px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.5), 0 15px 12px rgba(0, 0, 0, 0.4);
  nav ul li button {
    color: #33ffc4;
    font-family: "Share Tech", sans-serif;
  }
  nav ul li button:hover {
    background-color: #111;
    font-family: "Share Tech", sans-serif;
  }

  @media (max-width: 800px) {
    width: 90%;
    margin: 10px;
    display: flex;
    justify-content: center;
  }
`;

const Paginacion = () => {
  // const [pagina, setPagina] = useState('');

  //   const cambiarPagina = () => {
  //   fetch(`https://rickandmortyapi.com/api/character/`)
  //     .then(res => res.json())
  //     .then(data => setPagina(data.info))
  // }

  // const handleClick = e => {
  //   e.preventDefault();
  //   console.log('click')
  // }

  return (
    <PaginationContainer className="pagination">
      <Pagination count={20} />
    </PaginationContainer>
  );
};

export default Paginacion;
