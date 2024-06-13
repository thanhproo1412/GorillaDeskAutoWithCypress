import LoginAction from '../pages/LoginPage/LoginAction';
import PrivateData from '../../testData/PrivateData.json'; // Assuming login.json is in testData folder

describe('Login to GD', () => {
  it('should Login to GD', () => {

    const privateData = JSON.parse(PrivateData)

    // Nav to home page
    cy.visit(privateData.url);

    // Nav to AB Testing page
    const loginAction = new LoginAction();
    loginAction.login(privateData.username, privateData.password)

  });
});