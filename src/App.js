import useSignUpForm from "./CustomHooks";

const Signup = () => {
  //const [passwordShown, setPasswordShown] = useState(false);

  // const togglePassword = () => {
  //  setPasswordShown(!passwordShown);
  // };

  //  const handleClickShowPassword = (fieldName) => {
  // setValues({
  // ...values,
  //   showPassword: fieldName === values.showPassword ? "" : fieldName,
  //  });
  // };

  const {
    inputs,
    values,
    handleInputChange,
    handleSubmit,
    handleClickShowPassword,
    //togglePassword,
    //handleNameChange,
  } = useSignUpForm();

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          autoComplete="off"
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
          // type={passwordShown ? "text" : "password"}
          type={values.showPassword === "password1" ? "text" : "password"}
          name="password1"
          onChange={handleInputChange}
          value={inputs.password1}
          required
        />

        <button
          type="button"
          onClick={() => handleClickShowPassword("password1")}
        >
          Show Password
        </button>
      </div>
      <div>
        <label>Re-enter Password</label>
        <input
          type={values.showPassword === "password2" ? "text" : "password"}
          name="password2"
          onChange={handleInputChange}
          value={inputs.password2}
          required
        />
        <button
          type="button"
          onClick={() => handleClickShowPassword("password2")}
        >
          Show Password
        </button>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default Signup;
