import useSignUpForm from "./CustomHooks";
import { usePasswordValidation } from "./Validation";

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

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      password1: inputs.password1,
      password2: inputs.password2,
    });

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
        <div>
          <ul>
            <li>
              Valid Length:{" "}
              {validLength ? <span>True</span> : <span>False</span>}
            </li>
            <li>
              Has a Number: {hasNumber ? <span>True</span> : <span>False</span>}
            </li>
            <li>
              UpperCase: {upperCase ? <span>True</span> : <span>False</span>}
            </li>
            <li>
              LowerCase: {lowerCase ? <span>True</span> : <span>False</span>}
            </li>
            <li>Match: {match ? <span>True</span> : <span>False</span>}</li>
            <li>
              Special Character:{" "}
              {specialChar ? <span>True</span> : <span>False</span>}
            </li>
          </ul>
        </div>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default Signup;
