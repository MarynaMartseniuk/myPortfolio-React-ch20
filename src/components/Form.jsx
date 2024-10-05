import { useState } from 'react';
import './Form.css';

import { validateEmail } from '../utils/helpers';

function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name) {
        setErrorMessage('Please, enter your name!');
        return;
    };

    if (!email) {
        setErrorMessage('Please, enter an email!');
        return;
    } else {
        if (!validateEmail(email)) {
            setErrorMessage('Please, enter a valid email!');
            return;
          };
        
    };

    if (!message) {
        setErrorMessage('Message is required!');
        return;
    };

    alert(`Dear ${name}, your message has been sent!`);

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container text-center">
      <h1>Hello {name}</h1>
      <h2>If you would like to contact me, please, leave your email and message down below. I will contact you as soon as possible!</h2>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="your email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="your name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="your message"
        />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
