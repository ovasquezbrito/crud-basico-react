import React from 'react'
import Cards from './components/Cards';

function App() {
  return (
    <div className="container">
       <h1>Propiedades de los componentes</h1>
       <hr/>
     <div className="row">
          <div className="col">
              <Cards
                  imagen="http://lorempixel.com/150/150/"
                  titulo="Título card 1"
                  texto="Texto de la card 1"
              />
          </div>
          <div className="col">
              <Cards
                  imagen="http://lorempixel.com/150/150/"
                  titulo="Título card 2"
                  texto="Texto de la card 2"
              />
          </div>
          <div className="col">
              <Cards
                  imagen="http://lorempixel.com/150/150/"
                  titulo="Título card 3"
                  texto="Texto de la card 3"
              />
          </div>
      </div>
    </div>
  );
}

export default App;
