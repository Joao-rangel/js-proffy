import React from 'react'

import PageHeader from '../../components/PageHeader/'
import TeacherItem from '../../components/TeacherItem/'

import './styles.css'
import Input from '../../components/Input'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Encontre seu proffy!">
        <form id="search-teachers">
          <Input name="sujbect" label="Matéria" />
          <Input name="week-day" label="Dia da semana" />
          <Input name="time" label="Hora" type="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList