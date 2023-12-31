import React, { Component } from 'react';

class Buscador extends Component {
  busquedaRef = React.createRef();

  obtenerDatos = (e) => {
    e.preventDefault();
    const termino = this.busquedaRef.current.value;
    this.props.datosBusqueda(termino);
  }

  render() { 
    return ( 
      <div className="container">
        <form onSubmit={this.obtenerDatos}>
          <div className='row'>
            <div className='form-group col-md-8'>
              <input ref={this.busquedaRef} type='text' className='form-control form-control-lg' placeholder='Busca tu Imagen. Ejemplo: Futbol' />
            </div>
            <div className='form-group col-md-4'>
              <button type='submit' className='btn btn-lg btn-danger btn-block'>Buscar</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Buscador;
