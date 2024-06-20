import { faker } from '@faker-js/faker';

class Data {

    firstName = faker.person.firstName();
    lastName = faker.person.lastName();
    email = faker.internet.email();
    validPassword = "Password123";
    invalidPassword = "password1";

}

export default new Data()
