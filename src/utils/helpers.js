const searchPosts = (posts, search) => {
  if (!search) return posts;
  const searchedPosts = posts?.filter((post) =>
    post.options.title?.toLowerCase().includes(search)
  );
  return searchedPosts;
};

const filterCategoryPosts = (posts, category) => {
  if (!category) return posts;
  const filteredPosts = posts?.filter((post) => post.category === category);
  return filteredPosts;
};

const filterCityPosts = (posts, city) => {
  if (!city) return posts;
  const filteredPosts = posts?.filter((post) => post.options.city === city);
  return filteredPosts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.city === "همه استان‌ها") {
    const { city, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getInitialQuery = (searchParams) => {
  const query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  const city = searchParams.get("city");
  if (category) query.category = category;
  if (search) query.search = search;
  if (city) query.city = city;

  return query;
};

export {
  searchPosts,
  filterCategoryPosts,
  filterCityPosts,
  createQueryObject,
  getInitialQuery,
};
