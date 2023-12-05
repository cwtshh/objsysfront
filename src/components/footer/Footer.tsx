import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
        <img src={logo} />
        <p>
        O sistema de gerenciamento de grupos e alunos, denominado "objsys", 
        é uma aplicação concebida para facilitar a administração eficaz de 
        informações relacionadas a estudantes em um contexto educacional. 
        Esta plataforma oferece funcionalidades abrangentes para professores, 
        administradores e alunos, visando simplificar tarefas administrativas e acadêmicas.
      </p>
    </footer>
  )
}

export default Footer