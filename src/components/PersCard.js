import React from 'react';
import styled from 'styled-components';

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

const PersCard = props => { 
  return (
    <CardInfo>
      <div className='card-content'>
        <div className='card-img'><img src={props.info.image} alt={props.info.name} /></div>
        <div className='card-title'>
          <h1>{props.info.name}</h1>
        </div>
        <div className='card-info'>
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
        </div>
      </div>
    </CardInfo>
  );
}

export default PersCard;