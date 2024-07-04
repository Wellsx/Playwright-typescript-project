export const Url = {
  register: "/customer/account/create/",
  login: "/customer/account/login/",
  forgotPassword: "customer/account/forgotpassword/",
  myAccount: "/customer/account/",
  women: "/women.html",
  womenTops: "/women/tops-women.html",
  womenTopsLinks: ["women/tops-women/jackets-women.html", "women/tops-women/hoodies-and-sweatshirts-women.html",
    "women/tops-women/tees-women.html", "women/tops-women/tanks-women.html"],
  womenBottoms: "/women/bottoms-women.html",
  womenBottomsLinks: ["/women/bottoms-women/pants-women.html", "/women/bottoms-women/shorts-women.html"],
  men: "/men.html",
  menTops: "/men/tops-men.html",
  menBottoms: "/men/bottoms-men.html",
  menTopsLinks: ["men/tops-men/jackets-men.html", "men/tops-men/hoodies-and-sweatshirts-men.html",
    "men/tops-men/tees-men.html", "men/tops-men/tanks-men.html"],
  menBottomsLinks: ["/men/bottoms-men/pants-men.html", "/men/bottoms-men/shorts-men.html"],
  gear: "/gear.html",
  gearLinks: ["/gear/bags.html", "/gear/fitness-equipment.html", "/gear/watches.html"],
  sale: "/sale.html",
  search: "/catalogsearch/result/?q="

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
  invalidSearch: "Minimum Search query length is 3 "
};

export const PageTitle = {
  login: "Customer Login",
  signOut: "You are signed out",
  register: "Create New Customer Account",
  myAccount: "My Account ",
  forgotPassword: "Forgot Your Password?",
  gear: "Gear",
  men: "Men",
  women: "Women",
  womenTops: "Tops - Women",
  womenTopsTitles: ["Jackets - Tops - Women", "Hoodies & Sweatshirts - Tops - Women", "Tees - Tops - Women", 
    "Bras & Tanks - Tops - Women"],
  womenBottoms: "Bottoms - Women",
};

export const NavID = {
  womenTops: 9,
  womenBottoms: 10,
  womenTopsIDs: [11, 12, 13, 14],
  womenTopLinks: ["Jackets", "Hoodies & Sweatshirts", "Tees", "Bras & Tanks"],
  womenBottomIDs: [15, 16],
  bottomLinks: ["Pants", "Shorts"],
  menTops: 17,
  menBottoms: 18,
  menTopsIDs: [19, 20, 21, 22],
  menTopLinks: ["Jackets", "Hoodies & Sweatshirts", "Tees", "Tanks"],
  menBottomIDs: [23, 24],
  gearIDs: [25, 26, 27],
  gearLinks: ["Bags", "Fitness Equipment", "Watches"],
  sale: "Sale"
}

export const pageInfo = {
  searchHeader: "Search results for: "
}
