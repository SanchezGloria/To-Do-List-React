import React from 'react';
// import ListHeader from './ListHeader';

const ListFooter = (props) => {
  const handleNewCard = (ev) => {
    console.log(ev.currentTarget);

    props.handleNewCard(ev.currentTarget);
  };
  return (
    <button onClick={handleNewCard} type="button" className="ml-1 btn btn-primary btn-sm text-white-50" title="Añadir una nueva tarjeta">
      <span className="fas fa-plus"></span>
      Añadir otra tarjeta
    </button>
  );
};

export default ListFooter;
