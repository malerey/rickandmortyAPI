import React from 'react';
import styled from 'styled-components';
import prueba from '../assets/mini-rickmorty.png';

const CardInfo = styled.div`
  background-color: #000;
  color: #33FFC4;
  width: 250px;
  height: 400px;
  margin: 25px;
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  .card-content {
    .card-img {
      img {
        width: 100%;
        height: 200px;
      }
    }
    .card-title h1 {
      text-align: center;
      margin: 10px 0;
    }
    .card-info {
      display: flex;
      flex-direction: column;
      padding: 0px 10px;
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #766764;
      }
    }
  }
`

const CardsContainer = () => {

  return (
    <CardInfo>
      <div className='card-content'>
        <div className='card-img'><img src={prueba} alt='' /></div>
        <div className='card-title'>
          <h1>NOMBRE</h1>
        </div>
        <div className='card-info'>
          <div>
            <p>GENERO</p>
            <p>femenino</p>
          </div>
          <div>
            <p>ESTADO</p>
            <p>muerto</p>
          </div>
          <div>
            <p>ORIGEN</p>
            <p>tierra</p>
          </div>
        </div>
      </div>
    </CardInfo>
  );

}

export default CardsContainer;