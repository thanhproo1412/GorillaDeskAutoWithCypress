import LoginAction from '../../support/pages/LoginPage/LoginAction';
import HeaderAction from '../../support/pages/HeaderPage/HeaderAction';
import NewCustomerAction from '../../support/pages/Common/NewCustomerPage/NewCustomerAction';
import privateData from '../../fixtures/testData/PrivateData.json';
  import { generateRandom20DigitNumber } from '../../support/supportFunction/Random';

describe('Create Job', () => {
  it('Just create a new job in calendar', () => {
    // Generate random ID
    const random_id = generateRandom20DigitNumber();

    const testDataFilename = 'cypress/fixtures/testData/TestData_TC_F002_CreateNewCustomer.json';
    const expectedFilename = 'cypress/fixtures/ExpectedData/Expected_TC_F002_CreateNewCustomer.json';

    cy.readFile(testDataFilename, 'utf8').then((fileData) => {
      fileData.newCustomer['account#'] = random_id;

      // Write to the expected file first
      cy.writeFile(expectedFilename, fileData).then(() => {
        cy.log('Updated Data Written Successfully to Expected Data File');

        // Write to the test data file after the first write is complete
        cy.writeFile(testDataFilename, fileData).then(() => {
          cy.log('Updated Data Written Successfully to Test Data File');

          // Proceed with the rest of the test
          cy.visit(privateData.url, { timeout: 60000 });

          // Login
          const loginAction = new LoginAction();
          loginAction.login(privateData.username, privateData.password);

          // Open New Customer
          const headerAction = new HeaderAction();
          headerAction.openNewCustomer();

          // Add a new customer
          const newCustomerAction = new NewCustomerAction();
          newCustomerAction.AddNewCustomer(fileData); // Use the updated data
          
        });
      });
    });
  });
});
