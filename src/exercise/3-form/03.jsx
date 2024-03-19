import { useForm } from 'react-hook-form';

const UserForm = ({ onSubmitUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form className="vertical-stack form" onSubmit={handleSubmit(onSubmitUser)}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" {...register('name')} />
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
        />
      </label>
      {errors.password && (
        <div style={{ color: 'red' }}>{errors.password.message}</div>
      )}
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
