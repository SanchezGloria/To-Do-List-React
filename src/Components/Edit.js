import React from 'react';
import { Link } from 'react-router-dom';

const Edit = (props) => {
  const tagElement = props.task.tags.map((tag, index) => {
    return (
      <span key={index} className="badge badge-secondary bg-success">
        {tag}
      </span>
    );
  });

  return (
    <div className="js-edit show js-edit-close app-edit modal" tabIndex="-1">
      <section className="js-edit-modal modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content bg-light shadow border-0">
          <form>
            {/* <!-- header --> */}
            <div className="modal-header border-bottom-0">
              <h5 className="modal-title d-flex w-100">
                <span className="fas fa-columns mt-3 mr-2 text-muted"></span>
                <div className="w-100">
                  <input className="app-edit-title form-control mb-0 border-0" placeholder="Filtrar tarjetas" type="text" defaultValue={props.task.title} />
                  <small className="app-edit-subtitle d-block mt-0 text-muted">
                    en la lista <strong>Por hacer</strong>
                  </small>
                </div>
              </h5>
              <Link to="/" className="detail__page--close">
                <button type="button" className="js-edit-close close" data-dismiss="modal">
                  <span>&times;</span>
                </button>
              </Link>
            </div>

            {/* <!-- content --> */}
            <div className="modal-body">
              <div className="row">
                {/* <!-- left column --> */}
                <div className="col-xl-9 col-8">
                  {/* <!-- description --> */}
                  <div className="container-fluid mb-4">
                    <div className="row">
                      <div className="col-1 pl-0 pr-0">
                        <span className="fas fa-align-left text-muted"></span>
                      </div>
                      <div className="col-11 pl-0 pr-0">
                        <h6 className="h6">Descripción</h6>
                        <textarea className="app-edit-textarea" defaultValue={props.task.description}></textarea>
                      </div>
                    </div>
                  </div>

                  {/* <!-- subtasks --> */}
                  <div className="container-fluid mb-4">
                    <div className="row">
                      <div className="col-1 pl-0 pr-0">
                        <span className="far fa-check-square text-muted"></span>
                      </div>
                      <div className="col-11 pl-0 pr-0">
                        <h6 className="h6 mb-3">Subtareas: completadas 3 de 5</h6>
                        <div className="app-edit-progress progress mb-3">
                          <div className="progress-bar" style={{ width: '60%' }}></div>
                        </div>
                        <div className="custom-control custom-checkbox mb-2">
                          <input className="custom-control-input" type="checkbox" defaultChecked id="subtask-1" />
                          <label className="custom-control-label" htmlFor="subtask-1">
                            Unificar los eventos
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-2">
                          <input className="custom-control-input" type="checkbox" defaultChecked id="subtask-2" />
                          <label className="custom-control-label" htmlFor="subtask-2">
                            Unificar las clases de la cabecera
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-2">
                          <input className="custom-control-input" type="checkbox" id="subtask-3" />
                          <label className="custom-control-label" htmlFor="subtask-3">
                            Unificar las clases de las tarjetas
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-2">
                          <input className="custom-control-input" type="checkbox" defaultChecked id="subtask-4" />
                          <label className="custom-control-label" htmlFor="subtask-4">
                            Unificar las funciones de datos
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox mb-2">
                          <input className="custom-control-input" type="checkbox" id="subtask-5" />
                          <label className="custom-control-label" htmlFor="subtask-5">
                            Unificar las estilos
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- right column --> */}
                <div className="col-xl-3 col-4">
                  <h6 className="h6 text-uppercase">Etiquetas</h6>
                  <div className="mb-4">{tagElement}</div>
                  <h6 className="h6 text-uppercase">Acciones</h6>
                  <button type="button" className="btn btn-primary btn-sm mb-2 w-100 text-left">
                    <span className="fas fa-copy mr-2"></span>
                    Duplicar
                  </button>
                  <button type="button" className="btn btn-primary btn-sm mb-2 w-100 text-left">
                    <span className="fas fa-share-alt mr-2"></span>
                    Mover
                  </button>
                  <button type="button" className="btn btn-primary btn-sm mb-2 w-100 text-left">
                    <span className="fas fa-trash-alt mr-2"></span>
                    Borrar
                  </button>
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
