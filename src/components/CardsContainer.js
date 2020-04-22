import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';

const ShowCards = styled.article`
  width: 80%;
  height: 100%;
  margin: 20px 20px;
  padding: 5px 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`

const CardsContainer = () => {

  return (
    <ShowCards>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ShowCards>

  );

}

export default CardsContainer;