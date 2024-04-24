const shortenText = (text) => {
  return text.split(" ").slice(0, 5).join(" ");
};

const searchPosts = (posts, search) => {
  if (!search) return posts;
  const searchedPosts = posts.filter((post) =>
    post.options.title?.toLowerCase().includes(search)
  );
  return searchedPosts;
};

const filterPosts = (posts, category) => {
  if (!category) return posts;
  const filteredPosts = posts.filter((post) => post.category === category);
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
  return { ...currentQuery, ...newQuery };
};

export { shortenText, searchPosts, filterPosts, createQueryObject };
