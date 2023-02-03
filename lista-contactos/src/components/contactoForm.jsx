import React, { useRef } from 'react';

const ContactoForm = ({ onAddContact }) => {
  const name = useRef("");
  const email = useRef("");

  function addContact(event) {
    event.preventDefault();

    const newContact = { nombre: name.current.value, email: email.current.value, conectado: true };

    onAddContact(newContact);
    name.current.value = "";
    email.current.value = "";
  }

  return (
    <form onSubmit={addContact} className="contacto">
      <h2>Crear Contacto </h2>
      <input ref={name} name="name" placeholder="nombre" className="form-control mb-2" />
      <input ref={email} name="email" type="email" placeholder="email" />
      <button onClick={addContact} type="submit" className="crear-button">
        Crear
      </button>
    </form>
  );
};

export default ContactoForm;