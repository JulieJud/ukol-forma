import useSignUpForm from "./CustomHooks";

const Signup = () => {
  const {
    inputs,
    passwordShown,
    handleInputChange,
    handleSubmit,
    handleNameChange,
    togglePassword,
  } = useSignUpForm();

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
          name="name"
          onChange={handleInputChange}
          value={inputs.name}
          maxLength={12}
          required
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type={passwordShown ? "text" : "password"}
          name="password1"
          onChange={handleInputChange}
          value={inputs.password1}
          required
        />
        <button onClick={togglePassword}>Show Password</button>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input
          type={passwordShown ? "text" : "password"}
          name="password2"
          onChange={handleInputChange}
          value={inputs.password2}
          required
        />
        <button onClick={togglePassword}>Show Password</button>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default Signup;
