import { useState } from "react";

const useSignUpForm = () => {
  const [inputs, setInputs] = useState(() => {
    return {
      name: "",
      email: "",
      password1: "",
      password2: "",
    };
  });
  const { name, email, password1, password2 } = inputs;

  const [valuesPassword1, setValuesPassword1] = useState({
    showPassword1: false,
  });
  const handleClickShowPassword1 = (fieldName) => {
    setValuesPassword1({
      showPassword1:
        fieldName === valuesPassword1.showPassword1 ? "" : fieldName,
    });
  };

  const [valuesPassword2, setValuesPassword2] = useState({
    showPassword2: false,
  });

  const handleClickShowPassword2 = (fieldName) => {
    setValuesPassword2({
      showPassword2:
        fieldName === valuesPassword2.showPassword2 ? "" : fieldName,
    });
  };

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
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password1 !== password2) {
      alert("Password1 and Password2 should be the same");
    } else {
      console.log(inputs);
      const newUser = { name, email, password1, password2 };
      try {
        const body = JSON.stringify(newUser);
        alert(body);
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    handleClickShowPassword1,
    handleClickShowPassword2,
    valuesPassword1,
    valuesPassword2,
    inputs,
  };
};

export default useSignUpForm;
