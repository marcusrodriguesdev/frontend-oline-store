import React from 'react';
import Categories from '../components/Categories';
import SearchText from '../components/SearchText';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: 'ola',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async handleClick({ target }) {
    const { searchText } = this.state;
    const result = await getProductsFromCategoryAndQuery(target.id, searchText);
    this.setState({
      products: result,
    });
  }

  render() {
    const { searchText } = this.state;
    return (
      <div>
        <SearchText
          searchText={searchText}
          handleChange={this.handleChange}
        />
        <Categories />
      </div>
    );
  }
}

export default Home;
