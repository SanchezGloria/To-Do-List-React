import React from 'react';
import List from './List';

const Board = (props) => {
  console.log(props);

  const renderList = () => {
    return props.list.map((list) => {
      return <List handleDragStart={props.handleDragStart} key={list.id} list={list} handleAction={props.handleAction} getStylesDragging={props.getStylesDragging} dragging={props.dragging} handleDragEnter={props.handleDragEnter} />;
    });
  };

  const handleNewList = (ev) => {
    console.log('hola');
    props.handleAction({
      action: 'add-new-list',
    });
  };

  const renderNewListButton = () => {
    return (
      <div>
        <button onClick={handleNewList} type="button" className="btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm" title="Añadir una nueva lista">
          <span className="fas fa-plus"></span>
        </button>
      </div>
    );
  };

  return (
    <main className="app-board d-flex flex-nowrap">
      {renderList()}
      {renderNewListButton()}
    </main>
  );
};

export default Board;
