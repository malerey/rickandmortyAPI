import React from 'react';
import styled from 'styled-components';

import muestra from '../assets/locations/01.png';

const CardInfo = styled.div`
  background-color: #000;
  color: #33FFC4;
  font-family: 'Share Tech', sans-serif;
  width: 270px;
  height: 420px;
  margin: 25px;
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  .card-content {
    width: 100%;
    .card-img {
      img {
        width: 100%;
        height: 200px;
      }
    }
    .card-title h1 {
      font-family: 'Share Tech', sans-serif;
      font-weight: lighter;
      font-size: 20px;
      text-align: center;
      margin: 10px 0;
    }
    .card-info {
      font-size: 16px;
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

const UbicCard = props => { 
  return (
    <CardInfo>
      <div className='card-content'>
        <div className='card-img'><img src={muestra} alt={props.info.name} /></div>
        <div className='card-title'>
          <h1>{props.info.name}</h1>
        </div>
        <div className='card-info'>
          <div>
            <p>TIPO</p>
            <p>{props.info.type}</p>
          </div>
          <div>
            <p>DIMENSION</p>
            <p>{props.info.dimension}</p>
          </div>
          <div>
            <p>RESIDENTES</p>
            <p>{props.info.residents.length}</p>
          </div>
        </div>
      </div>
    </CardInfo>
  );
}

export default UbicCard;