import React from 'react'
import { Link } from 'react-router-dom'

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css'

interface PageHeaderProps { /* propriedade para definir var para o componente */
  title: string;
}

/* React.FC = function component do typeScript, permite passar parâmetros */
const PageHeader: React.FC<PageHeaderProps> = (props) => { /* props passadas na configuração da interface acima */
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/"> 
          <img src={backIcon} alt="Voltar"/>
        </Link>
        <img src={logoImg} alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>

    </header> /* props.children importa o conteúdo dentro da tag Pageheader onde foi chamada */
  )
}

export default PageHeader