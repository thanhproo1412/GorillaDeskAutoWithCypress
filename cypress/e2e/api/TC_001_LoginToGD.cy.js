import LoginAction from '../../support/pages/LoginPage/LoginAction';
import privateData from '../../fixtures/testData/PrivateData.json';

for (let i = 0; i < 1; i++) {

  describe('Login to GD', () => {
    it('should Login to GD', () => {

      // Nav to home page
      cy.visit(privateData.url);

      // Nav to AB Testing page
      const loginAction = new LoginAction();
      loginAction.login(privateData.username, privateData.password)

      cy.get('#title-calendar-time', { timeout: 30000 })

      console.log(cy.getAllLocalStorage())

    });
  });

}


