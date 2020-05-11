import React from 'react';

const ListHeader = (props) => {
  const handleDeleteList = (ev) => {
    props.handleDeleteList(ev.currentTarget.id);
  };
  return (
    <form className="app-list-form align-middle p-1 position-relative">
      <input className="app-list-input form-control form-control-sm" placeholder="Tareas importantes" type="text" value={props.title} title="Editar el título de la lista" />
      <div className="app-list-options">
        <span className="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>

        <div className="app-list-btns btn-group btn-group-sm">
          <button id={props.id} onClick={handleDeleteList} type="button" className="btn btn-light text-muted border shadow-sm" title="Borrar esta tarjeta">
            <span className="fas fa-trash-alt"></span>
          </button>
          <button type="button" className="btn btn-light text-muted border shadow-sm app-list-move-left" title="Mover esta lista hacia la izquierda">
            <span className="fas fa-arrow-left"></span>
          </button>
          <button type="button" className="btn btn-light text-muted border shadow-sm app-list-move-right" title="Mover esta lista hacia la derecha">
            <span className="fas fa-arrow-right"></span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ListHeader;
