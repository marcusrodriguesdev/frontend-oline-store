import React from 'react';
import { getCategories } from '../services/api';

class Categories extends React.Component { // Requisito 4
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.requestApi();
  }

  async requestApi() {
    const result = await getCategories();
    this.setState({
      categories: result,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        { categories.map(({ name, id }) => (
          <div>
            <label htmlFor={id} key={id}>
              {' '}
              {name}
              <input type="radio" name="Catagoria" id={id} />
            </label>
          </div>
        )) }
      </div>
    );
  }
}

export default Categories;
