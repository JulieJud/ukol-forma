import useSignUpForm from "./CustomHooks";

const Signup = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          value={inputs.email}
          required
        />
      </div>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleInputChange}
          value={inputs.firsName}
          maxLength={12}
          required
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password1"
          onChange={handleInputChange}
          value={inputs.password1}
          required
        />
      </div>
      <div>
        <label>Re-enter Password</label>
        <input
          type="password"
          name="password2"
          onChange={handleInputChange}
          value={inputs.password2}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default Signup;
