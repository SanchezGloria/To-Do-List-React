const filter = (data, filterText) => {
  filterText = filterText.toLowerCase();
  return data.map((list) => {
    const newList = { ...list };
    newList.cards = newList.cards.filter((card) => card.title.toLowerCase().includes(filterText) === true);
    return newList;
  });
};

export default {
  filter,
};
