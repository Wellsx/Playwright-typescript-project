class PageData {
  Url = {
    register: "/customer/account/create/",
    login: "/customer/account/login/",
    forgotPassword: "customer/account/forgotpassword/",
    myAccount: "/customer/account/",
  };

  ErrorMessages = {
    requiredFIeldError: "This is a required field.",
    invalidEmailError: "Please enter a valid email address (Ex: johndoe@domain.com).",
    minimumPasswordError: "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.",
    invalidPasswordError:
      "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.",
    confirmPasswordError: "Please enter the same value again.",
    passwordWeak: "Weak",
    invalidLoginMessage: "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.",
  };

  PageTitle = {
    login: "Customer Login",
    register: "Create New Customer Account",
    myAccount: "My Account ",
    forgotPassword: "Forgot Your Password?",
  };
}

export default new PageData();
