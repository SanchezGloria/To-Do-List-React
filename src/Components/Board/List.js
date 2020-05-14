import React from 'react';
import Card from './Card';

const List = (props) => {
  const handleTitle = (ev) => {
    props.handleAction({
      action: 'modify-list-title',
      value: ev.currentTarget.value,
      listId: props.list.id,
    });
  };

  // console.log(props.list, 'list');

  const handleDeleteList = () => {
    props.handleAction({
      action: 'delete-list',
      listId: props.list.id,
    });
  };
  const handleMoveListLeft = () => {
    props.handleAction({
      action: 'move-list-left',
      listId: props.list.id,
    });
  };
  const handleMoveListRight = () => {
    props.handleAction({
      action: 'move-list-right',
      listId: props.list.id,
    });
  };

  const handleNewCard = () => {
    console.log(props.list.id);

    props.handleAction({
      action: 'add-new-card',
      listId: props.list.id,
    });
  };

  const renderCards = () => {
    return props.list.cards.map((card) => {
      return <Card key={card.id} card={card} />;
    });
  };

  const renderInput = () => {
    return <input className="app-list-input form-control form-control-sm" placeholder="Tareas importantes" type="text" value={props.list.title} title="Editar el título de la lista" onChange={handleTitle} />;
  };

  const renderEllipsis = () => {
    return <span className="pl-2 pr-2 text-white-50 fas fa-ellipsis-v"></span>;
  };

  const renderDeleteButton = () => {
    return (
      <button onClick={handleDeleteList} type="button" className="btn btn-light text-muted border shadow-sm" title="Borrar esta tarjeta">
        <span className="fas fa-trash-alt"></span>
      </button>
    );
  };

  const renderLeftButton = () => {
    return (
      <button onClick={handleMoveListLeft} type="button" className="btn btn-light text-muted border shadow-sm app-list-left-button" title="Mover esta lista hacia la izquierda">
        <span className="fas fa-arrow-left"></span>
      </button>
    );
  };

  const renderRightButton = () => {
    return (
      <button onClick={handleMoveListRight} type="button" className="btn btn-light text-muted border shadow-sm app-list-right-button" title="Mover esta lista hacia la derecha">
        <span className="fas fa-arrow-right"></span>
      </button>
    );
  };

  const renderNewCardButton = () => {
    return (
      <button onClick={handleNewCard} type="button" className="ml-1 btn btn-primary btn-sm text-white-50" title="Añadir una nueva tarjeta">
        <span className="fas fa-plus"></span> Añadir otra tarjeta
      </button>
    );
  };

  return (
    <div className="app-list show">
      <div className="p-1 rounded-sm bg-primary shadow">
        <form className="app-list-form align-middle p-1 position-relative">
          {renderInput()}
          <div className="app-list-options">
            {renderEllipsis()}
            <div className="app-list-btns btn-group btn-group-sm">
              {renderDeleteButton()}
              {renderLeftButton()}
              {renderRightButton()}
            </div>
          </div>
        </form>
        {renderCards()}
        {renderNewCardButton()}
      </div>
    </div>
  );
};

export default List;
