import React from 'react';
import './../style.css';

export function TodoItem({todo, eliminarPost}) {

    const {id, title, description,importante} = todo;
    
    let claseImportante;
    if  (importante === true){
      claseImportante = 'card colorImportante';
    } else {
      claseImportante = 'card colorNormal';
    }
    const eliminar = () => {
      eliminarPost(id);
    }
    return (
        <li className="col-sm-12 col-xs-12 col-md-3 col-lg-3 mt-3">
            <div className = {claseImportante}>
              <div className="card-body altura">
                <div className="d-grid gap-1 d-flex justify-content-end">
                  <button  type="button" onClick={eliminar} className="btn-close botonCerrar" aria-label="Close"></button>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="card-text texto">{description}</p>
              </div>
            </div>
        </li>
    );
}