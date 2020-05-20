import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // console.log(props, 'card');
  // console.log(props.card.tags, 'card');

  // const tagElement = props.card.tags.map((tag, index) => {
  //   return (
  //     <span key={index} className="badge badge-secondary bg-success">
  //       {tag}
  //     </span>
  //   );
  // });

  const handleDragStart = (ev) => {
    props.handleDragStart({
      cardId: props.card.id,
      listId: props.listId,
      target: ev.target,
    });
    console.log('drag starting...');
  };

  const handleDragEnter = (ev) => {
    props.handleDragEnter({
      cardId: props.card.id,
      listId: props.listId,
      target: ev.target,
    });
  };

  const handleMoveCardUp = () => {
    props.handleAction({
      action: 'move-card-up',
      cardId: props.card.id,
      listId: props.listId,
    });
  };
  const handleMoveCardDown = () => {
    props.handleAction({
      action: 'move-card-down',
      cardId: props.card.id,
      listId: props.listId,
    });
  };

  const renderTags = () => {
    return props.card.tags.map((tag) => {
      return (
        <span key={tag} className="badge badge-secondary bg-success mr-1">
          {tag}
        </span>
      );
    });
  };

  const renderTitle = () => {
    return (
      <div>
        <h3 className="h6">{props.card.title}</h3>
      </div>
    );
  };

  const renderInfo = () => {
    return (
      <div className="text-black-50">
        <small className="pr-2 fas fa-align-left"></small>
        <small className="far fa-check-square"></small>
        <small title="Subtareas completadas: 3 de 5"> 3/5</small>
      </div>
    );
  };

  const renderUpButton = () => {
    return (
      <button onClick={handleMoveCardUp} type="button" className="btn btn-light text-muted border shadow-sm app-card-up-button" title="Mover esta tarjeta hacia abajo">
        <span className="fas fa-arrow-up"></span>
      </button>
    );
  };

  const renderDownButton = () => {
    return (
      <button onClick={handleMoveCardDown} type="button" className="btn btn-light text-muted border shadow-sm app-card-down-button" title="Mover esta tarjeta hacia arriba">
        <span className="fas fa-arrow-down"></span>
      </button>
    );
  };

  return (
    <Link className="edit" to={`/edit/${props.card.id}`}>
      <div draggable onDragStart={handleDragStart} onDragEnter={props.dragging ? handleDragEnter : null} className=" js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm" title="Abrir la tarjeta">
        {renderTags()}
        {renderTitle()}
        {renderInfo()}
        <div className="app-card-btns btn-group-vertical btn-group-sm">
          {renderUpButton()}
          {renderDownButton()}
        </div>
      </div>
    </Link>
  );
};

export default Card;
