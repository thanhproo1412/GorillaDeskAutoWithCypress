import LoginAction from '../actions/LoginAction.js';
import privateData from '../../testData/PrivateData.json'; // Assuming login.json is in testData folder

describe('Login to GD', () => {
  it('should Login to GD', () => {

    // Nav to home page
    cy.visit(privateData.url);

    // Nav to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(privateData.username, privateData.password)

  });
});