import useSignUpForm from "./CustomHooks";
import { usePasswordValidation } from "./Validation";
import "./index.css";

const Signup = () => {
  const {
    inputs,
    valuesPassword1,
    valuesPassword2,
    handleInputChange,
    handleSubmit,
    handleClickShowPassword1,
    handleClickShowPassword2,
  } = useSignUpForm();

  const [validLength, hasNumber, upperCase, lowerCase, match, specialChar] =
    usePasswordValidation({
      password1: inputs.password1,
      password2: inputs.password2,
    });

  return (
    <div className="  grid place-items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 ">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            onChange={handleInputChange}
            value={inputs.email}
            required
            className="  border bg-gray-100 border-gray-200 hover:border-blue  focus:border-blue focus:bg-white  disabled:border-gray-50 disabled:bg-gray-50 disabled:cursor-auto rounded-full w-full py-2 px-3 text-gray-400 leading-tight "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            User name
          </label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
            maxLength={12}
            required
            className="  border bg-gray-100 border-gray-200 hover:border-blue  focus:border-blue focus:bg-white  disabled:border-gray-50 disabled:bg-gray-50 disabled:cursor-auto rounded-full w-full py-2 px-3 text-gray-400 leading-tight "
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type={
              valuesPassword1.showPassword1 === "password1"
                ? "text"
                : "password"
            }
            name="password1"
            onChange={handleInputChange}
            value={inputs.password1}
            required
            className=" border bg-gray-100 border-gray-200 rounded-full w-full py-2 px-3 text-gray-400 leading-tight "
          />
          <div
            className="absolute inset-y-1/2 right-0 pr-3 flex "
            onClick={() => handleClickShowPassword1("password1")}
          >
            {!valuesPassword1.showPassword1 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="mb-4 relative">
          <label className="block text-gray-400 text-sm font-bold mb-2">
            Re-enter Password
          </label>
          <input
            type={
              valuesPassword2.showPassword2 === "password2"
                ? "text"
                : "password"
            }
            name="password2"
            onChange={handleInputChange}
            value={inputs.password2}
            required
            className=" border bg-gray-100 border-gray-200 rounded-full w-full py-2 px-3 text-gray-400 leading-tight "
          />
          <div
            className="absolute inset-y-1/2 right-0 pr-3 flex  "
            onClick={() => handleClickShowPassword2("password2")}
          >
            {!valuesPassword2.showPassword2 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="mb-6">
          <ul>
            <li className="mb-4 flex text-gray-400 ">
              {!inputs.password1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="gray"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              {inputs.password1 && validLength ? (
                <span>zelenoe</span>
              ) : (
                <span></span>
              )}
              {inputs.password1 && !validLength ? (
                <span>krasnoe</span>
              ) : (
                <span></span>
              )}
              At least 8 characters
            </li>

            <li className="mb-4 flex text-gray-400 ">
              {!inputs.password1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="gray"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              {inputs.password1 && upperCase && lowerCase ? (
                <span>zelenoe</span>
              ) : (
                <span></span>
              )}
              {inputs.password1 || (upperCase && !lowerCase) ? (
                <span>krasnoe</span>
              ) : (
                <span></span>
              )}
              At least 1 uppercase and 1 lowercase letter
            </li>

            <li className="mb-4 flex text-gray-400 ">
              {!inputs.password1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="gray"
                  viewBox="0 0 24 24"
                  stroke="white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
              {inputs.password1 && specialChar ? (
                <span>zelenoe</span>
              ) : (
                <span></span>
              )}
              {inputs.password1 && !specialChar ? (
                <span>krasnoe</span>
              ) : (
                <span></span>
              )}
              At least special characters (like ! @ % $ # ^)
            </li>
          </ul>
        </div>

        <button
          disabled={
            inputs.password1 !== inputs.password2 &&
            !inputs.validLength &&
            !inputs.hasNumber &&
            !inputs.upperCase &&
            !inputs.lowerCase &&
            !inputs.specialChar
              ? true
              : false
          }
          type="submit"
          className="mt-3 items-centre w-2/5 text-sm font-semibold
            bg-orange-400  text-white rounded-lg
            px-6 py-3 block shadow-xl  hover:bg-amber-700 active:bg-amber-800  focus:bg-amber-600 disabled:bg-orange-100 disabled:cursor-auto
disabled:pointer-events-none"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default Signup;
