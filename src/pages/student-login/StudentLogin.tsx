import { useState } from 'react';
import './StudentLogin.css';
import axios from 'axios';

const StudentLogin = () => {
  const [matricula, setMatricula] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios.post('http://localhost:8080/student/login', {
      matricula: matricula,
      password: password
    }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  }


  return (
    <div id='login'>
      <h2>OBJSYS</h2>
      <form>
        <label htmlFor='matricula'>Matricula</label>
        <input type='text' placeholder='Digite sua matrícula' id='matricula' onChange={e => setMatricula(e.target.value)} />
        <label htmlFor='senha'>Senha</label>
        <input type='password' placeholder='Digite sua senha' id='senha' onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>Logar</button>
      </form>
    </div>
  )
}

export default StudentLogin;