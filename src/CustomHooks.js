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

  const [isValid, setIsValid] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  const [valuesPassword2, setValuesPassword2] = useState({
    showPassword2: false,
  });
  const focusHandler = (event) => {
    setIsFocus(true);

    console.log(event);
  };

  const blurHandler = (event) => {
    setIsFocus(false);
    setIsBlur(true);

    if (
      inputs.password1 &&
      inputs.validLength &&
      inputs.upperCase &&
      inputs.lowerCase &&
      inputs.specialChar
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }

    console.log(event);
  };

  const handleClickShowPassword1 = (fieldName) => {
    setValuesPassword1({
      showPassword1:
        fieldName === valuesPassword1.showPassword1 ? "" : fieldName,
    });
  };

  const handleClickShowPassword2 = (fieldName) => {
    setValuesPassword2({
      showPassword2:
        fieldName === valuesPassword2.showPassword2 ? "" : fieldName,
    });
  };

  const handleInputChange = (event) => {
    const nameValid = email.substring(0, email.lastIndexOf("@"));
    if (name.length < 12) {
      inputs.name = nameValid;
    } else {
      inputs.name = email.substring(0, 12);
    }

    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    const newUser = { name, email, password1, password2 };
    try {
      const body = JSON.stringify(newUser);
      alert(body);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return {
    handleSubmit,
    handleInputChange,
    handleClickShowPassword1,
    handleClickShowPassword2,
    focusHandler,
    blurHandler,

    valuesPassword1,
    valuesPassword2,
    inputs,
    isFocus,
    isBlur,
    isValid,
  };
};

export default useSignUpForm;
