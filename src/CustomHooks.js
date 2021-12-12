import { useState } from "react";

const useSignUpForm = (callback) => {
  // const [inputs, setInputs] = useState({});

  const [inputs, setInputs] = useState(() => {
    return {
      name: "",
      email: "",
      password: "",
      password2: "",
      showPassword: false,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.password1 !== inputs.password2) {
      alert("error");
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
    console.log(event.target.value);
  };

  const handleNameChange = (event) => {
    const index = inputs.email.indexOf("@");
    const name = inputs.email.slice(0, index);
    inputs.name = name;
    console.log(name);
  };

  return {
    handleSubmit,
    handleNameChange,
    handleInputChange,
    inputs,
  };
};
export default useSignUpForm;
