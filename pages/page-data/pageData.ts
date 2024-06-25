export const Url = {
  register: "/customer/account/create/",
  login: "/customer/account/login/",
  forgotPassword: "customer/account/forgotpassword/",
  myAccount: "/customer/account/",
};

export const ErrorMessages = {
  requiredFIeldError: "This is a required field.",
  invalidEmailError: "Please enter a valid email address (Ex: johndoe@domain.com).",
  minimumPasswordError: "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.",
  invalidPasswordError:
    "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.",
  confirmPasswordError: "Please enter the same value again.",
  passwordWeak: "Weak",
  invalidLoginMessage: "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
};

export const PageTitle = {
  login: "Customer Login",
  signOut: "You are signed out",
  register: "Create New Customer Account",
  myAccount: "My Account ",
  forgotPassword: "Forgot Your Password?",
};
