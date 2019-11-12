export const submitForm$$ = () => {
  const url = "http://www.mocky.io/v2/5d9d9219310000153650e30b";
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
};

export const isEmailProperlyFormed = email => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return email.match(pattern);
};

export const isPasswordProperlyFormed = password => {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,20}$/g;
  return password.match(pattern);
};

export const validateEamil = (email, errorCallback) => {
  // Email is required
  if (!email) {
    errorCallback("This is a required field");
    return false;
  }

  // Email should be valid
  if (!isEmailProperlyFormed(email)) {
    errorCallback("Please enter a valid email address.");
    return false;
  }
  return true;
};

export const validatePassword = (password, errorCallback) => {
  // Password is required
  if (!password) {
    errorCallback("This is a required field");
    return false;
  }

  // Password should be valid
  if (!isPasswordProperlyFormed(password)) {
    errorCallback(
      "Your password should be of minimum 6 characters and contain atleast one uppercase"
    );
    return false;
  }
  return true;
};
