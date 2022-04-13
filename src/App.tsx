import React from 'react';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from './components/styles/Container.styled';
import Global from './components/styles/Global.styled';
import content from './content';
import Newsletter from './components/Newsletter';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: 'hsl(192, 100%, 9%)',
  },
  layout: {
    mobile: '768px',
    desktop: '1440px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      <Container context="main-content">
        {content.map((item, index) => {
          if (index % 2) {
            return (
              <Card key={index} item={item} direction="row-reverse"></Card>
            );
          } else {
            return <Card key={index} item={item} direction="row"></Card>;
          }
        })}
        <Newsletter />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
