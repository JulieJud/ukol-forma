import { useState, useEffect } from "react";

export const usePasswordValidation = ({
  password1 = "",
  password2 = "",
  requiredLength = 8,
}) => {
  const [validLength, setValidLength] = useState(null);
  // const [hasNumber, setHasNumber] = useState(null);
  const [upperCase, setUpperCase] = useState(null);
  const [lowerCase, setLowerCase] = useState(null);
  const [specialChar, setSpecialChar] = useState(null);
  //const [match, setMatch] = useState(null);

  useEffect(() => {
    setValidLength(password1.length >= requiredLength ? true : false);
    setUpperCase(password1.toLowerCase() !== password1);
    setLowerCase(password1.toUpperCase() !== password1);
    // setHasNumber(/\d/.test(password1));
    // setMatch(password1 && password1 === password2);
    setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(password1));
  }, [password1, password2, requiredLength]);

  return [validLength, upperCase, lowerCase, specialChar];
};
