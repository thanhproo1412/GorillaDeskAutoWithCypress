import LoginAction from '../pages/LoginPage/LoginAction';
import HeaderAction from '../pages/HeaderPage/HeaderAction';
import privateData from '../../testData/PrivateData.json';


console.log(privateData)

describe('Create Job', () => {
  it('Just create a new job in calendar', () => {

    // Nav to home page
    cy.visit(privateData.url);

    // Nav to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(privateData.username, privateData.password)

    const headerAction = new HeaderAction()

    headerAction.openNewCustomer()

  });
});