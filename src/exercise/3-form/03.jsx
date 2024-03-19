const UserForm = ({ onSubmitUser }) => {
  const _handleSubmit = (event) => {
    const name = event.currentTarget.elements.name.value;
    const password = event.currentTarget.elements.password.value;

    onSubmitUser({ name, password });
    event.preventDefault();
  };

  return (
    <form className="vertical-stack form" onSubmit={_handleSubmit}>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
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
