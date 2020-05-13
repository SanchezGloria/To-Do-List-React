import React from 'react';
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

  const renderTags = () => {
    return (
      <div>
        <span className="badge badge-secondary bg-success mr-1">JS</span>
        <span className="badge badge-secondary bg-success mr-1">Css</span>
        <span className="badge badge-secondary bg-success mr-1">Html</span>
      </div>
    );
  };

  const renderTitle = () => {
    return (
      <div>
        <h3 className="h6">Publicar en GitHub Pages</h3>
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
      <button type="button" className="btn btn-light text-muted border shadow-sm app-card-move-up" title="Mover esta tarjeta hacia abajo">
        <span className="fas fa-arrow-up"></span>
      </button>
    );
  };

  const renderDownButton = () => {
    return (
      <button type="button" className="btn btn-light text-muted border shadow-sm app-card-move-down" title="Mover esta tarjeta hacia arriba">
        <span className="fas fa-arrow-down"></span>
      </button>
    );
  };

  return (
    <article className="js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm" title="Abrir la tarjeta">
      {/* <Link className="edit" to={`/edit/${props.card.id}`}> */}
      {renderTags()}
      {renderTitle()}
      {renderInfo()}
      <div className="app-card-btns btn-group-vertical btn-group-sm">
        {renderUpButton()}
        {renderDownButton()}
      </div>
      {/* </Link> */}
    </article>
  );
};

export default Card;
