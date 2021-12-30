import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

//importamos estilos y JS bootstrap dentro de nuestro proyecto
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

//importamos el archivo index.css dentro de nuestro proyecto
import './css/index.css'


//renderiza la app
ReactDOM.render(<App />, document.getElementById('root'));

