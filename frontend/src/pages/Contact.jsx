import React, { useState } from 'react';
import './Projects.css'
import Navbar from '../components/Navbar'
import {useTheme} from 'styled-components';
function ContactForm() {
  const theme = useTheme()
  console.log(theme)
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  };

  return (
    <div className='app-container' id='contact'>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
