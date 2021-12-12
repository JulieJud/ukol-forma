import { useState } from "react";

const useSignUpForm = (callback) => {
  // const [inputs, setInputs] = useState({});

  const [passwordShown, setPasswordShown] = useState(false);
  const [inputs, setInputs] = useState(() => {
    return {
      name: "",
      email: "",
      password1: "",
      password2: "",
    };
  });

  /* const handleNameChange = (event) => {
    const index = inputs.email.indexOf("@");
    const name = inputs.email.slice(0, index);
    inputs.name = name;
    console.log(name);
  };*/

  const handleInputChange = (event) => {
    const name = inputs.email.substring(0, inputs.email.lastIndexOf("@"));
    if (name.length < 12) {
      inputs.name = name;
    } else {
      inputs.name = inputs.email.substring(0, 12);
    }

    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));

    console.log(event.target.value);
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.password1 !== inputs.password2) {
      alert("error");
    }
  };

  return {
    handleSubmit,
    // handleNameChange,
    handleInputChange,
    togglePassword,
    inputs,
  };
};
export default useSignUpForm;
