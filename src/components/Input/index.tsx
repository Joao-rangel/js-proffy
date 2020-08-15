import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { /* importa todas as propriedades de html */
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...rest }) => { /* era function Input() { | ...rest pega todas as propriedades e adiciona */
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input