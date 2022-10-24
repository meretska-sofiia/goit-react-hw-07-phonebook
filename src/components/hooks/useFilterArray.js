export const useFilterArray = (array, filter) => {
  return filter
    ? array.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    : array;
};
