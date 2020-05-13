import React from 'react';

const Menu = (props) => {
  const handleCloseButton = () => {
    props.toggleMenu();
  };

  return (
    <section className="js-menu app-menu">
      <div className="app-menu-inner bg-light p-2 shadow">
        <header className="d-flex justify-content-between align-items-start mb-4">
          <h2 className="h4 font-weight-light">Menú</h2>
          <button onClick={handleCloseButton} type="button" className="js-menu-btn close pl-2 pr-2 pb-1">
            <span aria-hidden="true">&times;</span>
          </button>
        </header>
        <main>
          <h5 className="h5">Tareas por etiquetas</h5>
          <h6 className="h5">
            <span className="badge badge-secondary bg-success">JS</span>
          </h6>
          <ul>
            <li>
              <small>Unificar funcionalidad</small>
            </li>
            <li>
              <small>Pintar el DOM</small>
            </li>
            <li>
              <small>Escuchar eventos</small>
            </li>
            <li>
              <small>Manipular datos</small>
            </li>
          </ul>
          <h6 className="h5">
            <span className="badge badge-secondary bg-success">Css</span>
          </h6>
          <ul>
            <li>
              <small>Manipular datos</small>
            </li>
            <li>
              <small>Guardar en el local storage</small>
            </li>
            <li>
              <small>Obtener datos del API</small>
            </li>
          </ul>
          <h6 className="h5">
            <span className="badge badge-secondary bg-success">Html</span>
          </h6>
          <ul>
            <li>
              <small>Unificar funcionalidad</small>
            </li>
            <li>
              <small>Pintar el DOM</small>
            </li>
            <li>
              <small>Escuchar eventos</small>
            </li>
            <li>
              <small>Manipular datos</small>
            </li>
            <li>
              <small>Guardar en el local storage</small>
            </li>
            <li>
              <small>Obtener datos del API</small>
            </li>
          </ul>
        </main>
      </div>
    </section>
  );
};

export default Menu;
