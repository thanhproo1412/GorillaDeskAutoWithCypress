import LoginAction from '../pages/LoginPage/LoginAction';
import HeaderAction from '../pages/HeaderPage/HeaderAction';
import NewCustomerAction from '../pages/Common/NewCustomerPage/NewCustomerAction';
import privateData from '../../testData/PrivateData.json';
import data from '../../testData/TestData_TC_F002_CreateNewCustomer.json';
import { generateRandom20DigitNumber } from '../function/Random';

describe('Create Job', () => {
  it('Just create a new job in calendar', () => {
    // Generate random ID
    const random_id = generateRandom20DigitNumber();

    const testDataFilename = 'cypress/testData/TestData_TC_F002_CreateNewCustomer.json'
    const expectedFilename = 'cypress/ExpectedData/Expected_TC_F002_CreateNewCustomer.json'

    cy.readFile(testDataFilename, 'utf8').then((fileData) => {
      fileData.newCustomer['account#'] = random_id;
      cy.writeFile(expectedFilename, fileData).then(() => {
        cy.log('Updated Data Written Successfully');
        cy.log(fileData.newCustomer['account#']);
      });
    });

    data.newCustomer['account#'] = random_id;

    // Proceed with the rest of the test after ensuring the file update is complete
    cy.visit(privateData.url, { timeout: 60000 });

    // Login
    const loginAction = new LoginAction();
    loginAction.login(privateData.username, privateData.password);

    // Open New Customer
    const headerAction = new HeaderAction();
    headerAction.openNewCustomer();

    // Add a new customer
    const newCustomerAction = new NewCustomerAction();
    newCustomerAction.AddNewCustomer(data);
  });
});