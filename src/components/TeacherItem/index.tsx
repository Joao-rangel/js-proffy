import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://hermes.digitalinnovation.one/users/student/43e38df4-a634-4f5a-a1b3-8376b6f49812.jpg" alt="Joao Rangel"/>
      <div>
        <strong>João Rangel</strong>
        <span>Física</span>
      </div>
    </header>

    <p>
      Especialista em física estática com experiencia em simulação computacional.
    </p>

    <footer>
      <p>
        Valor/hora
        <strong>R$ 70,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="whatsap" />
        Entrar em contato
      </button>
    </footer>
    </article>
  );
}

export default TeacherItem