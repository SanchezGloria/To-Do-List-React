import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
  // console.log(props, 'card');
  console.log(props.card.tags, 'card');

  const tagElement = props.card.tags.map((tag, index) => {
    return (
      <span key={index} className="badge badge-secondary bg-success">
        {tag}
      </span>
    );
  });
  return (
    <article key={props.card.id} className="js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm" title="Abrir la tarjeta">
      <Link className="edit" to={`/edit/${props.card.id}`}>
        <div>{tagElement}</div>

        <div>
          <h3 className="h6">{props.card.title}</h3>
        </div>

        <div className="text-black-50">
          <small className="pr-2 fas fa-align-left"></small>
          <small className="far fa-check-square"></small>
          <small title="Subtareas completadas: 3 de 5">3/5</small>
        </div>

        <div className="app-card-btns btn-group-vertical btn-group-sm">
          <button type="button" className="btn btn-light text-muted border shadow-sm app-card-move-up" title="Mover esta tarjeta hacia abajo">
            <span className="fas fa-arrow-up"></span>
          </button>
          <button type="button" className="btn btn-light text-muted border shadow-sm app-card-move-down" title="Mover esta tarjeta hacia arriba">
            <span className="fas fa-arrow-down"></span>
          </button>
        </div>
      </Link>
    </article>
  );
};

export default Card;
