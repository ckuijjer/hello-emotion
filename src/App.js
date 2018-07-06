import React, { Component } from 'react';
import styled from 'react-emotion';

import Label from './Label';

const PinkLabel = styled(Label)`
  background-color: #f99;
`;

const PinkTinyHoleLabel = styled(PinkLabel)`
  .my-label__hole {
    width: 12px;
    height: 12px;
  }
`;

const Container = styled('div')({
  margin: 32,
});

class App extends Component {
  render() {
    return (
      <Container>
        <Label>My First Label</Label>
        <PinkLabel>My Pink Label</PinkLabel>
        <PinkTinyHoleLabel>My Pink Tiny Hole Label</PinkTinyHoleLabel>
      </Container>
    );
  }
}

export default App;
