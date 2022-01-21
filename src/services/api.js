const API_CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
const API_QUERY_CATEGORY = (category, query) => `https://api.mercadolibre.com/sites/MLB/search?category=${category}&q=${query}`;

export async function getCategories() {
  const requiriment = await fetch(API_CATEGORIES).then((response) => response.json());
  return requiriment;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const requiriment = await fetch(API_QUERY_CATEGORY(categoryId, query))
    .then((response) => response.json());
  return requiriment;
}

// export async function getProductsFromCategoryAndQuery(categoryId, query) {
//   const requiriment = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
//     .then((response) => response.json());
//   return requiriment;
// }
