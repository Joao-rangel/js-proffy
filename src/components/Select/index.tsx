import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { /* importa todas as propriedades de html */
  label: string;
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => { /* era function Select() { | ...rest pega todas as propriedades e adiciona */
  return ( /* React deixa usar estruturas de repetição como usado no select */
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} defaultValue="" {...rest}>
        <option value="" disabled hidden>Selecione...</option>

        {options.map(option => {
          return <option key={option.value} value={option.value}>{option.label}</option>
        })}
      </select>
    </div>
  )
}

export default Select