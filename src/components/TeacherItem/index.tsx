import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import api from '../../services/api'

import './styles.css'

export interface Teacher { /* feita separada para exportar para TeacherList */
  id: number,
  subject: string,
  cost: number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string
}

interface TeacherItemProps { /* declarar interface para inserir variáveis no DOM */
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      "user_id": teacher.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Joao Rangel" />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Valor/hora
        <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createNewConnection /* target _blank para abrir em nova guia */}
          href={`https://wa.me/${teacher.whatsapp}` /* embeded js code */}
        >
          <img src={whatsappIcon} alt="whatsap" />
        Entrar em contato
      </a>
      </footer>
    </article>
  );
}

export default TeacherItem