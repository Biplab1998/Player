export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Username required";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (typeof values.phone.trim() !== "number") {
    errors.phone = "Enter valid phone number";
  }
  if (!values.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password needs to be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Password is required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  if (!values.loginEmail) {
    errors.loginEmail = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(values.loginEmail)) {
    errors.loginEmail = "Email address is invalid";
  }
  if (!values.loginPass) {
    errors.loginPass = "Password is required";
  } else if (values.loginPass.length < 6) {
    errors.loginPass = "Password needs to be 6 characters or more";
  }

  return errors;
}
