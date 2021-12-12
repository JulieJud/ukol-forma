import { useState } from "react";

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState(() => {
    return {
      name: "",
      email: "",
      password1: "",
      password2: "",
    };
  });
  const [values, setValues] = useState({
    showPassword: false,
  });

  const handleClickShowPassword = (fieldName) => {
    setValues({
      ...values,
      showPassword: fieldName === values.showPassword ? "" : fieldName,
    });
  };
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputs.password1 !== inputs.password2) {
      alert("error");
    } else {
      alert(setInputs());
    }
  };

  return {
    handleSubmit,
    // handleNameChange,
    handleInputChange,
    //togglePassword,
    handleClickShowPassword,
    values,
    inputs,
  };
};

export default useSignUpForm;
