import React, { useState } from "react";
import styled from "styled-components";

const ModalCardInfo = styled.div`
  background-color: #111;
  color: #33ffc4;
  font-family: "Share Tech", sans-serif;
  margin: 40px;
  padding: 10px 20px;
  height: 800px;
  border-radius: 15px;
  box-shadow: 0 30px 50px rgba(0, 0, 0, 0.8), 0 30px 50px rgba(0, 0, 0, 0.8);
  .card-content {
    width: 450px;
    display: flex;
    flex-direction: column;
    .cerrarModal {
      display: flex;
      justify-content: flex-end;
      button {
        margin-bottom: 10px;
        background: none;
        color: #33ffc4;
        font-family: "Share Tech", sans-serif;
        font-weight: bolder;
        font-size: 24px;
        border: none;
        position: relative;
      }
    }
    .card-img {
      height: 396px;
      border-radius: 15px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .card-title {
      background: #111111d6;
      height: 54px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      h1 {
        margin: 0px 5px;
      }
    }
    .card-info {
      font-size: 18px;
      display: flex;
      flex-direction: column;
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #766764;
      }
    }
  }
`;

const PersCardModal = props => {
  const [cerrarModal, setCerrarModal] = useState(false);

 {/* Dado que de cerrar el modal se ocupa PersCard, esta funcion aca es innecesaria, 
al igual que el estado cerrarModal. */}
  const handleClickCerrar = () => {
    setCerrarModal(!cerrarModal);
  };

  return (
    <>
    {/* Dado que de cerrar el modal se ocupa PersCard, esta validacion aca es innecesaria. */}
      {!cerrarModal && (
        <ModalCardInfo>
          <div className="card-content">
            <div className="cerrarModal">
              <button onClick={handleClickCerrar}>cerrar</button>
            </div>
            <div className="card-img">
              <img src={props.info.image} alt={props.info.name} />
            </div>
            <div className="card-title">
              <h1>NOMBRE: {props.info.name}</h1>
              <h1>ID: {props.info.id}</h1>
            </div>
            <div className="card-info">
            {/* Estos <divs> tan repetitivos podrian ser componentes! */}
              <div>
                <p>ESPECIE</p>
                <p>{props.info.species}</p>
              </div>
              <div>
                <p>GENERO</p>
                <p>{props.info.gender}</p>
              </div>
              <div>
                <p>ESTADO</p>
                <p>{props.info.status}</p>
              </div>
              <div>
                <p>ORIGEN</p>
                <p>{props.info.origin.name}</p>
              </div>
              <div>
                <p>UBICACION</p>
                <p>{props.info.location.name}</p>
              </div>
            </div>
          </div>
        </ModalCardInfo>
      )}
    </>
  );
};

export default PersCardModal;
