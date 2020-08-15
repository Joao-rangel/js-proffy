import React from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import './styles.css'

import warningIcon from "../../assets/images/icons/warning.svg";

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Ajude a mudar o mundo, um aluno de cada vez!"
        description="Começe nos esnsinando sobre você."
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Valor hora-aula" />

        </fieldset>

        <fieldset>
          <legend>Horários disponíveis</legend>

          <Input name="week_day" label="Dia da semana" />
          <Input name="from" label="Das" />
          <Input name="to" label="Até" />

        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
          </p>
          <button type="button">
            Salvar cadastro
          </button>
        </footer>
      </main>
    </div>
  )
}

export default TeacherForm