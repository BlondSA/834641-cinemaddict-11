const filterNames = [
  `All movies`,
  `Watchlist`,
  `History`,
  `Favorites`,
];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: it === `All movies` ? `` : Math.floor(Math.random() * 10),
    };
  });
};


export {generateFilters};
