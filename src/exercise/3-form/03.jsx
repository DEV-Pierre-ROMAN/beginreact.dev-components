import { useRef } from 'react';

const UserForm = ({ onSubmitUser }) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const _handleSubmit = (event) => {
    const name = usernameRef.current.value;
    const password = passwordRef.current.value;

    onSubmitUser({ name, password });
    event.preventDefault();
  };

  return (
    <form className="vertical-stack form" onSubmit={_handleSubmit}>
      <label htmlFor="name">
        Name
        <input ref={usernameRef} type="text" name="name" />
      </label>
      <label htmlFor="password">
        Password
        <input ref={passwordRef} type="password" name="password" />
      </label>
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
