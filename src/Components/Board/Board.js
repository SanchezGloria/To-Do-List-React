import React from 'react';
import List from './List';

const Board = () => {
  const renderNewListButton = () => {
    return (
      <div>
        <button type="button" className="btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm" title="Añadir una nueva lista">
          <span className="fas fa-plus"></span>
        </button>
      </div>
    );
  };
  return (
    <main className="app-board d-flex flex-nowrap">
      <List />
      <List />
      <List />
      <List />
      {renderNewListButton()}
    </main>
  );
};

export default Board;
