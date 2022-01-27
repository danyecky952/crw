import React from 'react';
import './homepage.styles.scss';
const HomePage = () => (
  //primer contenedor externo que sera nuestra pagina de inicio
  <div className='homepage'>
    {/* Segundo contenedor externo */}
    <div className='directory-menu'>
      {/* tercer contenedor interno */}
      <div className='menu-item'>
        {/* contenedor para elementos hijos */}
        <div className='content'>
          <h1 className='title'>Hats</h1>
          <span className='subtitle'>Shop Now</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
