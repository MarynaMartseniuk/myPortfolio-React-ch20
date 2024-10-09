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
    console.log('DATA for onChange={handleInputChange}:');
    console.log(target)

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputEmpty = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    console.log('DATA for onBlur={handleInputEmpty}:');
    console.log(target);
    console.log(`inputValue is ${inputValue}`);
    console.log(inputValue.trim().lenghth, inputValue.trim()==='')

    if (inputType === 'email') {
      if (inputValue.trim() === '') {
        setErrorMessage('Please, enter your email!');
      }
      return;
    // } else {
    //   if (!validateEmail(inputValue)) {
    //       setErrorMessage('Please, enter a valid email!');
    //       return;
    //   };
    };        

    if (inputType === 'name') {
      if (inputValue.trim()  === '') {
        setErrorMessage('Please, enter your name!');
      }
      return;
    };

    if (inputType === 'message') {
      if (inputValue.trim() === '') {
        setErrorMessage('Please, enter your message!');
      }
      return;
    };

    // if (!name) {
    //   setErrorMessage('Please, enter your name!');
    //   return;
    // };

    // if (!email) {
    //     setErrorMessage('Please, enter an email!');
    //     return;
    // } else {
    //     if (!validateEmail(email)) {
    //         setErrorMessage('Please, enter a valid email!');
    //         return;
    //       };
        
    // };

    // if (!message) {
    //     setErrorMessage('Message is required!');
    //     return;
    // };

    //setMessage('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setErrorMessage('Please, enter an email!');
      return;
  } else {
      if (!validateEmail(email)) {
          setErrorMessage('Please, enter a valid email!');
          return;
        };
      
  };

    if (!name.trim()) {
        setErrorMessage('Please, enter your name!');
        return;
    };

    if (!message.trim()) {
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
      <h1>Hello {name}!</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleInputEmpty}
          type="email"
          placeholder="your email"
        />
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleInputEmpty}
          type="text"
          placeholder="your name"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleInputEmpty}
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
