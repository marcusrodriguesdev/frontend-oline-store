import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Digite algum termo de pesquisa ou escolha uma categoria.</div>
        <Link to="/carrinho">Carrinho</Link>
        <Categories />
      </div>
    );
  }
}

export default Home;
