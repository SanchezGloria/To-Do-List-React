import React from 'react';

const Header = (props) => {
  const handleInput = (ev) => {
    props.handleInput(ev.currentTarget.value);
  };
  const renderFilter = () => {
    return (
      <>
        <div className="input-group-prepend">
          <span className="input-group-text bg-white border-right-0 text-primary">
            <span className="fas fa-search"></span>
          </span>
        </div>
        <input onChange={handleInput} type="text" className="app-header-search form-control border-left-0" title="Filtrar las tareas" value={props.searchInput} />
      </>
    );
  };

  const renderMenuButton = () => {
    return (
      <button type="button" className="js-menu-btn btn btn-primary btn-sm text-white-50" title="Abrir el menú">
        <span className="fas fa-columns"></span>
      </button>
    );
  };

  return (
    <header className="app-header bg-primary mb-3 d-flex justify-content-between align-items-center shadow">
      <h1 className="app-header-title h3 text-white pl-3 pt-1 mr-4 font-weight-light">Gestor de proyectos</h1>
      <form className="app-header-form p-2 d-flex justify-content-end">
        <div className="app-header-input input-group input-group-sm mr-2">{renderFilter()}</div>
        {renderMenuButton()}
      </form>
    </header>
  );
};

export default Header;
