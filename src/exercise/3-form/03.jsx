import { useState } from 'react';

const UserForm = ({ onSubmitUser }) => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const _handleSubmit = (event) => {
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
    }

    onSubmitUser({ name, password });
    event.preventDefault();
  };

  const _handleChangeName = (event) => {
    setName(event.target.value);
  };

  const _handleChangePassword = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  return (
    <form className="vertical-stack form" onSubmit={_handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          onChange={_handleChangeName}
          value={name}
          type="text"
          name="name"
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          value={password}
          type="password"
          name="password"
          onChange={_handleChangePassword}
        />
      </label>
      <div style={{ color: 'red' }}>{error}</div>
      <input type="submit" value="Submit" />
    </form>
  );
};

const Form = () => {
  const onSubmitUser = (data) => {
    alert('Form submitted: ' + JSON.stringify(data));
  };
  return <UserForm onSubmitUser={onSubmitUser} />;
};

export default Form;
