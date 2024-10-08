import LoginAction from '../pages/LoginPage/LoginAction';
import HeaderAction from '../pages/HeaderPage/HeaderAction';
import NewCustomerAction from '../pages/Common/NewCustomerPage/NewCustomerAction';
import privateData from '../../testData/PrivateData.json';
import data from '../../testData/TC_F002_CreateNewCustomer.json';

describe('Create Job', () => {
  it('Just create a new job in calendar', () => {

    // Prepare Expected data??
    const newCustomerData = {
      "name": "Eliza",
      "email": "eliza@example.com"
    };
    // Create Expected Json file
    cy.writeFile('cypress/ExpectedData/Expected_TC_F002_CreateNewCustomer.json', newCustomerData)
      .then(() => {
        cy.log('File written successfully');
      });

    // Navigate to home page
    cy.visit(privateData.url);

    // Login to GD
    const loginAction = new LoginAction();
    loginAction.login(privateData.username, privateData.password);

    // Open New Customer
    const headerAction = new HeaderAction();
    headerAction.openNewCustomer();

    // Add new customer
    const newCustomerAction = new NewCustomerAction();
    newCustomerAction.AddNewCustomer(data);



  });
});
