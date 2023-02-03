import React, { useState } from 'react';
import ContactComponent from './components/contacto';
import ContactForm from './components/contactoForm';
import './App.css';

const App = () => {
  const defaultContact = [
    { nombre: "Paula Pérez", email: "paulap@email.com", conectado: true },
    { nombre: "David López", email: "lopezdavid@email.com", conectado: true },
  ];

  const [nuevoContacto, setNuevoContacto] = useState(defaultContact);

  function changeState(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];

    tempContact[index].estado = !tempContact[index].estado;
    setNuevoContacto(tempContact);
  }

  function remove(contacto) {
    const index = nuevoContacto.indexOf(contacto);
    const tempContact = [...nuevoContacto];
    tempContact.splice(index, 1);
    setNuevoContacto(tempContact);
  }

  function addContact(contacto) {
    const tempContact = [...nuevoContacto];
    tempContact.push(contacto);
    setNuevoContacto(tempContact);
  }

  return (
    <div className="App">
      <h1>Lista de Contactos</h1>

      <div className="lista-contactos">
        {nuevoContacto.map((contacto, index) => {
          return (
            <ContactComponent key={index} contacto={contacto} changeState={changeState} eliminar={remove} />
          );
        })}
      </div>

      <ContactForm onAddContact={addContact}></ContactForm>
    </div>
  );
};

export default App;