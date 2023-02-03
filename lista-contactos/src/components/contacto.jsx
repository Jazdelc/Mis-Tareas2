import React from 'react';

const Contacto = ({ contacto, changeState, eliminar }) => {
  return (
    <div className="contacto">
      <h2>{contacto.nombre}</h2>
      <span>{contacto.email}</span>

      <button
        style={{ backgroundColor: contacto.estado ? "green" : "red" }}
        className="state-button"
        onClick={() => {
          changeState(contacto);
        }}
      >
        {contacto.estado ? "Conectado" : "Desconectado"}
      </button>

      <button className="eliminar-button" onClick={() => eliminar(contacto)}>
        Eliminar
      </button>
    </div>
  );
};

export default Contacto;