import React from 'react'

import PageHeader from '../../components/PageHeader/';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Encontre seu proffy!">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="toppic">Assunto</label>
            <input type="text" id="toppic" />
          </div>
          
          <div className="input-block">
            <label htmlFor="week-day">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  )
}

export default TeacherList