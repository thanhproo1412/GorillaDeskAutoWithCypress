import LoginAction from '../pages/LoginPage/LoginAction';
import HeaderAction from '../pages/HeaderPage/HeaderAction';
import NewCustomerAction from '../pages/Common/NewCustomerPage/NewCustomerAction';
import privateData from '../../testData/PrivateData.json';
import data from '../../testData/TC_F002_CreateNewCustomer.json';

describe('Create Job', () => {
  it('Just create a new job in calendar', () => {
    // Navigate to home page
    cy.visit(privateData.url);

    // Navigate to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(privateData.username, privateData.password);

    // Open New Customer
    const headerAction = new HeaderAction();
    headerAction.openNewCustomer();

    // Add new customer
    const newCustomerAction = new NewCustomerAction();
    newCustomerAction.AddNewCustomer(data);

    // Optionally, if you want to modify or use the data after adding the customer
    const newCustomerData = {
      // You can structure this object however you need
      name: data.name, // Example of how to pull in data from the original object
      // Add other customer details here as necessary
    };

    // Write the new customer data to a JSON file
    cy.writeFile('../../expectedData/TC_F002_CreateNewCustomer.json', newCustomerData)
      .then(() => {
        cy.log('File written successfully');
      });
  });
});
