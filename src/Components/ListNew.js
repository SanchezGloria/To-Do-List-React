import React from 'react';
import List from './List';

const ListNew = (props) => {
  const handleNewList = (ev) => {
    props.handleNewList(ev.currentTarget);

    console.log('papas');

    // return (
    //  <List/>
    // );
  };

  return (
    <div>
      <button onClick={handleNewList} type="button" className="btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm" title="Añadir una nueva lista">
        <span className="fas fa-plus"></span>
      </button>
    </div>
  );
};

export default ListNew;
