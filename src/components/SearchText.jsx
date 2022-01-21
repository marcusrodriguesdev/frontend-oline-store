import React from 'react';
import { Link } from 'react-router-dom';

class SearchText extends React.Component {
  render() {
    const { searchText, handleChange, handleClick } = this.props;
    console.log(handleChange);
    return (
      <div>
        <h3>
          Digite algum termo de pesquisa ou escolha uma categoria

        </h3>
        <Link to="/carrinho">Carrinho</Link>
        <div>
          <input type="text" name="searchText" value={searchText} onChange={handleChange} />
          <button type="button" onClick={handleClick}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default SearchText;
