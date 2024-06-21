import { faker } from "@faker-js/faker";
import moment from "moment";
import fs from "fs";
import path from "path";

moment.locale("en-gb");

class Data {
  today = moment().format("L");

  getUnixTimeStamp() {
    let number = moment().unix();
    let num = number.toString();
    return num;
  }

  firstName = faker.person.firstName();
  lastName = faker.person.lastName();
  uniqueEmail = "test_" + this.getUnixTimeStamp() + "@tester.com";
  validPassword = "Password123";
  invalidPassword = "password1";
  shortPassword = "Pass12";
  invalidEmail = "invalidmail.com";

  save_email(email: string) {
    const user = { email: email };
    const filePath = path.join(__dirname, "registeredUser.json");
    fs.writeFileSync(filePath, JSON.stringify(user, null, 2));
  }
}

export default new Data();
