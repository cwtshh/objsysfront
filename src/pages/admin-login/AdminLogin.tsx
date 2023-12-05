import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const admin_endpoint = "http://localhost:5000/admin/login";
  const navigate = useNavigate();

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password
    };
    try {
      const res = await axios.post(admin_endpoint, data);
      localStorage.setItem('user@details', JSON.stringify(res.data));
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id='login'>
      <h2>OBJSYS</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='matricula'>Email</label>
        <input type='text' placeholder='Digite sua matrícula' id='matricula' onChange={e => setEmail(e.target.value)} />
        <label htmlFor='senha'>Senha</label>
        <input type='password' placeholder='Digite sua senha' id='senha' onChange={e => setPassword(e.target.value)}/>
        <button type='submit'>Logar</button>
      </form>
    </div>
  )
}

export default AdminLogin;