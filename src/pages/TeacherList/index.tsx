import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader/'
import TeacherItem, { Teacher } from '../../components/TeacherItem/'

import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'

import './styles.css'

function TeacherList() {
  const [teacherClasses, setTeacherClasses] = useState([]) /* começa com array nil pois ainda não filtrou nada */

  const [subject, setSubject] = useState('')
  const [week_day, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  async function searchTeachers(e: FormEvent) { /* função assincrona (alternativa ao then/catch) */
    e.preventDefault()

    const response = await api.get('classes', { /* só posso enviar os parâmetros direto em POST e PUT */
      params: {
        subject,
        week_day: Number(week_day),
        time
      }
    })
    setTeacherClasses(response.data)
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Encontre seu proffy!">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
            options={[
              { value: 'Física', label: 'Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'História', label: 'História' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />

          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={e => { setTime(e.target.value) }}
          />

          <button type="submit">
            Buscar
            </button>
        </form>
      </PageHeader>

      <main>
        {teacherClasses.map((teacher: Teacher) => { /* Teacher foi importado de TeacherItem para usar aqui */
          return <TeacherItem key={teacher.id} teacher={teacher} />
        })}
      </main>
    </div>
  )
}

export default TeacherList