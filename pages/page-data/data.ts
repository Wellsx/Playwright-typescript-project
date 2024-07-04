import { faker } from '@faker-js/faker';
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

  public readonly firstName = faker.person.firstName();
  public readonly lastName = faker.person.lastName();
  public readonly uniqueEmail = "test_" + this.getUnixTimeStamp() + "@tester.com";
  public readonly validPassword = "Password123";
  public readonly invalidPassword = "password1";
  public readonly shortPassword = "Pass12";
  public readonly invalidEmail = "invalidmail.com";

  public readonly searchQuery = "T-shirt";
  public readonly invalidQuery = "iq";

  save_email(email: string) {
    const user = { email: email };
    const filePath = path.join(__dirname, "registeredUser.json");
    fs.writeFileSync(filePath, JSON.stringify(user, null, 2));
  }
}

export default new Data();
