import React, { useState } from "react";
import styled from "styled-components";

import muestra from "../assets/episodes/01.png";

const ModalCardInfo = styled.div`
  background-color: #111;
  color: #33ffc4;
  font-family: "Share Tech", sans-serif;
  margin: 40px;
  padding: 10px 20px;
  height: 470px;
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
      height: 185px;
      border-radius: 15px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .card-title {
      background: #111111d6;
      h2 {
        height: 30px;
        font-size: 22px;
        margin: 20px 5px;
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

const EpisCardModal = props => {
  const [cerrarModal, setCerrarModal] = useState(false);

  const handleClickCerrar = () => {
    setCerrarModal(!cerrarModal);
  };

  return (
    <>
      {!cerrarModal && (
        <ModalCardInfo>
          <div className="card-content">
            <div className="cerrarModal">
              <button onClick={handleClickCerrar}>cerrar</button>
            </div>
            <div className="card-img">
              <img src={muestra} alt={props.info.name} />
            </div>
            <div className="card-title">
              <h2>{props.info.name}</h2>
            </div>
            <div className="card-info">
              <div>
                <p>ID</p>
                <p>{props.info.id}</p>
              </div>
              <div>
                <p>AIR DATE</p>
                <p>{props.info.air_date}</p>
              </div>
              <div>
                <p>EPISODE</p>
                <p>{props.info.episode}</p>
              </div>
            </div>
          </div>
        </ModalCardInfo>
      )}
    </>
  );
};

export default EpisCardModal;
