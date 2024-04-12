import LoginAction from '../actions/LoginAction.js';
import privateData from '../../testData/PrivateData.json'; // Assuming login.json is in testData folder

describe('A/B Testing', () => {
  it('should load a version of the A/B Testing page', () => {

    // Nav to home page
    cy.visit(privateData.url);

    // Nav to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(privateData.username, privateData.password)

  });
});