import React from 'react';
import { Link } from 'react-router-dom';

const Edit = (props) => {
  // const tagElement = props.task.tags.map((tag, index) => {
  //   return (
  //     <span key={index} className="badge badge-secondary bg-success">
  //       {tag}
  //     </span>
  //   );
  // });

  const handleInput = () => {};

  const handleDeleteCard = () => {
    props.handleAction({
      action: 'delete-card',
      cardId: props.card.id,
      listId: props.listId,
    });
  };

  const renderHeader = () => {
    return (
      <h5 className="modal-title d-flex w-100">
        <span className="fas fa-columns mt-3 mr-2 text-muted"></span>
        <div className="w-100">
          <input className="app-edit-title form-control mb-0 border-0" placeholder="Filtrar tarjetas" type="text" value="Unificar funcionalidad" onChange={handleInput} />
          <small className="app-edit-subtitle d-block mt-0 text-muted">
            en la lista <strong>Por hacer</strong>
          </small>
        </div>
      </h5>
    );
  };

  const renderCloseButton = () => {
    return (
      <button type="button" className="close" data-dismiss="modal">
        <span>&times;</span>
      </button>
    );
  };

  const renderDescription = () => {
    return (
      <div className="row">
        <div className="col-1 pl-0 pr-0">
          <span className="fas fa-align-left text-muted"></span>
        </div>
        <div className="col-11 pl-0 pr-0">
          <h6 className="h6">Descripción</h6>
          <textarea className="app-edit-textarea" onChange={handleInput} defaultValue="" />
        </div>
      </div>
    );
  };

  const renderTasks = () => {
    return (
      <div className="row">
        <div className="col-1 pl-0 pr-0">
          <span className="far fa-check-square text-muted"></span>
        </div>
        <div className="col-11 pl-0 pr-0">
          <h6 className="h6 mb-3">Subtareas: completadas 3 de 5</h6>
          <div className="app-edit-progress progress mb-3">
            <div className="progress-bar" style={{ width: '60%' }}></div>
          </div>
          {renderTask('Unificar eventos', true)}
          {renderTask('Unificar las clases de la cabecera', false)}
          {renderTask('Unificar las clases de las tarjetas', false)}
          {renderTask('Unificar las funciones de datos', false)}
          {renderTask('Unificar las estilos', true)}
        </div>
      </div>
    );
  };

  const renderTask = (label, checked) => {
    return (
      <div className="custom-control custom-checkbox mb-2">
        <input className="custom-control-input" type="checkbox" checked={checked} id="subtask-1" onChange={handleInput} />
        <label className="custom-control-label" htmlFor="subtask-1">
          {label}
        </label>
      </div>
    );
  };

  const renderTags = () => {
    return (
      <>
        <h6 className="h6 text-uppercase">Etiquetas</h6>
        <div className="mb-4">
          <span className="badge badge-secondary bg-success mr-1">JS</span>
          <span className="badge badge-secondary bg-success mr-1">Css</span>
          <span className="badge badge-secondary bg-success mr-1">Html</span>
        </div>
      </>
    );
  };

  const renderActions = () => {
    return (
      <>
        <h6 className="h6 text-uppercase">Acciones</h6>
        <button type="button" className="btn btn-primary btn-sm mb-2 w-100 text-left">
          <span className="fas fa-copy mr-2"></span> Duplicar
        </button>
        <button type="button" className="btn btn-primary btn-sm mb-2 w-100 text-left">
          <span className="fas fa-share-alt mr-2"></span> Mover
        </button>
        <Link to="/">
          <button onClick={handleDeleteCard} type="button" className="btn btn-primary btn-sm mb-2 w-100 text-left">
            <span className="fas fa-trash-alt mr-2"></span> Borrar
          </button>
        </Link>
      </>
    );
  };

  return (
    <div className="app-edit modal show" tabIndex="-1">
      <section className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light shadow border-0">
          <form>
            <div className="modal-header border-bottom-0">
              {renderHeader()}
              <Link to="/">{renderCloseButton()}</Link>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-xl-9 col-8">
                  <div className="container-fluid mb-4">{renderDescription()}</div>
                  <div className="container-fluid mb-4">{renderTasks()}</div>
                </div>
                <div className="col-xl-3 col-4">
                  {renderTags()}
                  {renderActions()}
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Edit;
