import LoginAction from '../pages/LoginPage/LoginAction';
import HeaderAction from '../pages/HeaderPage/HeaderAction';
import NewCustomerAction from '../pages/Common/NewCustomerPage/NewCustomerAction';
import privateData from '../../testData/PrivateData.json';
import data from '../../testData/TC_F002_CreateNewCustomer.json';
import writeJsonFile from './../../integration/function/writeJsonFile';

describe('Create Job', () => {
  it('Just create a new job in calendar', () => {
    // Optionally, if you want to modify or use the data after adding the customer
    const newCustomerData = {
      name: data.name, // Example of how to pull in data from the original object
    };

    writeJsonFile('cypress/ExpectedData/TC_F002_CreateNewCustomer.json',newCustomerData)

    // // Write the new customer data to a JSON file
    // cy.writeFile('../../expectedData/TC_F002_CreateNewCustomer.json', newCustomerData, { encoding: 'utf-8' })
    //   .then(() => {
    //     cy.log('File written successfully');
    //   });

    // Navigate to the home page
    cy.visit(privateData.url);

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
