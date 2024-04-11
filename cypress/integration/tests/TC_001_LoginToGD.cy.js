import LoginAction from '../actions/LoginAction.js';
import testData from '../../testData/Login.json'; // Assuming login.json is in testData folder

describe('A/B Testing', () => {
  it('should load a version of the A/B Testing page', () => {

    // Nav to home page
    cy.visit('https://r2.gdesk.io/auth/login/');

    // Nav to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(testData.username, testData.password)

  });
});