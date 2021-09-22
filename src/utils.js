export const sortItems = (items) => {
  const sortedItems = items.sort((a, b) =>(a.index - b.index));
  return sortedItems;
}
